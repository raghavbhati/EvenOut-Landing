# EvenOut — Official Landing Page & Web Showcase

> **"Even, then Out."** (Get square, then get on with life.)  
> *Shared moments. Sorted.*

An authentic, modern, interactive landing page for **EvenOut** — the free group expense tracker built for India. An ad-free, restriction-free Splitwise alternative with unlimited expense additions, 5 flexible split modes, smart minimum-cash-flow debt simplification, and 1-tap UPI handoff (`upi://pay`).

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React
- **Animations & Effects**: Tailwind CSS keyframes + Canvas Confetti
- **Build Tool**: Vite 5

---

## 🎨 Brand Design Tokens & Guidelines

Adheres strictly to the specification from Trello ticket [Build EvenOut Landing Page & Web Showcase](https://trello.com/c/V9tkNKPM):

- **Primary Brand Color**: `Tangerine #F26A2E`
  - **Critical Contrast Rule**: Text & icons on Tangerine are strictly `Ink #111111` (6.2:1 AA compliance). *Never white text on Tangerine.*
- **Surfaces**:
  - Canvas: `#FAF8F5` (Warm off-white)
  - Surface / Cards: `#FFFFFF` (Pure white)
  - Tinted Containers: `#F4F3EF`
- **Accents**:
  - Brand Tint: `#FEEEE6` (Tangerine 100)
  - Peach Accent: `#FDD6C3` (Tangerine 200)
  - Deep Tangerine: `#B4410F` (Tangerine 700)
  - You are owed (Green): `#1F7A50` / `#2E9E68`
  - You owe (Red): `#B93A33` / `#DC5A52`
- **Typography**:
  - Headings, Body & Numbers: `Plus Jakarta Sans` (400, 500, 600, 700)
  - Logo Wordmark: `Sora Bold` (-30 tracking)

---

## 🚀 Sections Built

1. **Sticky Navbar**: Brand logo with Tangerine icon, navigation anchors, "100% Free" badge, and instant download modal trigger.
2. **Hero Section**:
   - Headline: *"Split expenses with friends. Without the awkwardness or paywalls."*
   - Subheadline: *"The free group expense tracker built for India. Unlimited splits, smart debt simplification, and 1-tap UPI settlements. Shared moments. Sorted."*
   - Live interactive smartphone mockup featuring real app UI: "Goa Trip 2026", active balance banner (`+₹2,450.00`), Settle Up trigger, interactive tabs (Expenses, Balances, Simplify), and floating context pills.
3. **Social Proof Ticker**: Marquee of value propositions (Zero daily caps, 1-tap UPI handoff, Min-Cash-Flow, privacy).
4. **Comparison Matrix**: Detailed comparison between **EvenOut** vs. **Splitwise** vs. **Messy Spreadsheets** across 10 key features.
5. **Interactive Feature Bento Box**:
   - *5 Ways to Split*: Interactive tab switcher showing live math for Equal, Exact Amounts, Percentages, Shares, and +/- Adjustments with multi-payer support.
   - *1-Tap UPI Handoff*: Select friend and app (GPay, PhonePe, Paytm, CRED) to simulate direct bank-to-bank settlement.
   - *Smart Debt Simplification*: Interactive algorithm comparison (11 circular debts collapsed into 2 optimal transfers).
   - *Multi-Currency Trips*: Live currency converter for EUR, USD, and GBP with ECB foreign exchange rates.
   - *Kind & Spam-Free Reminders*: 1/day rate-limited polite reminders.
   - *Audit Trail & CSV Export*: Full audit logs with sample CSV export.
6. **Split Playground**: Interactive bill splitter simulator where visitors enter an expense, adjust friend amounts, check balance calculations, and generate a simulated UPI handoff.
7. **How It Works**: 3-step numbered flow (Invite, Track, Settle).
8. **Testimonials**: Real stories from flatmates, couples, and road trip groups.
9. **FAQ Accordion**: 7 expandable questions addressing UPI safety, zero fees, data export, and Splitwise Pro differences.
10. **Download CTA & QR Modal**: High-conversion QR code scanner and mobile app store links.
11. **Footer**: Brand links, legal links, email, and social channels.

---

## 💻 Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to Cloudflare Pages (Wrangler)
```bash
# Preview build in local Pages environment
npm run pages:dev

# Build and deploy to Cloudflare Pages
npm run pages:deploy
# or
npm run deploy
```
Live URL: [https://evenout-landing.pages.dev](https://evenout-landing.pages.dev)
