import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rohan Deshmukh',
      role: 'Flatmate in Indiranagar, Bangalore',
      quote: 'When Splitwise hit us with the 5 expenses per day limit, our flat group exploded with rage. We switched to EvenOut and never looked back. The 1-tap UPI handoff is insanely fast.',
      tag: 'Flatmates (4 people)',
      avatar: 'RD',
      rating: 5
    },
    {
      name: 'Sneha & Tanmay',
      role: 'Couple sharing groceries & rent, Mumbai',
      quote: 'We use the Shares split mode because our incomes and bedroom sizes differ. EvenOut does the math perfectly to the paisa. No awkward conversations about money ever.',
      tag: 'Couple Bills',
      avatar: 'ST',
      rating: 5
    },
    {
      name: 'Varun Nair',
      role: 'Goa Roadtrip Organizer, Pune',
      quote: 'We had 8 friends and 45 transactions across 4 days in Goa. EvenOut simplified it down to just 3 UPI transfers. My friends thought I had become an accounting genius.',
      tag: 'Vacation Group',
      avatar: 'VN',
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tangerine-100 text-tangerine-700 text-xs font-semibold mb-4 border border-tangerine-200">
            <Heart className="w-3.5 h-3.5 fill-tangerine-700" />
            <span>Loved by Shared Households</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            Even, then Out.
          </h2>
          <p className="text-base sm:text-lg text-ink-muted">
            Hear from flatmates, travelers, and friend groups who left paywalls behind.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-tinted text-ink text-[11px] font-semibold">
                    {t.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-tangerine-200 mb-3" />

                <p className="text-sm text-ink font-normal leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tangerine-100 text-tangerine-700 font-bold text-sm flex items-center justify-center border border-tangerine-200">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
