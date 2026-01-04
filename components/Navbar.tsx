import React, { useState, useEffect } from 'react';

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

interface NavbarProps {
  onBookDemo: (e: React.MouseEvent) => void;
  onAboutUs: (e: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookDemo, onAboutUs }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-desert-500 group-hover:scale-110 transition-transform">
            <LogoIcon className="w-8 h-10" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-onyx-950 font-display">
            Desert AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#simulation" 
            onClick={(e) => handleNavClick(e, 'simulation')}
            className="text-sm font-semibold hover:text-desert-500 transition-colors"
          >
            Demo
          </a>
          <a 
            href="#process" 
            onClick={(e) => handleNavClick(e, 'process')}
            className="text-sm font-semibold hover:text-desert-500 transition-colors"
          >
            How it Works
          </a>
          <button 
            onClick={onAboutUs}
            className="text-sm font-semibold hover:text-desert-500 transition-colors"
          >
            About
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onBookDemo}
            className="px-5 py-2.5 desert-gradient text-white rounded-lg text-sm font-bold hover:shadow-lg transition-all active:scale-95"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};