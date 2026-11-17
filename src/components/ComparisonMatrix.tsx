import React from 'react';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisons = [
    {
      feature: 'Daily Expense Additions',
      evenout: 'Unlimited & Unrestricted',
      evenoutHighlight: true,
      splitwise: 'Capped at 5 per day',
      spreadsheets: 'Unlimited, but manual agony',
      note: 'Splitwise blocks adding more than 5 expenses daily unless you pay for Pro.'
    },
    {
      feature: 'Direct 1-Tap UPI Settlement',
      evenout: 'Direct GPay, PhonePe, Paytm, CRED',
      evenoutHighlight: true,
      splitwise: 'Manual UPI copying or US-centric',
      spreadsheets: 'None (manual transfer + texting)',
      note: 'EvenOut generates real UPI deep-links so you settle in 3 seconds.'
    },
    {
      feature: '10-Second Countdown Timers',
      evenout: 'Zero wait timers ever',
      evenoutHighlight: true,
      splitwise: 'Forced 10s delay on free edits',
      spreadsheets: 'None',
      note: 'Splitwise deliberately makes free users wait 10 seconds before saving expenses.'
    },
    {
      feature: '5 Advanced Split Modes',
      evenout: 'All 5 free (Equal, Exact, %, Shares, +/-)',
      evenoutHighlight: true,
      splitwise: 'Advanced splits locked in Pro',
      spreadsheets: 'Requires complex custom Excel math',
      note: 'Split unequal shares, exact paisas, percentages, or multi-payer with zero restrictions.'
    },
    {
      feature: 'Smart Debt Simplification',
      evenout: 'Included free (Min-Cash-Flow)',
      evenoutHighlight: true,
      splitwise: 'Prompts to upgrade to Pro',
      spreadsheets: 'Impossible without algorithmic scripts',
      note: 'Turns 20 messy criss-cross debts into 2 simple payments.'
    },
    {
      feature: 'Multi-Currency & Live Rates',
      evenout: 'Free live ECB exchange rates',
      evenoutHighlight: true,
      splitwise: 'Locked behind $39.99/yr Pro tier',
      spreadsheets: 'Manual daily currency lookup',
      note: 'Seamless for Goa roadtrips, Thailand vacations, or European getaways.'
    },
    {
      feature: 'Ads & Data Tracking',
      evenout: '100% Ad-Free & Private',
      evenoutHighlight: true,
      splitwise: 'Intrusive banners & ad trackers',
      spreadsheets: 'Ad-free (Google / Microsoft)',
      note: 'No banners, no popup ads, no selling user expense habits.'
    },
    {
      feature: 'Gentle 1-Tap Reminders',
      evenout: 'Respectful 1/day limit per person',
      evenoutHighlight: true,
      splitwise: 'Aggressive spam notifications',
      spreadsheets: 'Awkward "bhai paise bhej" texts',
      note: 'Keeps friendships intact without passive-aggressive spam.'
    },
    {
      feature: 'Annual Cost',
      evenout: '₹0 · Free Forever',
      evenoutHighlight: true,
      splitwise: '₹2,999+ / year for Pro',
      spreadsheets: '₹0 (costs your mental peace)',
      note: 'EvenOut will never paywall basic group calculations.'
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-4 border border-tangerine-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            EvenOut vs. The Rest
          </h2>
          <p className="text-base sm:text-lg text-ink-muted">
            Why deal with arbitrary 5-expense limits, 10-second wait screens, or broken spreadsheet formulas when you can have effortless, free splits?
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[760px] bg-surface rounded-3xl border border-stone-200 shadow-soft-md overflow-hidden">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-tinted/60 border-b border-stone-200 p-4 sm:p-6 text-sm font-bold text-ink items-center">
              <div className="col-span-4 text-ink-muted uppercase text-xs tracking-wider">
                Feature / Capability
              </div>
              <div className="col-span-3 text-center bg-tangerine-100/80 -my-4 sm:-my-6 py-4 sm:py-6 border-x border-tangerine-200">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-tangerine flex items-center justify-center">
                    <span className="w-2.5 h-0.5 bg-ink rounded-full"></span>
                  </div>
                  <span className="text-base font-logo font-bold text-ink">EvenOut</span>
                </div>
                <span className="inline-block mt-1 text-[11px] font-semibold text-tangerine-700 bg-white px-2 py-0.5 rounded-full border border-tangerine-200">
                  Recommended
                </span>
              </div>
              <div className="col-span-2 text-center text-ink-soft">
                <span className="font-semibold text-sm">Splitwise</span>
                <span className="block text-[10px] text-ink-muted">Free Tier</span>
              </div>
              <div className="col-span-3 text-center text-ink-soft">
                <span className="font-semibold text-sm">Messy Spreadsheets</span>
                <span className="block text-[10px] text-ink-muted">Google Sheets / Excel</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-stone-100">
              {comparisons.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-12 p-4 sm:p-5 text-sm items-center transition-colors hover:bg-stone-50/50 ${
                    index % 2 === 0 ? 'bg-surface' : 'bg-canvas/40'
                  }`}
                >
                  {/* Feature Label & Note */}
                  <div className="col-span-4 pr-3">
                    <p className="font-semibold text-ink text-sm flex items-center gap-1.5">
                      {row.feature}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5 leading-snug">
                      {row.note}
                    </p>
                  </div>

                  {/* EvenOut Column */}
                  <div className="col-span-3 text-center px-3 py-1 bg-tangerine-50/40 -my-4 sm:-my-5 h-full flex flex-col justify-center items-center border-x border-tangerine-200/60 font-semibold text-ink">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-ink font-bold">
                      <div className="w-4 h-4 rounded-full bg-tangerine text-ink flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[3] text-ink" />
                      </div>
                      <span>{row.evenout}</span>
                    </div>
                  </div>

                  {/* Splitwise Column */}
                  <div className="col-span-2 text-center px-2 text-xs sm:text-sm text-ink-muted flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-semantic-oweLight text-semantic-owe flex items-center justify-center">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[11px] sm:text-xs text-stone-600 font-medium">{row.splitwise}</span>
                  </div>

                  {/* Spreadsheets Column */}
                  <div className="col-span-3 text-center px-2 text-xs sm:text-sm text-ink-muted flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[11px] sm:text-xs text-stone-600 font-medium">{row.spreadsheets}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Note */}
            <div className="p-4 sm:p-5 bg-tinted/40 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-3">
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-tangerine-700" />
                No credit cards, zero setup fees, and zero locks on your financial history.
              </span>
              <span className="font-semibold text-ink">
                Switch in under 60 seconds with simple group invites.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
