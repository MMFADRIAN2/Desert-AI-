
import React from 'react';

const LogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="18" y="10" width="4" height="30" rx="2" fill="currentColor" />
    <path d="M18 32C12 32 10 30 10 24V18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M22 24C28 24 30 22 30 16V10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="28" cy="30" r="1.5" fill="currentColor" />
    <circle cx="32" cy="30" r="1.5" fill="currentColor" />
    <circle cx="30" cy="27" r="1.5" fill="currentColor" />
    <circle cx="30" cy="33" r="1.5" fill="currentColor" />
  </svg>
);

interface HeroProps {
  onShowCapabilities: (e: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowCapabilities }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-44 lg:pb-20 overflow-hidden bg-desert-50">
      {/* Background elements - tightened for desktop integration */}
      <div className="absolute top-0 right-0 w-[42%] h-full bg-white -z-10 rounded-l-[120px] hidden lg:block shadow-[-15px_0_45px_-10px_rgba(0,0,0,0.02)] border-l border-desert-100/40"></div>
      <div className="absolute top-20 right-40 w-96 h-96 bg-desert-100 rounded-full blur-[100px] opacity-40 -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        <div className="max-w-xl lg:max-w-lg">
          <div className="inline-block px-4 py-2 bg-desert-100/80 text-desert-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-desert-200/50">
            Future of Business Communication
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-onyx-950 leading-[1.05] mb-6 italic-not tracking-tight">
            Stop losing leads to <span className="text-gradient">missed calls.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg lg:max-w-md">
            Our AI voice agents answer every inbound call, schedule appointments in your calendar, and send automated follow-up texts—so you can focus on working, not answering.
          </p>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <button 
              onClick={onShowCapabilities}
              className="px-10 py-5 desert-gradient text-white rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_rgba(225,80,46,0.3)] hover:translate-y-[-4px] transition-all duration-300"
            >
              See AI Capabilities
            </button>
            <div className="flex items-center gap-4 group cursor-pointer" onClick={(e) => scrollToSection(e, 'process')}>
              <div className="w-12 h-12 rounded-full border-2 border-desert-200 flex items-center justify-center group-hover:bg-white group-hover:border-desert-400 group-hover:shadow-lg transition-all duration-300">
                <svg className="w-5 h-5 text-desert-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
              <span className="font-bold text-onyx-950 text-base border-b-2 border-transparent group-hover:border-desert-500 transition-all duration-300">How it works</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative bg-onyx-900 rounded-[48px] p-8 md:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-onyx-800/50">
             <div className="flex items-center justify-between mb-8 border-b border-onyx-800 pb-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-desert-500/10 text-desert-500 flex items-center justify-center animate-pulse">
                      <LogoIcon className="w-8 h-10" />
                   </div>
                   <div>
                      <p className="text-white font-bold text-base italic-not tracking-tight">Active AI Agent</p>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-widest opacity-60">Handling Inbound Call...</p>
                   </div>
                </div>
                <div className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">Live</div>
             </div>

             <div className="space-y-6">
                <div className="flex gap-4 animate-in slide-in-from-left duration-700">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0 flex items-center justify-center text-blue-400 text-xs font-bold">A</div>
                   <div className="bg-onyx-800/80 backdrop-blur-md rounded-2xl rounded-tl-none p-4 text-[14px] text-gray-200 leading-relaxed shadow-lg">
                      "Hello, thank you for calling Desert Plumbing. How can I help you today?"
                   </div>
                </div>
                <div className="flex gap-4 flex-row-reverse animate-in slide-in-from-right duration-700 delay-300">
                   <div className="w-10 h-10 rounded-full bg-gray-500/20 border border-gray-500/30 flex-shrink-0 flex items-center justify-center text-gray-400 text-xs font-bold">U</div>
                   <div className="bg-desert-500/10 border border-desert-500/30 rounded-2xl rounded-tr-none p-4 text-[14px] text-white leading-relaxed">
                      "I need to book a drain cleaning for tomorrow afternoon."
                   </div>
                </div>
                <div className="flex gap-4 animate-in slide-in-from-left duration-700 delay-700">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0 flex items-center justify-center text-blue-400 text-xs font-bold">A</div>
                   <div className="bg-onyx-800/80 backdrop-blur-md rounded-2xl rounded-tl-none p-4 text-[14px] text-gray-200 leading-relaxed shadow-lg">
                      "Checking our schedule... I have a slot at 2:00 PM tomorrow. Shall I book that for you?"
                   </div>
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-onyx-800/50">
                <div className="bg-desert-600 rounded-2xl p-4 flex items-center justify-between shadow-xl">
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <span className="font-bold text-sm italic-not tracking-tight">Appointment Scheduled</span>
                   </div>
                   <span className="text-white/70 text-[9px] font-black uppercase tracking-widest">Syncing...</span>
                </div>
             </div>
          </div>
          
          <div className="absolute -top-8 -right-8 w-24 h-24 desert-gradient rounded-full -z-10 blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-500 rounded-full -z-10 blur-[100px] opacity-10"></div>
        </div>
      </div>
    </section>
  );
};
