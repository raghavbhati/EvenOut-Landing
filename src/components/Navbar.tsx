import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQr: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQr }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Split Modes', href: '#split-modes' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Split Calculator', href: '#playground' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-canvas/90 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-soft-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo size="md" />
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold border border-tangerine-200">
              <Sparkles className="w-3 h-3 text-tangerine-600" />
              100% Free
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 backdrop-blur-sm border border-stone-200/70 px-4 py-1.5 rounded-full shadow-soft-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-ink-soft hover:text-tangerine-700 hover:bg-tangerine-50 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQr}
              className="btn-tangerine px-5 py-2.5 text-sm flex items-center gap-2"
            >
              <span>Get EvenOut</span>
              <ArrowUpRight className="w-4 h-4 text-ink" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenQr}
              className="btn-tangerine px-3.5 py-1.5 text-xs flex items-center gap-1"
            >
              <span>Get App</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-ink hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-surface rounded-2xl border border-stone-200 shadow-soft-xl animate-fade-in">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-ink hover:text-tangerine-700 hover:bg-tangerine-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-stone-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQr();
                  }}
                  className="w-full btn-tangerine py-3 text-sm flex items-center justify-center gap-2"
                >
                  <span>Download App — Free Forever</span>
                  <ArrowUpRight className="w-4 h-4 text-ink" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
