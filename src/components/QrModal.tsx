import React from 'react';
import { X, Smartphone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-ink-muted hover:text-ink hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-3 border border-tangerine-200">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Instant App Handoff</span>
          </div>

          <h3 className="text-2xl font-bold text-ink mb-1">
            Scan to Get EvenOut
          </h3>
          <p className="text-sm text-ink-muted mb-6">
            Point your phone's camera to install on iOS or Android. 100% Free forever.
          </p>

          {/* QR Code Container */}
          <div className="mx-auto w-52 h-52 bg-white p-3 rounded-2xl border-2 border-stone-200 shadow-inner flex flex-col items-center justify-center relative group">
            {/* SVG Simulated QR code with brand center */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-ink fill-current">
              <path d="M10 10h30v30H10zm5 5v20h20V15zm5 5h10v10H20zM60 10h30v30H60zm5 5v20h20V15zm5 5h10v10H70zM10 60h30v30H10zm5 5v20h20V65zm5 5h10v10H20zM45 10h10v10H45zm0 25h10v10H45zm25 25h10v10H70zm-25 15h10v10H45zm15 10h10v10H60zm15 10h15v15H75zm-15-20h10v10H60zm-35-5h10v10H25zm20-15h10v10H45zm35 5h10v10H80z" />
            </svg>
            
            {/* Brand Logo in center of QR */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 bg-tangerine rounded-lg flex flex-col items-center justify-center gap-0.5 shadow-md border-2 border-white">
                <span className="w-4 h-1 bg-ink rounded-full"></span>
                <span className="w-4 h-1 bg-ink rounded-full"></span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-ink-muted">
            <ShieldCheck className="w-4 h-4 text-semantic-owed" />
            <span>Zero trackers · No credit card required</span>
          </div>

          <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col gap-2.5">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-tinted hover:bg-stone-200/70 text-ink text-sm font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🤖</span> Google Play (Android)
              </span>
              <ArrowRight className="w-4 h-4 text-ink-muted" />
            </a>
            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-tinted hover:bg-stone-200/70 text-ink text-sm font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🍎</span> App Store (iOS)
              </span>
              <ArrowRight className="w-4 h-4 text-ink-muted" />
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-ink-muted">
            <CheckCircle2 className="w-3.5 h-3.5 text-tangerine-700" />
            <span>Works seamlessly with GPay, PhonePe, Paytm & CRED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
