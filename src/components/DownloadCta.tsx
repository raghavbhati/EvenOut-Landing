import React from 'react';
import { ArrowRight, Smartphone, QrCode, CheckCircle2, Sparkles } from 'lucide-react';

interface DownloadCtaProps {
  onOpenQr: () => void;
}

export const DownloadCta: React.FC<DownloadCtaProps> = ({ onOpenQr }) => {
  return (
    <section className="py-20 bg-canvas relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-tangerine-100/70 via-peach/40 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-4xl border border-stone-200/90 p-8 sm:p-12 lg:p-16 shadow-soft-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold border border-tangerine-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Subscription Paywalls</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">
                Ready to even out?
              </h2>

              <p className="text-lg text-ink-muted leading-relaxed font-normal max-w-xl">
                Say goodbye to arbitrary 5-expense limits, awkward "bro send money" reminders, and spreadsheet formulas. <span className="text-ink font-semibold">Shared moments. Sorted.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenQr}
                  className="btn-tangerine px-8 py-4 text-base flex items-center gap-2.5 shadow-lg shadow-tangerine/25 group"
                >
                  <span>Download EvenOut App</span>
                  <ArrowRight className="w-5 h-5 text-ink transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenQr}
                  className="btn-secondary px-6 py-4 text-base flex items-center gap-2"
                >
                  <QrCode className="w-5 h-5 text-tangerine-700" />
                  <span>Scan to Install</span>
                </button>
              </div>

              {/* Features list */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-semantic-owed" />
                  <span>100% Free Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-semantic-owed" />
                  <span>Unlimited Expenses & Groups</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-semantic-owed" />
                  <span>Direct UPI Intent</span>
                </div>
              </div>
            </div>

            {/* Right Column: QR Code Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs bg-canvas rounded-3xl p-6 border border-stone-200 text-center shadow-soft-md">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700 mb-3">
                  <Smartphone className="w-6 h-6" />
                </div>
                
                <h4 className="font-bold text-ink text-lg mb-1">Scan to Install</h4>
                <p className="text-xs text-ink-muted mb-4">iOS and Android instant download</p>

                {/* Simulated QR Code */}
                <div className="w-44 h-44 mx-auto bg-white p-3 rounded-2xl border-2 border-stone-200 shadow-inner flex flex-col items-center justify-center relative mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-ink fill-current">
                    <path d="M10 10h30v30H10zm5 5v20h20V15zm5 5h10v10H20zM60 10h30v30H60zm5 5v20h20V15zm5 5h10v10H70zM10 60h30v30H10zm5 5v20h20V65zm5 5h10v10H20zM45 10h10v10H45zm0 25h10v10H45zm25 25h10v10H70zm-25 15h10v10H45zm15 10h10v10H60zm15 10h15v15H75zm-15-20h10v10H60zm-35-5h10v10H25zm20-15h10v10H45zm35 5h10v10H80z" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 bg-tangerine rounded-md flex flex-col items-center justify-center gap-0.5 border border-white shadow-sm">
                      <span className="w-3.5 h-0.5 bg-ink rounded-full"></span>
                      <span className="w-3.5 h-0.5 bg-ink rounded-full"></span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-ink-muted">
                  Even, then Out. Get square, then get on with life.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
