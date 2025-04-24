'use client';

import { Bento } from "@/components/bento";
// import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GeminiSection } from "@/components/gemini-section";
import { HeroScroll } from "@/components/hero-scroll";
import RibbonSection from "@/components/ribbon-section";
import StackingCard from "@/components/ui/stacking-card";
// import { AnotherBento } from "@/components/another-bento"
import SimpleCursor from '@/components/simple-cursor';

export default function Home() {


  return (
    <main>
      <SimpleCursor />

      {/* Keep the rest of your page structure */}
      <div className="px-4 md:px-10 mx-auto max-w-screen">
        <SimpleCursor />
        <HeroScroll />
        <RibbonSection />
        <Bento />
        {/* <CTASection /> */}
        <GeminiSection />
        <StackingCard />
        {/* <AnotherBento /> */}
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}