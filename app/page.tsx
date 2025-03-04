"use client";

import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { BarChart3, Clock, FileText, AppWindow } from "lucide-react";
import { PricingCards } from "@/components/dashboard/pricing-cards";
import { pricingTiers } from "@/config/pricing";
import { ClientsSection } from "@/components/clients-section";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0},
};

const staggerChildren = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{duration: 0.5}}
          className="relative bg-purple-950/15 dark:bg-purple-950/15 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        >
          <HeroSection
            title="Dash Technologies"
            subtitle={{
              regular: "Streamlining student sign-ins",
              gradient: "with powerful simplicity",
            }} 
            description="Out with the old, in with the new. Our software modernizes student attendance tracking with automated reporting, real-time analytics, and a centralized dashboard for your department's needs."
            ctaText="Get Started"
            ctaHref="/login"
            gridOptions={{
              angle: 65,
              opacity: 0.4,
              cellSize: 50,
              lightLineColor: "#4a4a4a",
              darkLineColor: "#2a2a2a",
            }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeInUp}
          className="bg-background mt-24 mb-8"
        >
            <ClientsSection />
        </motion.div>

        
      </main>
    </div>
  );
}
