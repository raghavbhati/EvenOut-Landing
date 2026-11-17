import React from 'react';
import { 
  Infinity as InfinityIcon, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Globe2, 
  HeartHandshake, 
  FileSpreadsheet
} from 'lucide-react';

export const SocialProofTicker: React.FC = () => {
  const tickerItems = [
    { icon: InfinityIcon, label: 'Unlimited Expenses', sub: 'Zero daily limits' },
    { icon: Zap, label: '1-Tap UPI Handoff', sub: 'GPay · PhonePe · Paytm · CRED' },
    { icon: Sparkles, label: 'Smart Debt Simplification', sub: 'Min-Cash-Flow algorithm' },
    { icon: ShieldCheck, label: 'Bank-to-Bank Privacy', sub: 'We never touch your money' },
    { icon: Globe2, label: 'Multi-Currency Trips', sub: 'Live ECB foreign exchange' },
    { icon: HeartHandshake, label: 'Kind Reminders', sub: 'Spam-free & respectful' },
    { icon: FileSpreadsheet, label: 'Instant CSV Export', sub: 'Full transparent audit trail' },
  ];

  return (
    <div className="border-y border-stone-200/80 bg-surface/80 backdrop-blur-sm py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tangerine"></span>
          Why friends & flatmates across India choose EvenOut
        </p>
        <span className="text-xs font-medium text-tangerine-700 hidden sm:inline-block">
          No subscriptions · No intrusive ads
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Infinite marquee animation */}
        <div className="flex gap-6 w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-canvas border border-stone-200/90 shadow-soft-sm hover:border-tangerine-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-tangerine-100 flex items-center justify-center text-tangerine-700 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink">{item.label}</p>
                  <p className="text-[11px] text-ink-muted">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
