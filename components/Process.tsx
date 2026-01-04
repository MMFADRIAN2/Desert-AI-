
import React from 'react';

export const Process: React.FC = () => {
  return (
    <div className="py-20 md:py-24 lg:py-24 bg-desert-50 overflow-hidden relative">
      {/* Decorative background element for seamless flow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 bg-desert-100 text-desert-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-desert-200/50">
              The Implementation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-950 mb-8 italic-not tracking-tight">How it Works</h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-desert-500 flex items-center justify-center font-bold text-lg text-desert-600 group-hover:bg-desert-500 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(225,80,46,0.2)] transition-all duration-500 transform group-hover:-translate-y-1">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 italic-not tracking-tight text-onyx-950">Connect Your Phone Line</h4>
                  <p className="text-gray-600 text-base leading-relaxed">Simply forward your calls to your unique Desert AI number. We handle the rest instantly, appearing as a natural extension of your team.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-desert-500 flex items-center justify-center font-bold text-lg text-desert-600 group-hover:bg-desert-500 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(225,80,46,0.2)] transition-all duration-500 transform group-hover:-translate-y-1">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 italic-not tracking-tight text-onyx-950">Configure Your Knowledge Base</h4>
                  <p className="text-gray-600 text-base leading-relaxed">Upload your FAQs, pricing, and specific business procedures. Our AI absorbs your brand voice and expertise in minutes.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-desert-500 flex items-center justify-center font-bold text-lg text-desert-600 group-hover:bg-desert-500 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(225,80,46,0.2)] transition-all duration-500 transform group-hover:-translate-y-1">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 italic-not tracking-tight text-onyx-950">Watch the Appointments Roll In</h4>
                  <p className="text-gray-600 text-base leading-relaxed">Receive instant push notifications for every qualified lead and booked call. No manual entry, no missed opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group">
             {/* Decorative desert-themed blur background */}
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-desert-200/30 rounded-full blur-[80px] -z-10 group-hover:bg-desert-300/50 transition-all duration-1000"></div>
             
             <div className="bg-white p-2.5 rounded-[48px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] border border-desert-100/50 transform group-hover:scale-[1.01] transition-transform duration-700">
                <div className="relative overflow-hidden rounded-[38px] aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Minimalist desert landscape" 
                    className="w-full h-full object-cover transition-all duration-[2s] scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/20 to-transparent"></div>
                </div>
             </div>
             
             {/* Dynamic Stats Card - tightened */}
             <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white p-8 rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-desert-50 max-w-[240px] transform hover:translate-y-[-8px] transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <p className="text-[10px] font-black text-desert-600 uppercase tracking-[0.25em] italic-not">Efficiency Index</p>
                </div>
                <p className="text-4xl font-black text-onyx-950 leading-none mb-2 tracking-tighter">88%</p>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">Average reduction in missed opportunities for modern front offices.</p>
                <div className="mt-4 pt-4 border-t border-desert-50 flex items-center gap-3">
                   <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-desert-100 border-2 border-white shadow-sm"></div>
                      <div className="w-7 h-7 rounded-full bg-desert-200 border-2 border-white shadow-sm"></div>
                   </div>
                   <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">200+ partners</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
