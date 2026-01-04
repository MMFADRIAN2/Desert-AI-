
import React from 'react';

interface AboutUsProps {
  onClose: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-onyx-950/90 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
      <div className="relative w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-desert-100 flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 lg:top-8 lg:right-8 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md text-onyx-950 flex items-center justify-center hover:bg-desert-500 hover:text-white transition-all border border-desert-100 shadow-xl active:scale-90"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="grid lg:grid-cols-2 w-full">
          
          {/* Founder 1: Adrian Alonso */}
          <div className="relative p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-desert-100">
            <div className="relative mb-10 flex justify-center lg:justify-start">
               <div className="relative w-64 h-80 lg:w-64 lg:h-80 rounded-[32px] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-desert-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/20 to-transparent z-10"></div>
                  <img 
                    src="https://i.imgur.com/znBomhc.jpg" 
                    alt="Adrian Alonso - Co-Founder" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-[#00703c] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/30 shadow-lg">
                      UNC Charlotte '25
                    </span>
                  </div>
               </div>
               <div className="absolute -z-10 -top-4 -left-4 w-20 h-20 bg-desert-100 rounded-full blur-2xl opacity-60"></div>
            </div>

            <div className="space-y-5">
               <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-extrabold text-onyx-950 font-display italic-not tracking-tight">Adrian Alonso</h3>
                  <div className="h-[2px] w-8 bg-desert-500 rounded-full"></div>
               </div>
               
               <p className="text-desert-600 font-bold uppercase text-[10px] tracking-[0.25em] flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-desert-500 animate-pulse"></span>
                 Co-Founder & Creative Director
               </p>
               
               <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed font-medium italic-not">
                    "Designing the bridge between high-utility tech and human-centric experiences."
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Adrian holds dual degrees in **History and Computer Science** from UNCC. With 4+ years as a Technology Associate at **Charlotte Mecklenburg Schools**, he specialized in high-performance web design and digital architecture. At Desert AI, he ensures every voice agent and client interface feels intuitive, professional, and seamless.
                  </p>
               </div>

               <div className="pt-4 flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-desert-50 rounded-xl text-desert-700 text-[10px] font-bold border border-desert-100">
                    Web & UX Architecture
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-desert-50 rounded-xl text-desert-700 text-[10px] font-bold border border-desert-100">
                    CMS Tech Veteran
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-desert-50 rounded-xl text-desert-700 text-[10px] font-bold border border-desert-100">
                    BA History / BS CS
                  </div>
               </div>
            </div>
          </div>

          {/* Founder 2: Xavier Alonso */}
          <div className="relative p-10 lg:p-14 bg-desert-50/20">
            <div className="relative mb-10 flex justify-center lg:justify-start">
               <div className="relative w-64 h-80 lg:w-64 lg:h-80 rounded-[32px] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-desert-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/20 to-transparent z-10"></div>
                  <img 
                    src="https://i.imgur.com/F1ZbD9V.jpg" 
                    alt="Xavier Alonso - Co-Founder" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-[#00703c] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/30 shadow-lg">
                      UNC Charlotte '25
                    </span>
                  </div>
               </div>
               <div className="absolute -z-10 bottom-4 -right-4 w-24 h-24 bg-desert-200/40 rounded-full blur-3xl"></div>
            </div>

            <div className="space-y-5">
               <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-extrabold text-onyx-950 font-display italic-not tracking-tight">Xavier Alonso</h3>
                  <div className="h-[2px] w-8 bg-desert-500 rounded-full"></div>
               </div>
               
               <p className="text-desert-600 font-bold uppercase text-[10px] tracking-[0.25em] flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-desert-500"></span>
                 Co-Founder & Head of Automation
               </p>
               
               <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed font-medium italic-not">
                    "Engineering the backend logic that powers intelligent business scale."
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Xavier graduated **Cum Laude** from UNCC with a **BSBA in Business Analytics** and a **BS in Economics**. Currently an **MS in Data Science** candidate, he architects the complex backend automation and data pipelines that allow our AI agents to perform surgical-level business tasks with perfect accuracy.
                  </p>
               </div>

               <div className="pt-4 flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-desert-700 text-[10px] font-bold border border-desert-100 shadow-sm">
                    Backend Automation
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-desert-700 text-[10px] font-bold border border-desert-100 shadow-sm">
                    Business Analytics
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-desert-700 text-[10px] font-bold border border-desert-100 shadow-sm">
                    Economics & Data
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
