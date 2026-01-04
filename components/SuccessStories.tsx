
import React from 'react';

const pillars = [
  {
    title: "Total Lead Capture",
    description: "Inbound calls are the lifeblood of small business. We ensure 100% of them are answered, qualified, and scheduled.",
    icon: (
      <svg className="w-6 h-6 text-desert-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
    )
  },
  {
    title: "Infinite Scalability",
    description: "Whether you receive 5 calls a day or 500, our AI agents handle the surge without ever feeling overwhelmed or rushed.",
    icon: (
      <svg className="w-6 h-6 text-desert-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    )
  },
  {
    title: "Brand Intelligence",
    description: "Alex isn't just a bot; Alex is a student of your business. Our agents learn your pricing, FAQs, and tone in minutes.",
    icon: (
      <svg className="w-6 h-6 text-desert-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    )
  }
];

interface SuccessStoriesProps {
  onAboutUsClick: (e: React.MouseEvent) => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onAboutUsClick }) => {
  return (
    <div className="py-20 md:py-24 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <div className="lg:w-5/12">
            <div className="inline-block px-4 py-2 bg-desert-100 text-desert-800 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-desert-200/50">
               The Desert Advantage
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-950 mb-8 italic-not leading-[1.1] tracking-tight">
              The New Standard for the <span className="text-desert-600">Front Office.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium opacity-80">
              We started Desert AI because the old way of handling calls—expensive answering services or missed voicemails—simply doesn't work in a 24/7 world.
            </p>
            <div 
              onClick={onAboutUsClick}
              className="bg-onyx-950 rounded-[32px] p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.25)] hover:scale-[1.01] transition-all duration-500"
            >
               <div className="absolute top-0 right-0 w-40 h-40 desert-gradient blur-[70px] opacity-10 group-hover:opacity-25 transition-opacity duration-700"></div>
               <p className="text-desert-400 font-bold uppercase text-[9px] tracking-[0.3em] mb-5 flex items-center justify-between">
                 The Mission
                 <span className="text-[8px] bg-white/10 px-3 py-1.5 rounded-full border border-white/10 group-hover:bg-desert-500 group-hover:border-desert-400 transition-all duration-300">Learn More →</span>
               </p>
               <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 italic tracking-tight opacity-90">
                 "Our goal is to give every small business the communication power of a Fortune 500 company, without the overhead."
               </p>
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-onyx-950 bg-desert-100 overflow-hidden shadow-lg">
                      <img src="https://i.imgur.com/znBomhc.jpg" className="w-full h-full object-cover" alt="Founder" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-onyx-950 bg-desert-200 overflow-hidden shadow-lg">
                      <img src="https://i.imgur.com/F1ZbD9V.jpg" className="w-full h-full object-cover" alt="Founder" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-sm italic-not tracking-tight text-white">Founding Team</p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest opacity-60">Adrian & Xavier</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 grid gap-6">
             {pillars.map((p, i) => (
               <div 
                 key={i} 
                 className="bg-desert-50/40 p-8 rounded-[36px] border border-desert-100/40 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)] hover:bg-white hover:translate-x-2 transition-all duration-500 flex items-start gap-6 group"
               >
                  <div className="w-14 h-14 rounded-[18px] bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-desert-500 transition-all duration-500">
                    <div className="group-hover:text-white transition-colors duration-500">
                        {p.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-onyx-950 mb-2 italic-not tracking-tight">{p.title}</h4>
                    <p className="text-gray-600 text-[15px] leading-relaxed opacity-90">
                      {p.description}
                    </p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
