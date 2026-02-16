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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div 
        className="relative w-full max-w-5xl bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl flex flex-col h-[98vh] sm:h-[95vh] animate-modal z-10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section - Minimized to save space */}
        <div className="px-5 sm:px-6 py-2.5 sm:py-3 border-b border-desert-50 flex items-center justify-between flex-shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-onyx-950 font-display tracking-tight leading-tight">
                Schedule Session
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 sm:w-10 h-10 rounded-full bg-desert-50 text-gray-400 flex items-center justify-center hover:bg-desert-500 hover:text-white transition-all active:scale-90 shadow-sm border border-desert-100"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Tab Switcher - Ultra Compact */}
        <div className="px-5 sm:px-6 py-2 bg-desert-50/30 border-b border-desert-50 flex gap-2 sm:gap-3 flex-shrink-0">
          <button 
            onClick={() => setActiveTab(1)}
            className={`flex-1 py-1.5 rounded-lg font-bold text-[11px] transition-all duration-300 border ${activeTab === 1 ? 'desert-gradient text-white border-transparent shadow-sm' : 'bg-white text-gray-500 border-desert-100 hover:border-desert-300'}`}
          >
            Phone
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`flex-1 py-1.5 rounded-lg font-bold text-[11px] transition-all duration-300 border ${activeTab === 2 ? 'desert-gradient text-white border-transparent shadow-sm' : 'bg-white text-gray-500 border-desert-100 hover:border-desert-300'}`}
          >
            Zoom
          </button>
        </div>

        {/* Main Content Area - Scrollable with High Min-Height */}
        <div className="flex-1 relative bg-white overflow-y-auto overflow-x-hidden custom-scrollbar">
          {/* Tab 1 Content */}
          <div className={`${activeTab === 1 ? 'block' : 'hidden'} min-h-[850px] w-full`}>
            {isIframe1Loading && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white h-64">
                 <div className="w-8 h-8 border-2 border-desert-100 border-t-desert-500 rounded-full animate-spin mb-3"></div>
                 <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.3em] animate-pulse">Syncing Phone...</p>
              </div>
            )}
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/KvnFcaCvQff7glFkuqui" 
              style={{ width: '100%', minHeight: '850px', border: 'none', display: 'block' }} 
              title="Booking Calendar Phone"
              onLoad={() => setIsIframe1Loading(false)}
              scrolling="no"
              id="Mu8psEsSaILdmpMgY4lz_1771201709843"
            ></iframe>
          </div>

          {/* Tab 2 Content */}
          <div className={`${activeTab === 2 ? 'block' : 'hidden'} min-h-[850px] w-full`}>
            {isIframe2Loading && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white h-64">
                 <div className="w-8 h-8 border-2 border-desert-100 border-t-desert-500 rounded-full animate-spin mb-3"></div>
                 <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.3em] animate-pulse">Syncing Zoom...</p>
              </div>
            )}
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/UbsStGcmm7NVZ0AZ4Uar" 
              style={{ width: '100%', minHeight: '850px', border: 'none', display: 'block' }} 
              title="Booking Calendar Zoom"
              onLoad={() => setIsIframe2Loading(false)}
              scrolling="no"
              id="Mu8psEsSaILdmpMgY4lz_1771201848380"
            ></iframe>
          </div>
        </div>

        {/* Footer Info - Ultra Slim */}
        <div className="px-5 sm:px-6 py-1.5 bg-desert-50/50 border-t border-desert-50 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-desert-500"></div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              Executive Portal
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[7px] text-gray-400 font-bold uppercase tracking-widest">
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fef9f3;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e6995c;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};