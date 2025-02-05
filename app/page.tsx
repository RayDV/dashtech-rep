"use client";

import { FooterSection } from "./components/footer-section";
import { HeroSection } from "./components/hero-section";



export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
      </main>
      <FooterSection />
    </div>
  );
}
