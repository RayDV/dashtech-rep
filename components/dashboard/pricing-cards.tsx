"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, PhoneCall, Calendar } from "lucide-react";

export interface PricingFeature {
  name: string;
  highlight?: boolean;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  interval?: string;
  description: string;
  features: readonly PricingFeature[];
  highlight?: boolean;
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface PricingCardsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tiers: readonly PricingTier[];
  containerClassName?: string;
  cardClassName?: string;
  sectionClassName?: string;
}

export function PricingCards({
  tiers,
  className,
  containerClassName,
  cardClassName,
  sectionClassName,
  ...props
}: PricingCardsProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
        sectionClassName
      )}
    >
      <div
        className={cn("w-full max-w-5xl mx-auto px-4", containerClassName)}
        {...props}
      >
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group",
                "rounded-2xl transition-all duration-500",
                tier.highlight
                  ? "bg-gradient-to-tr from-purple-100 via-purple-50 to-white dark:from-purple-950/40 dark:via-purple-900/30 dark:to-transparent"
                  : "bg-gradient-to-tr from-gray-100 via-gray-50 to-white dark:from-gray-950/40 dark:via-gray-900/30 dark:to-transparent",
                "border-2",
                tier.highlight
                  ? "border-purple-200 dark:border-purple-800"
                  : "border-gray-200 dark:border-gray-800",
                "hover:border-opacity-100",
                "hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/10",
                cardClassName
              )}
            >
              <div className="p-8 flex flex-col h-full">
                {/* Tier Header */}
                <div className="space-y-4 pb-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-center">
                    <h3
                      className={cn(
                        "text-lg font-semibold",
                        tier.highlight
                          ? "text-purple-700 dark:text-purple-300"
                          : "text-gray-900 dark:text-white"
                      )}
                    >
                      {tier.name}
                    </h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                      {tier.interval}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tier.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-8 space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                          tier.highlight
                            ? "text-purple-600 dark:text-purple-300"
                            : "text-gray-600 dark:text-gray-300"
                        )}
                      >
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {tier.cta && (
                  <div className="mt-8">
                    <Button
                      className={cn(
                        "w-full h-12 group",
                        tier.highlight
                          ? "bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
                          : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white"
                      )}
                      onClick={tier.cta.onClick}
                      asChild={Boolean(tier.cta.href)}
                    >
                      {tier.cta.href ? (
                        <a href={tier.cta.href}>
                          <span className="flex items-center justify-center gap-2">
                            {tier.name === "Demo" ? (
                              <Calendar className="w-4 h-4" />
                            ) : (
                              <PhoneCall className="w-4 h-4" />
                            )}
                            {tier.cta.text}
                          </span>
                        </a>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          {tier.name === "Demo" ? (
                            <Calendar className="w-4 h-4" />
                          ) : (
                            <PhoneCall className="w-4 h-4" />
                          )}
                          {tier.cta.text}
                        </span>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
