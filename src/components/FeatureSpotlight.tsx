import React, { useState } from 'react';
import { 
  Divide, 
  Zap, 
  GitFork, 
  Globe, 
  Bell, 
  FileSpreadsheet, 
  Sparkles,
  ShieldCheck,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const FeatureSpotlight: React.FC = () => {
  // Card 1: Split Mode State
  const [splitMode, setSplitMode] = useState<'equal' | 'exact' | 'percent' | 'shares' | 'adjust'>('equal');
  
  // Card 2: UPI Settlement State
  const [selectedUpiApp, setSelectedUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'cred'>('gpay');
  const [settledFriend, setSettledFriend] = useState<string | null>(null);

  // Card 3: Simplification toggle
  const [simplified, setSimplified] = useState<boolean>(true);

  // Card 4: Currency conversion
  const [foreignAmount, setForeignAmount] = useState<number>(120);
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'GBP'>('EUR');

  const exchangeRates = {
    EUR: 89.45,
    USD: 84.15,
    GBP: 106.80
  };

  const inrConverted = Math.round(foreignAmount * exchangeRates[currency]);

  // Handle settlement trigger
  const handleSettle = (friend: string) => {
    setSettledFriend(friend);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#F26A2E', '#2E9E68', '#FDD6C3', '#111111']
    });
    setTimeout(() => {
      setSettledFriend(null);
    }, 3500);
  };

  return (
    <section id="features" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-4 border border-tangerine-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Real Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            Everything you need to keep things fair.
          </h2>
          <p className="text-base sm:text-lg text-ink-muted">
            Designed around Indian spending habits: group trips, flatmate groceries, multi-course dinners, and instant UPI handoffs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: 5 Flexible Split Modes (Col span 2 on lg) */}
          <div id="split-modes" className="lg:col-span-2 bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                  <Divide className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-tinted text-ink text-xs font-semibold">
                  5 Split Modes + Multi-Payer
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink mb-2">
                5 Ways to Split. Down to the exact Paisa.
              </h3>
              <p className="text-sm text-ink-muted mb-6">
                Because not everyone had the wine, and someone ordered three mocktails. Choose the mode that fits your reality without paying for a premium subscription.
              </p>

              {/* Interactive Split Mode Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-tinted rounded-2xl">
                {[
                  { id: 'equal', label: '= Equal' },
                  { id: 'exact', label: '₹ Exact Amounts' },
                  { id: 'percent', label: '% Percentages' },
                  { id: 'shares', label: '🔢 Shares / Ratios' },
                  { id: 'adjust', label: '+/- Adjustments' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSplitMode(tab.id as any)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                      splitMode === tab.id
                        ? 'bg-ink text-white shadow-sm'
                        : 'text-ink-muted hover:text-ink hover:bg-stone-200/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Live Preview Display for ₹4,000 Bill */}
              <div className="p-4 rounded-2xl bg-canvas border border-stone-200">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs font-semibold text-ink">
                  <span>Bill: Saturday Night Dinner (₹4,000)</span>
                  <span className="text-tangerine-700">Paid by Raghav (You)</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                  {splitMode === 'equal' && (
                    <>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Raghav (You)</p>
                        <p className="text-sm font-bold text-tangerine-700 mt-1">₹1,000.00</p>
                        <p className="text-[10px] text-ink-muted">1/4 share</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Ananya</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,000.00</p>
                        <p className="text-[10px] text-ink-muted">1/4 share</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Kabir</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,000.00</p>
                        <p className="text-[10px] text-ink-muted">1/4 share</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Priya</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,000.00</p>
                        <p className="text-[10px] text-ink-muted">1/4 share</p>
                      </div>
                    </>
                  )}

                  {splitMode === 'exact' && (
                    <>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Raghav (You)</p>
                        <p className="text-sm font-bold text-tangerine-700 mt-1">₹650.00</p>
                        <p className="text-[10px] text-ink-muted">Salad & soup</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Ananya</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,250.00</p>
                        <p className="text-[10px] text-ink-muted">Steak & sides</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Kabir</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,100.00</p>
                        <p className="text-[10px] text-ink-muted">Pasta + drink</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Priya</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,000.00</p>
                        <p className="text-[10px] text-ink-muted">Pizza share</p>
                      </div>
                    </>
                  )}

                  {splitMode === 'percent' && (
                    <>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Raghav (20%)</p>
                        <p className="text-sm font-bold text-tangerine-700 mt-1">₹800.00</p>
                        <p className="text-[10px] text-ink-muted">20% of total</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Ananya (30%)</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,200.00</p>
                        <p className="text-[10px] text-ink-muted">30% of total</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Kabir (30%)</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,200.00</p>
                        <p className="text-[10px] text-ink-muted">30% of total</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Priya (20%)</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹800.00</p>
                        <p className="text-[10px] text-ink-muted">20% of total</p>
                      </div>
                    </>
                  )}

                  {splitMode === 'shares' && (
                    <>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Raghav (Couple)</p>
                        <p className="text-sm font-bold text-tangerine-700 mt-1">₹1,600.00</p>
                        <p className="text-[10px] text-ink-muted">2 shares</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Ananya</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹800.00</p>
                        <p className="text-[10px] text-ink-muted">1 share</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Kabir</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹800.00</p>
                        <p className="text-[10px] text-ink-muted">1 share</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Priya</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹800.00</p>
                        <p className="text-[10px] text-ink-muted">1 share</p>
                      </div>
                    </>
                  )}

                  {splitMode === 'adjust' && (
                    <>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Raghav (Base)</p>
                        <p className="text-sm font-bold text-tangerine-700 mt-1">₹1,000.00</p>
                        <p className="text-[10px] text-ink-muted">Base share</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Ananya (+Dessert)</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹1,350.00</p>
                        <p className="text-[10px] text-ink-muted">+₹350 tiramisu</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Kabir (-Late)</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹800.00</p>
                        <p className="text-[10px] text-ink-muted">-₹200 discount</p>
                      </div>
                      <div className="p-2.5 bg-surface rounded-xl border border-stone-200 text-center">
                        <p className="text-xs font-bold text-ink">Priya (-Drinks)</p>
                        <p className="text-sm font-bold text-semantic-owed mt-1">₹850.00</p>
                        <p className="text-[10px] text-ink-muted">-₹150 no alcohol</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-ink-muted">
              <span>Supports multiple payers on a single receipt</span>
              <span className="font-semibold text-tangerine-700">100% Free · No Pro Lock</span>
            </div>
          </div>

          {/* Card 2: 1-Tap UPI Handoff (Col span 1) */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-semantic-owedLight text-semantic-owed text-xs font-semibold">
                  Zero Intermediary
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink mb-2">
                1-Tap UPI Handoff
              </h3>
              <p className="text-sm text-ink-muted mb-4">
                EvenOut creates standard <code className="bg-tinted px-1 py-0.5 rounded text-ink font-mono text-xs">upi://pay</code> intents. Tap once to hand off to your preferred UPI app.
              </p>

              {/* UPI Apps Selector */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { id: 'gpay', name: 'GPay', emoji: '🟢' },
                  { id: 'phonepe', name: 'PhonePe', emoji: '🟣' },
                  { id: 'paytm', name: 'Paytm', emoji: '🔵' },
                  { id: 'cred', name: 'CRED', emoji: '⚫' },
                ].map((app) => (
                  <button
                    key={app.id}
                    onClick={() => setSelectedUpiApp(app.id as any)}
                    className={`p-2 rounded-xl text-center border transition-all text-xs font-semibold ${
                      selectedUpiApp === app.id
                        ? 'border-tangerine bg-tangerine-50 text-ink shadow-sm'
                        : 'border-stone-200 bg-white text-ink-muted hover:border-stone-300'
                    }`}
                  >
                    <span className="block text-base mb-0.5">{app.emoji}</span>
                    <span>{app.name}</span>
                  </button>
                ))}
              </div>

              {/* Settlement Simulation Card */}
              <div className="p-3.5 bg-canvas rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-peach text-ink font-bold text-xs flex items-center justify-center">A</span>
                    <div>
                      <p className="text-xs font-bold text-ink">Ananya Sharma</p>
                      <p className="text-[10px] text-ink-muted">ananya@okaxis</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-semantic-owed">₹1,250</span>
                </div>

                {settledFriend === 'Ananya' ? (
                  <div className="py-2 px-3 rounded-xl bg-semantic-owedLight text-semantic-owed text-xs font-bold flex items-center justify-center gap-1.5 animate-bounce">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Settled via {selectedUpiApp.toUpperCase()}! 🎉</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleSettle('Ananya')}
                    className="w-full btn-tangerine py-2 text-xs flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Zap className="w-3.5 h-3.5 text-ink" />
                    <span>Settle ₹1,250 via {selectedUpiApp.toUpperCase()}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-ink-muted">
              <ShieldCheck className="w-4 h-4 text-semantic-owed flex-shrink-0" />
              <span>EvenOut never holds funds — direct bank-to-bank</span>
            </div>
          </div>

          {/* Card 3: Smart Debt Simplification (Col span 1) */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                  <GitFork className="w-6 h-6" />
                </div>
                <button
                  onClick={() => setSimplified(!simplified)}
                  className="px-2.5 py-1 rounded-full bg-tinted hover:bg-stone-200 text-xs font-semibold text-ink flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3 text-tangerine-700" />
                  <span>Toggle Algorithm</span>
                </button>
              </div>

              <h3 className="text-2xl font-bold text-ink mb-2">
                Smart Debt Simplification
              </h3>
              <p className="text-sm text-ink-muted mb-4">
                Our Minimum-Cash-Flow graph solver collapses circular debts into the minimum number of real payments.
              </p>

              {/* Interactive Graph Box */}
              <div className="p-4 bg-canvas rounded-2xl border border-stone-200 text-center">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-ink">
                    {simplified ? '✨ With EvenOut (2 Payments)' : '❌ Without Simplification (11 Debts)'}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    simplified ? 'bg-semantic-owedLight text-semantic-owed' : 'bg-semantic-oweLight text-semantic-owe'
                  }`}>
                    {simplified ? 'Optimal Flow' : 'Messy Web'}
                  </span>
                </div>

                {simplified ? (
                  <div className="space-y-2 text-left">
                    <div className="p-2.5 bg-surface rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                      <span className="font-medium text-ink">Kabir ➔ Raghav</span>
                      <span className="font-bold text-semantic-owed">₹2,800</span>
                    </div>
                    <div className="p-2.5 bg-surface rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                      <span className="font-medium text-ink">Priya ➔ Ananya</span>
                      <span className="font-bold text-semantic-owed">₹1,400</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 text-left text-[11px] text-ink-muted max-h-32 overflow-y-auto">
                    <p>• Raghav owes Ananya ₹450</p>
                    <p>• Ananya owes Kabir ₹600</p>
                    <p>• Kabir owes Priya ₹900</p>
                    <p>• Priya owes Raghav ₹1,200</p>
                    <p>• Raghav owes Kabir ₹350...</p>
                    <p className="text-[10px] font-semibold text-semantic-owe italic">+ 6 more circular headaches</p>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-4 pt-3 border-t border-stone-100 text-xs text-ink-muted">
              Saves everyone time, transfer fees, and group confusion.
            </p>
          </div>

          {/* Card 4: Multi-Currency Trips (Col span 1) */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold">
                  Live ECB Rates
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink mb-2">
                Multi-Currency & Travel Ready
              </h3>
              <p className="text-sm text-ink-muted mb-4">
                Split in Euros, Dollars, Baht, or Pounds. Automatically converted to the group's default currency with locked or live rates.
              </p>

              {/* Currency Converter Interactive Preview */}
              <div className="p-3.5 bg-canvas rounded-2xl border border-stone-200">
                <div className="flex gap-2 mb-3">
                  {(['EUR', 'USD', 'GBP'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`flex-1 py-1 text-xs font-semibold rounded-lg border transition-all ${
                        currency === curr
                          ? 'bg-ink text-white border-ink'
                          : 'bg-white text-ink-muted border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between p-2.5 bg-surface rounded-xl border border-stone-200 mb-2">
                  <span className="text-xs text-ink-muted">Amount spent:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-ink">{currency}</span>
                    <input 
                      type="number"
                      value={foreignAmount}
                      onChange={(e) => setForeignAmount(Number(e.target.value))}
                      className="w-16 px-1.5 py-0.5 text-right font-bold text-sm bg-tinted rounded border border-stone-200 text-ink focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-tangerine-50/60 rounded-xl border border-tangerine-200">
                  <span className="text-xs font-medium text-tangerine-700">Group settlement:</span>
                  <span className="text-base font-bold text-ink">₹{inrConverted.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 pt-3 border-t border-stone-100 text-xs text-ink-muted">
              1 EUR = ₹{exchangeRates[currency]} · Official European Central Bank feed
            </p>
          </div>

          {/* Card 5: Kind & Honest Reminders (Col span 1) */}
          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                  <Bell className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-tinted text-ink text-xs font-semibold">
                  Spam-Free
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink mb-2">
                Kind & Honest Reminders
              </h3>
              <p className="text-sm text-ink-muted mb-4">
                No awkward passive-aggressive messages. Send a 1-tap polite reminder rate-limited to 1 per person per day.
              </p>

              {/* Notification Mockup */}
              <div className="p-3.5 bg-canvas rounded-2xl border border-stone-200 space-y-2">
                <div className="p-2.5 bg-surface rounded-xl border border-stone-200 flex items-start gap-2.5 shadow-soft-sm">
                  <span className="text-base">☕</span>
                  <div className="text-xs">
                    <p className="font-bold text-ink">Gentle Nudge from Kabir</p>
                    <p className="text-ink-muted text-[11px] mt-0.5">
                      "Hey Raghav! Whenever you're ready, here's your Goa Villa share (₹1,250)."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 text-[10px] text-ink-muted font-medium">
                  <span>Daily limit: 1 of 1 sent</span>
                  <span className="text-semantic-owed">Keeps friendships peaceful</span>
                </div>
              </div>
            </div>

            <p className="mt-4 pt-3 border-t border-stone-100 text-xs text-ink-muted">
              Polite wording that eliminates the tension of chasing dues.
            </p>
          </div>

          {/* Card 6: Complete Audit Trail & Export (Col span 2 on lg) */}
          <div className="lg:col-span-2 bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tangerine-100 flex items-center justify-center text-tangerine-700">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-tinted text-ink text-xs font-semibold">
                  Transparent History
                </span>
              </div>

              <h3 className="text-2xl font-bold text-ink mb-2">
                Audit Trail & Instant CSV Export
              </h3>
              <p className="text-sm text-ink-muted mb-6">
                Full transparency on who added, edited, or deleted an item. Export clean spreadsheets for tax season, company reimbursement, or flatmate archive.
              </p>

              {/* Activity Feed Simulation */}
              <div className="space-y-2 p-3 bg-canvas rounded-2xl border border-stone-200">
                <div className="p-2.5 bg-surface rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tangerine"></span>
                    <span className="text-ink font-medium">Ananya updated "Beach Shack Snacks" to ₹1,420</span>
                  </div>
                  <span className="text-ink-muted text-[10px]">12 mins ago</span>
                </div>

                <div className="p-2.5 bg-surface rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-semantic-owed"></span>
                    <span className="text-ink font-medium">Kabir marked ₹1,650 paid via GPay</span>
                  </div>
                  <span className="text-ink-muted text-[10px]">2 hrs ago</span>
                </div>

                <div className="p-2.5 bg-surface rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-ink-muted"></span>
                    <span className="text-ink font-medium">Raghav added receipt image for "Groceries & Ice"</span>
                  </div>
                  <span className="text-ink-muted text-[10px]">Yesterday</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-ink-muted">1-Click CSV & Excel export whenever you need it</span>
              <button 
                onClick={() => alert("Sample EvenOut CSV exported: Goa_Trip_2026_Audit_Report.csv")}
                className="btn-secondary px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-tangerine-700" />
                <span>Download Sample CSV</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
