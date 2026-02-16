import React, { useEffect, useState } from 'react';

interface BookingModalProps {
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);
  const [isIframe1Loading, setIsIframe1Loading] = useState(true);
  const [isIframe2Loading, setIsIframe2Loading] = useState(true);

  useEffect(() => {
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    // Inject the GHL form embed script provided by the user
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.style.overflow = 'unset';
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div 
        className="relative w-full max-w-3xl bg-white rounded-[40px] shadow-2xl flex flex-col h-[85vh] sm:h-[850px] animate-modal z-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-desert-50 flex items-center justify-between flex-shrink-0 bg-white">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div>
              <h3 className="text-2xl font-extrabold text-onyx-950 font-display tracking-tight leading-tight">
                Schedule Your Session
              </h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">
                Select an available slot from our calendars
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 rounded-full bg-desert-50 text-gray-400 flex items-center justify-center hover:bg-desert-500 hover:text-white transition-all active:scale-90 shadow-sm border border-desert-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-8 py-4 bg-desert-50/30 border-b border-desert-50 flex gap-4">
          <button 
            onClick={() => setActiveTab(1)}
            className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border ${activeTab === 1 ? 'desert-gradient text-white border-transparent shadow-lg shadow-desert-500/20' : 'bg-white text-gray-500 border-desert-100 hover:border-desert-300'}`}
          >
            Phone
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border ${activeTab === 2 ? 'desert-gradient text-white border-transparent shadow-lg shadow-desert-500/20' : 'bg-white text-gray-500 border-desert-100 hover:border-desert-300'}`}
          >
            Zoom
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative bg-white overflow-hidden">
          {/* Tab 1 Content */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'}`}>
            {isIframe1Loading && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white">
                 <div className="w-12 h-12 border-4 border-desert-100 border-t-desert-500 rounded-full animate-spin mb-4"></div>
                 <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.4em] animate-pulse">Syncing Phone Calendar...</p>
              </div>
            )}
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/KvnFcaCvQff7glFkuqui" 
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
              title="Booking Calendar 1"
              onLoad={() => setIsIframe1Loading(false)}
              scrolling="yes"
              id="Mu8psEsSaILdmpMgY4lz_1771201709843"
            ></iframe>
          </div>

          {/* Tab 2 Content */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'}`}>
            {isIframe2Loading && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white">
                 <div className="w-12 h-12 border-4 border-desert-100 border-t-desert-500 rounded-full animate-spin mb-4"></div>
                 <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.4em] animate-pulse">Syncing Zoom Calendar...</p>
              </div>
            )}
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/UbsStGcmm7NVZ0AZ4Uar" 
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
              title="Booking Calendar 2"
              onLoad={() => setIsIframe2Loading(false)}
              scrolling="yes"
              id="Mu8psEsSaILdmpMgY4lz_1771201848380"
            ></iframe>
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-8 py-4 bg-desert-50/50 border-t border-desert-50 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-desert-500"></div>
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em]">
              Desert AI Executive Portal
            </p>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            SSL Encrypted
          </div>
        </div>
      </div>
    </div>
  );
};