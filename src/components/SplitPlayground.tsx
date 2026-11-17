import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Zap, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Friend {
  id: string;
  name: string;
  avatarColor: string;
  share: number;
}

export const SplitPlayground: React.FC = () => {
  const [billTitle, setBillTitle] = useState('Dinner @ Burma Burma');
  const [totalAmount, setTotalAmount] = useState<number>(3600);
  const [payer, setPayer] = useState<string>('Raghav');
  const [splitMethod, setSplitMethod] = useState<'equal' | 'exact' | 'percentage'>('equal');
  const [copiedLink, setCopiedLink] = useState(false);

  const [friends, setFriends] = useState<Friend[]>([
    { id: '1', name: 'Raghav (You)', avatarColor: 'bg-tangerine-200', share: 900 },
    { id: '2', name: 'Ananya', avatarColor: 'bg-stone-300', share: 900 },
    { id: '3', name: 'Kabir', avatarColor: 'bg-peach', share: 900 },
    { id: '4', name: 'Priya', avatarColor: 'bg-tangerine-100', share: 900 },
  ]);

  // Recalculate when amount or splitMethod changes
  const handleAmountChange = (newAmount: number) => {
    setTotalAmount(newAmount);
    if (splitMethod === 'equal') {
      const perPerson = Math.round((newAmount / friends.length) * 100) / 100;
      setFriends(friends.map(f => ({ ...f, share: perPerson })));
    }
  };

  const handleEqualize = () => {
    const perPerson = Math.round((totalAmount / friends.length) * 100) / 100;
    setFriends(friends.map(f => ({ ...f, share: perPerson })));
  };

  const updateIndividualShare = (id: string, val: number) => {
    setFriends(friends.map(f => f.id === id ? { ...f, share: val } : f));
  };

  const handleGenerateUpi = () => {
    setCopiedLink(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F26A2E', '#1F7A50', '#111111']
    });
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const currentTotal = friends.reduce((sum, f) => sum + Number(f.share || 0), 0);
  const diff = Math.round((totalAmount - currentTotal) * 100) / 100;

  return (
    <section id="playground" className="py-24 bg-tinted/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-4 border border-tangerine-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            Try the Split Playground
          </h2>
          <p className="text-base sm:text-lg text-ink-muted">
            See how EvenOut handles real Indian bills without breaking a sweat or charging you for advanced split math.
          </p>
        </div>

        {/* Playground Container Card */}
        <div className="max-w-4xl mx-auto bg-surface rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-soft-lg">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Bill Inputs */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Expense Name
                </label>
                <input
                  type="text"
                  value={billTitle}
                  onChange={(e) => setBillTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-canvas border border-stone-200 text-ink font-medium focus:outline-none focus:border-tangerine transition-colors"
                  placeholder="e.g. Dinner, Rent, Cab, Groceries"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Total Bill Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-ink">₹</span>
                  <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => handleAmountChange(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-3 rounded-2xl bg-canvas border border-stone-200 text-ink text-xl font-bold focus:outline-none focus:border-tangerine transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Paid By
                </label>
                <select
                  value={payer}
                  onChange={(e) => setPayer(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-canvas border border-stone-200 text-ink font-semibold focus:outline-none focus:border-tangerine transition-colors cursor-pointer"
                >
                  {friends.map((f) => (
                    <option key={f.id} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Split Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                  Split Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'equal', label: '= Equal' },
                    { id: 'exact', label: '₹ Exact' },
                    { id: 'percentage', label: '% Percent' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSplitMethod(m.id as any);
                        if (m.id === 'equal') handleEqualize();
                      }}
                      className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                        splitMethod === m.id
                          ? 'border-tangerine bg-tangerine-50 text-ink shadow-sm'
                          : 'border-stone-200 bg-canvas text-ink-muted hover:border-stone-300'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difference Status */}
              <div className="p-3 bg-canvas rounded-2xl border border-stone-200 flex items-center justify-between text-xs">
                <span className="text-ink-muted">Math check:</span>
                {diff === 0 ? (
                  <span className="text-semantic-owed font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Perfectly balanced (₹0.00 left)
                  </span>
                ) : (
                  <span className="text-semantic-owe font-bold">
                    {diff > 0 ? `₹${diff} remaining to allocate` : `₹${Math.abs(diff)} over total`}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: People & Dynamic Calculations */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-ink uppercase tracking-wider">
                    Friends ({friends.length})
                  </span>
                  <button
                    onClick={handleEqualize}
                    className="text-xs text-tangerine-700 font-semibold hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset to Equal
                  </button>
                </div>

                {/* Friend shares list */}
                <div className="space-y-2.5">
                  {friends.map((f) => {
                    const isPayer = f.name === payer;
                    return (
                      <div
                        key={f.id}
                        className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                          isPayer
                            ? 'bg-tangerine-50/50 border-tangerine-200'
                            : 'bg-canvas border-stone-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-8 h-8 rounded-full ${f.avatarColor} text-ink font-bold text-xs flex items-center justify-center`}>
                            {f.name.charAt(0)}
                          </span>
                          <div>
                            <p className="text-xs font-bold text-ink">
                              {f.name} {isPayer && <span className="text-[10px] text-tangerine-700 font-semibold">(Payer)</span>}
                            </p>
                            <p className="text-[10px] text-ink-muted">
                              {isPayer ? `Paid full ₹${totalAmount}` : `Owes ${payer}`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <span className="text-xs font-semibold text-ink">₹</span>
                          <input
                            type="number"
                            disabled={splitMethod === 'equal'}
                            value={f.share}
                            onChange={(e) => updateIndividualShare(f.id, Number(e.target.value))}
                            className={`w-20 px-2 py-1 text-right text-xs font-bold rounded-lg border ${
                              splitMethod === 'equal'
                                ? 'bg-transparent border-transparent text-ink'
                                : 'bg-white border-stone-200 text-ink focus:border-tangerine'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Settlement CTA Box */}
              <div className="pt-4 border-t border-stone-200">
                <div className="p-4 bg-tinted rounded-2xl mb-4 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-ink text-sm">
                    <span>Summary:</span>
                    <span className="text-semantic-owed">{friends.length - 1} friend(s) owe {payer}</span>
                  </div>
                  <p className="text-ink-muted text-[11px]">
                    In EvenOut, each friend receives a 1-tap UPI link (`upi://pay`) directly on WhatsApp or in-app.
                  </p>
                </div>

                <button
                  onClick={handleGenerateUpi}
                  className="w-full btn-tangerine py-3.5 text-sm flex items-center justify-center gap-2 shadow-md group"
                >
                  <Zap className="w-4 h-4 text-ink" />
                  <span>
                    {copiedLink ? 'Simulated UPI Pay Handoff Created! ⚡' : 'Generate 1-Tap UPI Handoff'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-ink group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
