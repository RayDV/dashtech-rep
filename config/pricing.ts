export const pricingTiers = [
  {
    name: "Basic",
    price: "Free",
    interval: "60 Days",
    description:
      "Perfect for small departments gettings tarted with attendance tracking, and looking to get a feel for the system",
    features: [
      { name: "Quick and easy setup", included: true },
      { name: "Basic attendance tracking", included: true },
      { name: "Up tp 50 student records", included: true },
      { name: "Email support", included: true },
    ],
    cta: {
      text: "Contact Us",
      href: "/register"
    }
  },
  {
    name: "Pro",
    price: "Contact Us",
    interval: "Annual",
    description:
      "Ideal for growing departments that need more features and flexibility",
    features: [
      { name: "Unlimited student records", included: true },
      { name: "Advanced attendance tracking", included: true },
      { name: "Supporting our Work", included: true },
      { name: "ChatGPT Integration", included: true },
      { name: "Premium features", included: true },
      { name: "Priority support", included: true },
    ],
    highlight: true,
    cta: {
      text: "Lets Talk",
      href: "/contact"
    }
  }
] as const;