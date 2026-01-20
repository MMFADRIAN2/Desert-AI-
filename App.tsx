import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Process } from './components/Process.tsx';
import { SuccessStories } from './components/SuccessStories.tsx';
import { CallSimulation } from './components/CallSimulation.tsx';
import { Footer } from './components/Footer.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal.tsx';
import { TermsOfServiceModal } from './components/TermsOfServiceModal.tsx';

const App: React.FC = () => {
  const [showSMSLog, setShowSMSLog] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  const openBooking = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setShowBooking(true);
  };

  const openPrivacyPolicy = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setShowPrivacyPolicy(true);
  };

  const openTermsOfService = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setShowTermsOfService(true);
  };

  const scrollToSimulation = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.getElementById('simulation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSMSPreview = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setShowSMSLog(true);
  };

  const openAboutUs = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setShowAboutUs(true);
  };

  return (
    <div className="min-h-screen bg-desert-50 selection:bg-desert-200 selection:text-desert-900 overflow-x-hidden">
      <Navbar onBookDemo={openBooking} onAboutUs={openAboutUs} />
      <main>
        <div id="hero">
          <Hero onShowCapabilities={scrollToSimulation} />
        </div>
        
        <section id="simulation" className="bg-desert-50 pt-12 md:pt-20 lg:pt-16 scroll-mt-24">
           <CallSimulation 
              onBookWalkthrough={openBooking} 
              onViewSMSLog={openSMSPreview}
           />
        </section>
        
        <section id="process" className="scroll-mt-24">
          <Process />
        </section>
        
        <section id="standard" className="scroll-mt-24">
          <SuccessStories onAboutUsClick={openAboutUs} />
        </section>
        
        <section id="cta" className="py-20 md:py-24 lg:py-28 bg-desert-50 scroll-mt-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic-not text-onyx-950 tracking-tight">Ready to never miss another lead?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the first wave of modern businesses already using Desert AI to recapture missed revenue and automate their growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={openBooking}
                className="px-10 py-5 desert-gradient text-white rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_rgba(225,80,46,0.3)] hover:scale-105 transition-all duration-300"
              >
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer 
        onAboutUsClick={openAboutUs} 
        onPrivacyPolicyClick={openPrivacyPolicy}
        onTermsOfServiceClick={openTermsOfService}
      />

      {/* Booking Modal (GoHighLevel Embed) */}
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && <PrivacyPolicyModal onClose={() => setShowPrivacyPolicy(false)} />}

      {/* Terms of Service Modal */}
      {showTermsOfService && <TermsOfServiceModal onClose={() => setShowTermsOfService(false)} />}

      {/* About Us Overlay */}
      {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}

      {/* SMS Preview Modal */}
      {showSMSLog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-onyx-950/80 backdrop-blur-md">
           <div className="relative w-full max-w-sm bg-[#0a0a0a] rounded-[3rem] border-8 border-onyx-800 shadow-2xl overflow-hidden aspect-[9/19] animate-modal">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-onyx-800 rounded-b-2xl z-10"></div>
              
              <div className="h-full flex flex-col">
                <div className="pt-10 pb-4 px-6 border-b border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full desert-gradient flex items-center justify-center text-white font-bold text-xl">D</div>
                  <div>
                    <p className="text-white font-bold text-sm">Desert AI Follow-up</p>
                    <p className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Active Automation</p>
                  </div>
                </div>

                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-[#262626] text-white p-3 rounded-2xl rounded-tl-none text-xs max-w-[85%]">
                    "Hi, this is Alex from Desert Plumbing! Just confirming your appointment for tomorrow at 2:00 PM."
                  </div>
                  <div className="bg-desert-500 text-white p-3 rounded-2xl rounded-tr-none text-xs ml-auto max-w-[85%]">
                    "Awesome, thank you Alex. Can you send me the address too?"
                  </div>
                  <div className="bg-[#262626] text-white p-3 rounded-2xl rounded-tl-none text-xs max-w-[85%]">
                    "Absolutely! Our technician will see you at 123 Desert Lane. We'll send a text when they are on their way."
                  </div>
                  <div className="text-center py-2">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Today 10:45 AM</span>
                  </div>
                  <div className="bg-[#262626] text-white p-3 rounded-2xl rounded-tl-none text-xs max-w-[85%]">
                    "Your lead profile has been updated in the CRM. You're all set! 🌵"
                  </div>
                </div>

                <div className="p-4 bg-white/5 border-t border-white/10">
                   <div className="h-10 bg-white/10 rounded-full px-4 flex items-center text-gray-500 text-xs italic-not">
                     Text Message
                   </div>
                </div>
              </div>

              <button 
                onClick={() => setShowSMSLog(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;