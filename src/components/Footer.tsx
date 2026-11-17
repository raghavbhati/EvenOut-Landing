import React from 'react';
import { Logo } from './Logo';
import { Heart, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas border-t border-stone-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-200/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              The free group expense tracker built for India. Unlimited splits, smart debt simplification, and 1-tap UPI settlements.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tinted border border-stone-200 text-xs text-ink-muted">
              <span className="font-semibold text-tangerine-700">Even, then Out:</span>
              <span>Get square, then get on with life.</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><a href="#features" className="hover:text-tangerine-700 transition-colors">Features</a></li>
              <li><a href="#split-modes" className="hover:text-tangerine-700 transition-colors">5 Split Modes</a></li>
              <li><a href="#comparison" className="hover:text-tangerine-700 transition-colors">Splitwise Alternative</a></li>
              <li><a href="#playground" className="hover:text-tangerine-700 transition-colors">Split Simulator</a></li>
              <li><a href="#how-it-works" className="hover:text-tangerine-700 transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Privacy & Trust</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><a href="#" className="hover:text-tangerine-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-tangerine-700 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-tangerine-700 transition-colors">UPI Security Model</a></li>
              <li><a href="#" className="hover:text-tangerine-700 transition-colors">Data Retention & Deletion</a></li>
              <li><a href="#" className="hover:text-tangerine-700 transition-colors">Open Source Notice</a></li>
            </ul>
          </div>

          {/* Connect & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <a href="mailto:support@evenout.app" className="hover:text-tangerine-700 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> 
                  <span>support@evenout.app</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-tangerine-700 transition-colors flex items-center gap-1.5">
                  <span className="text-xs font-bold">𝕏</span>
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-tangerine-700 transition-colors flex items-center gap-1.5">
                  <span className="text-xs font-bold">📷</span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-tangerine-700 transition-colors flex items-center gap-1.5">
                  <span className="text-xs font-bold">🐙</span>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-4">
          <p>© {new Date().getFullYear()} EvenOut Inc. All rights reserved. Built with pride for friend circles everywhere.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-tangerine fill-tangerine" />
            <span>for zero awkwardness.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
