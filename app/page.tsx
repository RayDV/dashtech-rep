"use client";

import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { BarChart3, Clock, FileText, AppWindow } from "lucide-react";
import { PricingCards } from "@/components/dashboard/pricing-cards";
import { pricingTiers } from "@/config/pricing";
import { ClientsSection } from "@/components/clients-section";
import { Developers } from "@/components/developers";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
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
          transition={{ duration: 0.5 }}
          className="relative bg-purple-950/15 dark:bg-purple-950/15 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        >
          <HeroSection
            title="Dash Technologies"
            subtitle={{
              regular: "Streamlining student sign-ins",
              gradient: " with powerful simplicity",
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

        <div className="bg-background">
          <motion.section
            className="container mx-auto px-4 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.div
              className="space-y-5 max-w-3xl mx-auto text-center mb-16"
              variants={fadeInUp}
            >
              <h3 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                Features
              </h3>
              <h2 className="text-3xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-4xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                Everything you need to
                <span className="text-transaparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-orange-200">
                  {" "}
                  manage your department
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Powerful tools to streamline attendance tracking, analyze
                patterns, and make data-driven decisions.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <BentoGrid>
                <BentoCard
                  name="Analytics Dashboard"
                  className="md:col-span-2"
                  background={
                    <motion.div
                      variants={fadeInUp}
                      className="absolute inset-0 bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20"
                    />
                  }
                  Icon={BarChart3}
                  description="Get real-time insights into attendance patterns and student engagement."
                  href="/dashboard"
                  cta="View Analytics"
                />
                <BentoCard
                  name="DashSoftware"
                  className="md:col-span-1"
                  background={
                    <motion.div
                      variants={fadeInUp}
                      className="absolute inset-0 bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20"
                    />
                  }
                  Icon={AppWindow}
                  description="Easily manage our software on the go."
                  href="/dashboard"
                  cta="Manage Dash Software"
                />
                <BentoCard
                  name="Attendance Tracking"
                  className="md:col-span-1"
                  background={
                    <motion.div
                      variants={fadeInUp}
                      className="absolute inset-0 bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20"
                    />
                  }
                  Icon={Clock}
                  description="Track attendance with our automated sign-ins and real-time updates."
                  href="/dashboard"
                  cta="Track Now"
                />
                <BentoCard
                  name="Report"
                  className="md:col-span-2"
                  background={
                    <motion.div
                      variants={fadeInUp}
                      className="absolute inset-0 bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20"
                    />
                  }
                  Icon={FileText}
                  description="Generate reports with our automated reporting system and with the power of AI."
                  href="/dashboard"
                  cta="View Activities"
                />
              </BentoGrid>
            </motion.div>
          </motion.section>
        </div>

        <motion.section
          className="container mx-auto px-4 pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.div
            className="space-y-5 max-w-3xl mx-auto text-center mt-20"
            variants={fadeInUp}
          >
            <h3 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
              Our Team
            </h3>
            <h2 className="text-3xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-4xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              Meet the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                {" "}
                developers
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              The talented team behind Dash Technologies
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Developers />
          </motion.div>
        </motion.section>

        <motion.section
          className="container mx-auto px-4 pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px " }}
          variants={staggerChildren}
        >
          <motion.div
            className="space-y-5 max-w-3xl mx-auto text-center mb-16"
            variants={fadeInUp}
          >
            <h3 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
              Pricing
            </h3>
            <h2 className="text-3xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-4xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
              Simple pricing for
              <span className="text-transparent bg-clip-text">
                {" "}
                every department
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your needs. All plans include core
              features to get you started.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <PricingCards 
                tiers={pricingTiers}
                className="max-w-5xl mx-auto"
                sectionClassName="!py-0"
            />
          </motion.div>
        </motion.section>
      </main>
      <FooterSection />
    </div>
  );
}
