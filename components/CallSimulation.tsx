
import React, { useState } from 'react';

const simulations = [
  {
    type: "Emergency Service",
    intent: "High-Priority Dispatch",
    transcript: [
      { speaker: "AI", text: "Desert Plumbing Emergency Line, this is Alex. Are you experiencing a leak right now?" },
      { speaker: "User", text: "Yes, my water heater is leaking all over the basement!" },
      { speaker: "AI", text: "I understand. I've flagged this as urgent. I have a technician who can be there in 45 minutes. What is your address?" }
    ]
  },
  {
    type: "Legal Consultation",
    intent: "Calendar Synchronization",
    transcript: [
      { speaker: "AI", text: "Law Offices of Miller & Co. How can I direct your inquiry today?" },
      { speaker: "User", text: "I'd like to schedule an initial consultation for a property dispute." },
      { speaker: "AI", text: "Certainly. Our senior partners are available next Tuesday at 10 AM or Wednesday at 2 PM. Which works best for you?" }
    ]
  }
];

interface CallSimulationProps {
  onBookWalkthrough: (e: React.MouseEvent) => void;
  onViewSMSLog: (e: React.MouseEvent) => void;
}

export const CallSimulation: React.FC<CallSimulationProps> = ({ onBookWalkthrough, onViewSMSLog }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Symmetric bar heights for a cleaner "wave" look
  const barHeights = [0.15, 0.3, 0.5, 0.8, 0.6, 0.4, 0.7, 0.9, 0.5, 0.8, 0.6, 0.4, 0.7, 0.9, 0.6, 0.4, 0.2];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-10">
        <div className="inline-block px-3 py-1 bg-desert-100 text-desert-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-5 border border-desert-200">
          Interaction Blueprint
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-onyx-950 mb-6 italic-not">The Logic of an <span className="text-desert-500">AI Call.</span></h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Desert AI doesn't just "talk"—it listens for intent. Witness how our neural architecture processes complex requests, identifies urgency, and executes business tasks with surgical precision.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-3 mb-6">
            {simulations.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-3 text-sm ${activeTab === i ? 'desert-gradient text-white shadow-lg shadow-desert-500/20' : 'bg-white text-gray-500 border border-desert-100 hover:border-desert-300'}`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === i ? 'bg-white animate-pulse' : 'bg-desert-200'}`}></span>
                {s.type}
              </button>
            ))}
          </div>
          
          <div className="bg-onyx-950 border border-onyx-900 rounded-[2.5rem] p-8 flex-1 flex flex-col relative shadow-2xl">
            <div className="absolute top-6 right-8">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-desert-400/40">Intent: {simulations[activeTab].intent}</span>
            </div>
            
            <div className="space-y-6 mt-6 flex-1">
              {simulations[activeTab].transcript.map((msg, i) => (
                <div key={i} className={`flex gap-4 ${msg.speaker === 'AI' ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold border-2 ${msg.speaker === 'AI' ? 'bg-onyx-900 text-desert-500 border-onyx-800' : 'bg-desert-500 text-white border-white/10'}`}>
                    {msg.speaker === 'AI' ? 'A' : 'U'}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[85%] ${msg.speaker === 'AI' ? 'bg-onyx-900 text-white border border-onyx-800' : 'desert-gradient text-white shadow-md'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-6 justify-center">
                 <div className="h-[1px] flex-1 bg-onyx-900"></div>
                 <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest italic-not">End of Logic Trace</span>
                 <div className="h-[1px] flex-1 bg-onyx-900"></div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                 onClick={onBookWalkthrough}
                 className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-bold px-8 py-4 bg-desert-500 rounded-2xl hover:bg-desert-600 transition-all group shadow-xl shadow-desert-500/20"
                >
                  Book a Strategy Call
               </button>
               <button 
                 onClick={onViewSMSLog}
                 className="w-full sm:w-auto flex items-center justify-center gap-3 text-gray-300 font-bold px-8 py-4 bg-onyx-900 rounded-2xl hover:bg-onyx-800 transition-all border border-onyx-800 italic-not shadow-sm"
               >
                  View SMS Follow-up
               </button>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:flex flex-col">
           {/* Empty div to match the height of the tab buttons on the left */}
           <div className="h-[52px] mb-6 invisible">Sizing Spacer</div>
           
           <div className="relative bg-white rounded-[40px] p-10 border border-desert-100 text-center shadow-xl overflow-hidden flex-1 flex flex-col items-center justify-center">
              <div className="absolute inset-0 desert-gradient blur-[120px] opacity-[0.03] -z-10"></div>
              
              <div className="mb-8 w-full flex flex-col items-center">
                 <div className="flex items-center justify-center gap-3 mb-6 w-full">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Neural Processing Trace</p>
                 </div>
                 <div className="flex items-end justify-center gap-1.5 h-28 w-full max-w-[280px]">
                    {barHeights.map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-desert-500/20 rounded-full transition-colors duration-500" 
                        style={{ 
                          height: `${h * 100}%`, 
                          animation: `pulse 2.5s infinite ${i * 0.15}s` 
                        }}
                      ></div>
                    ))}
                 </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div>
                  <p className="text-4xl font-black text-onyx-950 mb-1 italic-not tracking-tighter">99.2%</p>
                  <p className="text-desert-500 text-[10px] font-bold uppercase tracking-widest">Intent Accuracy</p>
                </div>
                <div className="h-[1px] w-12 bg-desert-100 mx-auto"></div>
                <p className="text-gray-500 text-sm max-w-[260px] mx-auto leading-relaxed">
                  Our models are trained on domain-specific datasets to understand professional nuances, from emergency plumbing to legal terminology.
                </p>
              </div>

              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-desert-50 rounded-full -z-10"></div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scaleY(1); background-color: rgba(225, 80, 46, 0.1); }
          50% { opacity: 1; transform: scaleY(1.1); background-color: rgba(225, 80, 46, 0.4); }
        }
      `}</style>
    </div>
  );
};
