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

interface FooterProps {
  onAboutUsClick: (e: React.MouseEvent) => void;
  onPrivacyPolicyClick: (e: React.MouseEvent) => void;
  onTermsOfServiceClick: (e: React.MouseEvent) => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutUsClick, onPrivacyPolicyClick, onTermsOfServiceClick }) => {
  return (
    <footer className="bg-desert-50 pt-10 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="text-desert-500 group-hover:scale-110 transition-transform">
                <LogoIcon className="w-8 h-10" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-onyx-950 font-display">
                Desert AI
              </span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
              We build high-performance AI voice agents for businesses that care about their customers and their time. Automating growth, one call at a time.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/desertai.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-desert-100 cursor-pointer transition-all border border-desert-100"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-desert-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/adrian-alonso23/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-desert-100 cursor-pointer transition-all border border-desert-100"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-desert-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer for better layout breathing room */}
          <div className="hidden lg:block"></div>
          
          {/* Consolidated Contact & Info Column */}
          <div>
            <h4 className="font-bold mb-8 italic-not text-onyx-950 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-6">
              <li>
                <button 
                  onClick={onAboutUsClick}
                  className="text-gray-500 hover:text-desert-600 font-medium transition-colors"
                >
                  About Us
                </button>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-desert-600 border border-desert-100 shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-onyx-950 font-medium break-all">desert.ai@outlook.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-desert-600 border border-desert-100 shadow-sm">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-onyx-950 font-medium">704-281-1384</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-desert-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <p>© 2025 Desert AI Technologies Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <span 
              onClick={onPrivacyPolicyClick}
              className="hover:text-desert-500 cursor-pointer transition-all"
            >
              Privacy Policy
            </span>
            <span 
              onClick={onTermsOfServiceClick}
              className="hover:text-desert-500 cursor-pointer transition-all"
            >
              Terms of Service
            </span>
            <span className="hover:text-desert-500 cursor-pointer transition-all">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};