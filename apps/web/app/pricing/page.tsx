"use client";

import { Pricing } from "@/components/ui/pricing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const japaneseLearningPlans = [
  {
    name: "FREE",
    price: "0",
    yearlyPrice: "0",
    period: "forever",
    features: [
      "Access to N5 (Beginner) Content",
      "Basic Dictionary Lookup",
      "Limited Daily Reading",
      "Community Forum Access",
    ],
    description: "Perfect for casual learners starting their journey",
    buttonText: "Start Learning",
    href: "/signup",
    isPopular: false,
  },
  {
    name: "PREMIUM",
    price: "12",
    yearlyPrice: "8",
    period: "per month",
    features: [
      "Unlimited Access (N5-N1)",
      "Smart Reader with Audio",
      "Spaced Repetition Flashcards",
      "Pitch Accent & Grammar Tools",
      "Offline Mode",
      "Priority Support",
    ],
    description: "Ideal for serious students aiming for fluency",
    buttonText: "Get Premium",
    href: "/signup?plan=premium",
    isPopular: true,
  },
  {
    name: "LIFETIME",
    price: "299",
    yearlyPrice: "299",
    period: "one-time",
    features: [
      "Everything in Premium Forever",
      "Early Access to Beta Features",
      "Exclusive Learning Materials",
      "Ad-Free Experience",
      "Support Future Development",
      "Private Discord Channel",
    ],
    description: "One payment for a lifetime of learning",
    buttonText: "Get Lifetime Access",
    href: "/signup?plan=lifetime",
    isPopular: false,
  },
  
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
         <Pricing 
            plans={japaneseLearningPlans}
            title="Invest in Your Fluency"
            description="Simple pricing for every stage of your Japanese journey. No hidden fees."
         />
      </main>

      <Footer />
    </div>
  );
}
