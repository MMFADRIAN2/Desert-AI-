
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

interface LiveVoiceChatProps {
  onClose: () => void;
}

export const LiveVoiceChat: React.FC<LiveVoiceChatProps> = ({ onClose }) => {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [bars, setBars] = useState<number[]>(new Array(20).fill(2));
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outAudioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Manual decoding helper as per guidelines
  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  // Manual encoding helper as per guidelines
  const encode = (bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  // Manual audio decoding for PCM data as per guidelines
  async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  // Create PCM blob for streaming as per guidelines
  const createBlob = (data: Float32Array) => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = data[i] * 32768;
    }
    return {
      data: encode(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  const startSession = async () => {
    try {
      setStatus('connecting');
      // Create a new instance right before use to ensure the latest API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: "You are Alex, a senior AI voice representative at Desert AI. Desert AI is a premium agency that automates business inbound calls, handles appointment scheduling, and sends SMS follow-ups. You are currently speaking to a potential client who is testing your voice quality. Be warm, professional, efficient, and slightly desert-themed (warm and welcoming). If they ask to book a meeting, pretend to check a real-time calendar and confirm a slot. Keep responses concise and human-like.",
        },
        callbacks: {
          onopen: () => {
            setStatus('active');
            if (!audioContextRef.current) return;
            const source = audioContextRef.current.createMediaStreamSource(stream);
            const scriptProcessor = audioContextRef.current.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              if (isMuted) return;
              const inputData = e.inputBuffer.getChannelData(0);
              
              // Visualizer logic
              const newBars = Array.from(inputData.slice(0, 20)).map(v => Math.max(2, Math.abs(v as number) * 100));
              setBars(newBars);

              const pcmBlob = createBlob(inputData);
              // CRITICAL: Solely rely on sessionPromise resolves to send input
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(audioContextRef.current.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const audioData = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData && outAudioContextRef.current) {
              const ctx = outAudioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const buffer = await decodeAudioData(decode(audioData), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = buffer;
              source.connect(ctx.destination);
              
              // Schedule playback to ensure gapless audio
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => {
                try { s.stop(); } catch (e) {}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => {
            console.error(e);
            setStatus('error');
            setError("Connection failed. Please check your microphone.");
          },
          onclose: () => {
            setStatus('idle');
          },
        },
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError("Failed to access microphone.");
    }
  };

  useEffect(() => {
    startSession();
    return () => {
      // Cleanup resources
      streamRef.current?.getTracks().forEach(t => t.stop());
      audioContextRef.current?.close();
      outAudioContextRef.current?.close();
      if (sessionRef.current) {
        sessionRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-onyx-950/90 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-onyx-900 border border-onyx-800 rounded-[40px] p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-desert-500/10 text-desert-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            Voice + SMS Automation Demo
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 italic-not">Talk to Alex</h2>
          <p className="text-gray-400 text-sm">See how Alex answers questions and triggers text-back follow-ups in real-time.</p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[200px] mb-10">
          {status === 'connecting' && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-desert-500/20 border-t-desert-500 rounded-full animate-spin"></div>
              <p className="text-desert-500 font-bold animate-pulse italic-not">Establishing Secure Line...</p>
            </div>
          )}

          {status === 'active' && (
            <div className="flex items-end justify-center gap-1.5 h-24">
              {bars.map((h, i) => (
                <div 
                  key={i} 
                  className="w-2 bg-desert-500 rounded-full transition-all duration-75" 
                  style={{ height: `${Math.max(8, h)}%` }}
                ></div>
              ))}
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <p className="text-white font-bold mb-2 italic-not">Oops! Something went wrong.</p>
              <p className="text-gray-500 text-sm mb-6">{error}</p>
              <button onClick={startSession} className="px-6 py-2 bg-white text-onyx-950 rounded-xl font-bold hover:bg-gray-200 transition-all">Retry Connection</button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-6">
           <button 
             onClick={() => setIsMuted(!isMuted)}
             className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-red-500 text-white' : 'bg-onyx-800 text-gray-400 hover:bg-onyx-700'}`}
           >
              {isMuted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l22 22"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              )}
           </button>
           <button 
             onClick={onClose}
             className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
           >
              <svg className="w-6 h-6 rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
           </button>
        </div>

        <div className="mt-10 text-center">
           <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Encrypted & Secure Session</p>
        </div>
      </div>
    </div>
  );
};
