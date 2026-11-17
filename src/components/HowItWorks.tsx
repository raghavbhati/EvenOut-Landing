import React from 'react';
import { UserPlus, PlusCircle, Smartphone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenQr: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQr }) => {
  const steps = [
    {
      number: '01',
      title: 'Create a Group & Share Link',
      description: 'Start a group in 10 seconds for your flat, Goa road trip, or team dinner. Share the invite link directly via WhatsApp.',
      highlight: 'No login required for friends to view',
      tag: 'Step 1: Invite',
      icon: UserPlus,
      screenMock: {
        header: 'New Group Created 🏖️',
        sub: 'Goa Trip 2026',
        action: 'Share on WhatsApp ➔'
      }
    },
    {
      number: '02',
      title: 'Add Expenses As You Spend',
      description: 'Capture bills on the fly. Choose who paid, who was involved, and let EvenOut split it equally, by exact amount, %, shares, or unequal adjustments.',
      highlight: 'Multi-payer & multi-currency supported',
      tag: 'Step 2: Track',
      icon: PlusCircle,
      screenMock: {
        header: 'Breakfast @ Chocolatti',
        sub: '₹1,840 · Paid by You',
        action: 'Split: Equal (4 people)'
      }
    },
    {
      number: '03',
      title: 'Settle Up in Seconds via UPI',
      description: 'EvenOut calculates the minimum transfers needed. Tap once to launch Google Pay, PhonePe, Paytm, or CRED. Done, squared, sorted.',
      highlight: 'Direct bank-to-bank with zero fees',
      tag: 'Step 3: Settle',
      icon: Smartphone,
      screenMock: {
        header: '₹1,250 Owed by Kabir',
        sub: 'UPI ID: kabir@oksbi',
        action: 'Pay via GPay ⚡'
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-4 border border-tangerine-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            How EvenOut Works
          </h2>
          <p className="text-base sm:text-lg text-ink-muted">
            Three simple steps to keep your shared moments drama-free and your group balance crystal clear.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-dashed border-t-2 border-dashed border-stone-200 -z-0 -translate-y-12"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-all hover:-translate-y-1 relative z-10"
              >
                <div>
                  {/* Step badge & number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-logo font-bold text-3xl text-stone-200">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-tinted text-ink text-xs font-semibold mb-3">
                    {step.tag}
                  </span>

                  <h3 className="text-xl font-bold text-ink mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Micro UI Mock inside card */}
                  <div className="p-3.5 rounded-2xl bg-canvas border border-stone-200 mb-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-ink mb-1">
                      <span>{step.screenMock.header}</span>
                      <span className="text-[10px] text-ink-muted">EvenOut App</span>
                    </div>
                    <p className="text-[11px] text-ink-muted mb-2">{step.screenMock.sub}</p>
                    <div className="py-1.5 px-3 rounded-xl bg-tinted text-ink text-[11px] font-bold text-center border border-stone-200/60">
                      {step.screenMock.action}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-semantic-owed">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenQr}
            className="btn-tangerine px-8 py-3.5 text-sm inline-flex items-center gap-2 shadow-soft-md group"
          >
            <span>Start Your First Group in 10 Seconds</span>
            <ArrowRight className="w-4 h-4 text-ink transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
