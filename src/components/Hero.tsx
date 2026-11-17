import React, { useState } from 'react';
import { 
  ArrowRight, 
  QrCode, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenQr: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQr }) => {
  const [activeTab, setActiveTab] = useState<'expenses' | 'balances' | 'simplify'>('expenses');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-tangerine-100/60 via-peach/30 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-60 right-[-100px] w-96 h-96 bg-tangerine-50 blur-2xl -z-10 rounded-full" />
      <div className="absolute top-96 left-[-100px] w-80 h-80 bg-peach/20 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Splitwise Alternative Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tangerine-100 border border-tangerine-200/80 mb-6 shadow-soft-sm hover:border-tangerine-300 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-tangerine animate-pulse" />
              <span className="text-xs font-semibold text-tangerine-700 tracking-tight">
                The 100% Free Splitwise Alternative for India · Zero Daily Caps
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.12] mb-6">
              Split expenses with friends.{' '}
              <span className="relative inline-block text-tangerine-700">
                Without the awkwardness
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="#F26A2E" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              or paywalls.
            </h1>

            {/* Subheadline strictly following Trello specification */}
            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed mb-8 max-w-2xl font-normal">
              The free group expense tracker built for India. Unlimited splits, smart debt simplification, and 1-tap UPI settlements. <span className="font-semibold text-ink">Shared moments. Sorted.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenQr}
                className="btn-tangerine px-7 py-4 text-base flex items-center justify-center gap-2.5 shadow-lg shadow-tangerine/25 hover:shadow-tangerine/40 w-full sm:w-auto group"
              >
                <span>Get EvenOut Free</span>
                <ArrowRight className="w-5 h-5 text-ink transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenQr}
                className="btn-secondary px-6 py-4 text-base flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <QrCode className="w-5 h-5 text-tangerine-700" />
                <span>Scan QR Code</span>
              </button>
            </div>

            {/* App Store Badges & Micro-proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 border-t border-stone-200/70 w-full">
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <CheckCircle2 className="w-4 h-4 text-semantic-owed flex-shrink-0" />
                <span>No 5/day expense limits</span>
              </div>
              <div className="hidden sm:block text-stone-300">•</div>
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <Zap className="w-4 h-4 text-tangerine-700 flex-shrink-0" />
                <span>Instant GPay, PhonePe, Paytm, CRED</span>
              </div>
              <div className="hidden sm:block text-stone-300">•</div>
              <div className="flex items-center gap-2 text-xs text-ink-muted">
                <ShieldCheck className="w-4 h-4 text-semantic-owed flex-shrink-0" />
                <span>Never touches your money</span>
              </div>
            </div>

            {/* Brand Motto subtle tag */}
            <div className="mt-6 flex items-center gap-2 text-xs text-ink-muted bg-surface/80 border border-stone-200 px-3 py-1.5 rounded-full">
              <span className="font-semibold text-tangerine-700">Even, then Out:</span>
              <span>Get square, then get on with life.</span>
            </div>
          </div>

          {/* Right Column: High-Res Interactive Mobile Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Floating Context Badge 1: 1-Tap UPI Handoff */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 bg-surface/95 backdrop-blur-md p-3 rounded-2xl border border-stone-200/80 shadow-soft-lg items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-tangerine-100 flex items-center justify-center text-tangerine-700 font-bold text-lg">
                ⚡
              </div>
              <div>
                <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider">1-Tap Settle</p>
                <p className="text-xs font-bold text-ink">GPay · PhonePe · CRED</p>
              </div>
            </div>

            {/* Floating Context Badge 2: Debt Simplification */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 bg-surface/95 backdrop-blur-md p-3.5 rounded-2xl border border-stone-200/80 shadow-soft-lg items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-9 h-9 rounded-xl bg-semantic-owedLight flex items-center justify-center text-semantic-owed font-bold">
                <Sparkles className="w-5 h-5 text-semantic-owed" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-semantic-owed uppercase tracking-wider">Smart Algorithm</p>
                <p className="text-xs font-bold text-ink">14 messy debts ➔ 2 transfers</p>
              </div>
            </div>

            {/* Smartphone Device Mockup */}
            <div className="relative w-[320px] sm:w-[350px] bg-ink rounded-[48px] p-3.5 shadow-2xl border-4 border-stone-800 ring-1 ring-stone-900/50">
              
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-ink rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-stone-900 rounded-full border border-stone-700/50 ml-auto mr-3"></div>
              </div>

              {/* Screen Canvas */}
              <div className="bg-canvas rounded-[40px] overflow-hidden border border-stone-300/40 relative flex flex-col h-[640px]">
                
                {/* App Status Bar */}
                <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[11px] font-semibold text-ink select-none">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-ink">
                    <span>5G</span>
                    <span className="w-4 h-2 rounded-sm border border-ink flex items-center p-0.5">
                      <span className="h-full w-full bg-ink rounded-xs"></span>
                    </span>
                  </div>
                </div>

                {/* App Navigation Header */}
                <div className="px-4 py-2 border-b border-stone-200/60 bg-surface flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-ink">Goa Trip 2026</span>
                      <span className="text-xs">🏖️</span>
                    </div>
                    <p className="text-[10px] text-ink-muted">4 friends · Active group</p>
                  </div>
                  <div className="flex -space-x-1.5">
                    <span className="w-6 h-6 rounded-full bg-tangerine-200 border border-white text-[10px] font-bold text-ink flex items-center justify-center">R</span>
                    <span className="w-6 h-6 rounded-full bg-stone-300 border border-white text-[10px] font-bold text-ink flex items-center justify-center">A</span>
                    <span className="w-6 h-6 rounded-full bg-peach border border-white text-[10px] font-bold text-ink flex items-center justify-center">K</span>
                    <span className="w-6 h-6 rounded-full bg-tangerine-100 border border-white text-[10px] font-bold text-tangerine-700 flex items-center justify-center">+1</span>
                  </div>
                </div>

                {/* Group Summary Balance Banner */}
                <div className="p-3.5 bg-surface mx-3 mt-3 rounded-2xl border border-stone-200 shadow-soft-sm">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] font-medium text-ink-muted uppercase tracking-wider">Your Balance</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-semantic-owedLight text-semantic-owed">
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-semantic-owed tracking-tight">
                        +₹2,450.00
                      </p>
                      <p className="text-[11px] text-ink-muted">Overall you are owed</p>
                    </div>
                    <button 
                      onClick={onOpenQr}
                      className="btn-tangerine px-3 py-1.5 text-xs flex items-center gap-1 shadow-sm"
                    >
                      <Zap className="w-3 h-3 text-ink" />
                      <span>Settle Up</span>
                    </button>
                  </div>
                </div>

                {/* Interactive In-App Tabs */}
                <div className="px-3 pt-3 flex gap-1">
                  <button
                    onClick={() => setActiveTab('expenses')}
                    className={`flex-1 py-1.5 text-[11px] font-semibold rounded-xl transition-all ${
                      activeTab === 'expenses' 
                        ? 'bg-ink text-white shadow-sm' 
                        : 'bg-tinted text-ink-muted hover:text-ink'
                    }`}
                  >
                    Expenses (5)
                  </button>
                  <button
                    onClick={() => setActiveTab('balances')}
                    className={`flex-1 py-1.5 text-[11px] font-semibold rounded-xl transition-all ${
                      activeTab === 'balances' 
                        ? 'bg-ink text-white shadow-sm' 
                        : 'bg-tinted text-ink-muted hover:text-ink'
                    }`}
                  >
                    Balances
                  </button>
                  <button
                    onClick={() => setActiveTab('simplify')}
                    className={`flex-1 py-1.5 text-[11px] font-semibold rounded-xl transition-all ${
                      activeTab === 'simplify' 
                        ? 'bg-ink text-white shadow-sm' 
                        : 'bg-tinted text-ink-muted hover:text-ink'
                    }`}
                  >
                    🪄 Simplify
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  {activeTab === 'expenses' && (
                    <>
                      {/* Expense Item 1 */}
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200/90 flex items-center justify-between shadow-soft-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-tangerine-100 flex items-center justify-center text-base">
                            🍳
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-ink">Cafe Chocolatti</p>
                            <p className="text-[10px] text-ink-muted">You paid ₹2,400 · Equal split</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-semantic-owed">+₹1,800.00</p>
                          <p className="text-[9px] text-ink-muted">you lent</p>
                        </div>
                      </div>

                      {/* Expense Item 2 */}
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200/90 flex items-center justify-between shadow-soft-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-tinted flex items-center justify-center text-base">
                            🛵
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-ink">Scooter Rentals</p>
                            <p className="text-[10px] text-ink-muted">Ananya paid ₹1,600 · 4 shares</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-semantic-owe">-₹400.00</p>
                          <p className="text-[9px] text-ink-muted">you owe</p>
                        </div>
                      </div>

                      {/* Expense Item 3 */}
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200/90 flex items-center justify-between shadow-soft-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-peach/40 flex items-center justify-center text-base">
                            🦞
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-ink">Thalassa Seafood Dinner</p>
                            <p className="text-[10px] text-ink-muted">Kabir paid ₹4,200 · Unequal (+/-)</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-semantic-owed">+₹1,050.00</p>
                          <p className="text-[9px] text-ink-muted">you lent</p>
                        </div>
                      </div>

                      {/* Expense Item 4 */}
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200/90 flex items-center justify-between shadow-soft-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-tangerine-50 flex items-center justify-center text-base">
                            ⛽
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-ink">Highway Fuel</p>
                            <p className="text-[10px] text-ink-muted">Priya paid ₹1,000 · Exact split</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-ink-muted">₹0.00</p>
                          <p className="text-[9px] text-ink-muted">not involved</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'balances' && (
                    <div className="space-y-2">
                      <div className="p-3 bg-surface rounded-xl border border-stone-200">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-peach text-ink text-[10px] font-bold flex items-center justify-center">K</span>
                            <span className="text-xs font-semibold text-ink">Kabir owes you</span>
                          </div>
                          <span className="text-xs font-bold text-semantic-owed">+₹1,650</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-[10px]">
                          <span className="text-ink-muted">UPI ID: kabir@oksbi</span>
                          <span className="text-tangerine-700 font-semibold cursor-pointer">Send Friendly Nudge</span>
                        </div>
                      </div>

                      <div className="p-3 bg-surface rounded-xl border border-stone-200">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-stone-300 text-ink text-[10px] font-bold flex items-center justify-center">A</span>
                            <span className="text-xs font-semibold text-ink">Ananya owes you</span>
                          </div>
                          <span className="text-xs font-bold text-semantic-owed">+₹800</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-[10px]">
                          <span className="text-ink-muted">UPI ID: ananya@upi</span>
                          <span className="text-tangerine-700 font-semibold cursor-pointer">1-Tap Settle</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'simplify' && (
                    <div className="p-3 bg-surface rounded-xl border border-stone-200 text-center">
                      <div className="w-8 h-8 mx-auto rounded-full bg-semantic-owedLight text-semantic-owed flex items-center justify-center mb-2">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-bold text-ink mb-1">Smart Debt Simplification</p>
                      <p className="text-[10px] text-ink-muted mb-3">
                        Instead of 9 confusing back-and-forth transfers between 4 friends, EvenOut found the optimal 2 payments:
                      </p>
                      <div className="space-y-1.5 text-left">
                        <div className="p-2.5 rounded-xl bg-tinted flex items-center justify-between text-xs">
                          <span className="font-medium text-ink">Kabir ➔ Raghav</span>
                          <span className="font-bold text-semantic-owed">₹1,650</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-tinted flex items-center justify-between text-xs">
                          <span className="font-medium text-ink">Ananya ➔ Raghav</span>
                          <span className="font-bold text-semantic-owed">₹800</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* App Bottom Floating Bar */}
                <div className="p-3 bg-surface border-t border-stone-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-ink-muted text-xs">
                    <span className="font-semibold text-ink">Group Total:</span>
                    <span className="font-bold text-ink">₹9,200</span>
                  </div>
                  <button 
                    onClick={onOpenQr}
                    className="btn-tangerine px-3.5 py-1.5 text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <span className="text-base leading-none font-bold">+</span>
                    <span>Add Expense</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
