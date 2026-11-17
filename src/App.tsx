import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofTicker } from './components/SocialProofTicker';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FeatureSpotlight } from './components/FeatureSpotlight';
import { SplitPlayground } from './components/SplitPlayground';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { DownloadCta } from './components/DownloadCta';
import { Footer } from './components/Footer';
import { QrModal } from './components/QrModal';

export const App: React.FC = () => {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleOpenQr = () => setIsQrModalOpen(true);
  const handleCloseQr = () => setIsQrModalOpen(false);

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-tangerine-200 selection:text-ink">
      {/* Navigation Header */}
      <Navbar onOpenQr={handleOpenQr} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero onOpenQr={handleOpenQr} />
        <SocialProofTicker />
        <ComparisonMatrix />
        <FeatureSpotlight />
        <SplitPlayground />
        <HowItWorks onOpenQr={handleOpenQr} />
        <Testimonials />
        <FaqSection />
        <DownloadCta onOpenQr={handleOpenQr} />
      </main>

      {/* Footer */}
      <Footer />

      {/* QR Code / App Store Modal */}
      <QrModal isOpen={isQrModalOpen} onClose={handleCloseQr} />
    </div>
  );
};

export default App;
