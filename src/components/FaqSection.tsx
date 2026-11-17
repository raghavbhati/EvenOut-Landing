import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does EvenOut store or touch my bank details?',
      a: 'Never. EvenOut is purely an expense ledger and calculation engine. When you choose to settle a debt, EvenOut generates a standard UPI deep-link (`upi://pay?pa=...`) that opens your preferred native UPI app (Google Pay, PhonePe, Paytm, or CRED). All money moves directly between your bank account and your friend\'s bank account. EvenOut never holds, routes, or touches a single rupee.',
    },
    {
      q: 'Is EvenOut really 100% free? Are there any hidden fees or daily limits?',
      a: 'Yes, EvenOut is completely free with zero daily caps. Unlike Splitwise (which restricts free accounts to only 5 expense additions per day and forces a 10-second countdown delay), EvenOut has unlimited expense tracking, unlimited groups, unlimited members, and all 5 split modes available from day one.',
    },
    {
      q: 'How does EvenOut compare to Splitwise Pro?',
      a: 'Splitwise charges ₹2,999/year for features like unlimited expense entries, receipt scanning, currency conversion, and ad-free usage. EvenOut gives you unlimited entries, zero intrusive ads, multi-currency live ECB rates, and direct 1-tap UPI settlement completely free.',
    },
    {
      q: 'Which UPI apps can I use to settle up?',
      a: 'EvenOut supports all NPCI-compliant UPI applications in India, including Google Pay (GPay), PhonePe, Paytm, CRED, BHIM UPI, and Amazon Pay. You can select your default app or pick on a per-settlement basis.',
    },
    {
      q: 'How does Smart Debt Simplification work?',
      a: 'EvenOut implements a Minimum-Cash-Flow graph algorithm. In a group of 5 friends where everyone bought drinks, cabs, groceries, and tickets at different times, you might end up with 15 circular debts. EvenOut calculates the net balance for each person and collapses those 15 messy back-and-forth transfers into just 2 or 3 clean, direct payments.',
    },
    {
      q: 'Can I export my group data if I want a backup?',
      a: 'Yes, on-demand! You can export a comprehensive CSV spreadsheet with a complete audit trail (date, category, payer, split breakdown, and settlement status) whenever you need it for personal accounting, company reimbursement, or flatmate archives.',
    },
    {
      q: 'Can friends join a group without downloading the app?',
      a: 'Yes. Every EvenOut group has a lightweight web showcase link you can share on WhatsApp. Friends can view the real-time balance sheet, see what they owe, and trigger UPI settlements directly from mobile Safari or Chrome without an upfront download.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-surface border-t border-stone-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-4 border border-tangerine-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We’ve Got Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-ink-muted">
            Everything you need to know about EvenOut, UPI privacy, and our free-forever model.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'bg-canvas border-tangerine-300 shadow-soft-sm' 
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-ink text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-tangerine text-ink' : 'bg-tinted text-ink-muted'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-ink-muted text-sm sm:text-base leading-relaxed border-t border-stone-200/50 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-tinted border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-ink text-base">Have more questions or need help?</h4>
            <p className="text-xs text-ink-muted mt-0.5">Our team is always open to feedback from flatmates & travelers.</p>
          </div>
          <a
            href="mailto:support@evenout.app"
            className="btn-secondary px-5 py-2.5 text-xs font-semibold whitespace-nowrap"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
};
