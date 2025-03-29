
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { ComputerVisionSection } from '@/components/FeatureSection';
import AIPredictionSection from '@/components/AIPredictionSection';
import MenuOptimizationSection from '@/components/MenuOptimizationSection';
import WasteAnalysisSection from '@/components/WasteAnalysisSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ComputerVisionSection />
        <AIPredictionSection />
        <MenuOptimizationSection />
        <WasteAnalysisSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
