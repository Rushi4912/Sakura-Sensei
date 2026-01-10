"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

// --- FAQ Data ---
const faqs = [
  {
    question: "Is SakuraSensei suitable for complete beginners?",
    answer: "Absolutely! We have a dedicated path for N5 beginners that starts with Hiragana/Katakana and basic grammar. Our graded readers are written specifically for those just starting their journey.",
  },
  {
    question: "How does the Smart Reader work?",
    answer: "Our Smart Reader analyzes text in real-time. You can tap any word to see its definition, furigana (reading), and pitch accent. It also automatically tracks which words you know and suggests new ones to add to your flashcards.",
  },
  {
    question: "Can I use the app offline?",
    answer: "Yes, premium members can download lessons and reading materials for offline use. Your progress will sync automatically when you're back online.",
  },
  {
    question: "What methodology do you use for vocabulary?",
    answer: "We use Spaced Repetition System (SRS) combined with Contextual Learning. Instead of memorizing isolated words, you learn them inside sentences and stories, which helps with long-term retention.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! You can try all premium features free for 7 days. After that, you can continue with our free tier or upgrade to Premium for unlimited access.",
  },
  {
    question: "Can I transfer my progress from other apps?",
    answer: "We currently support importing vocabulary lists from Anki and CSV files. We are working on integrations with other popular platforms for a seamless transition.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "bg-white border rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "border-red-200 shadow-md ring-1 ring-red-100" : "border-slate-100 shadow-sm hover:border-red-100"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={cn("font-bold text-lg", isOpen ? "text-slate-900" : "text-slate-700")}>
          {question}
        </span>
        <div
          className={cn(
            "p-2 rounded-full transition-colors duration-200",
            isOpen ? "bg-red-50 text-red-500" : "bg-slate-50 text-slate-400 group-hover:text-red-400"
          )}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-red-50/50 to-transparent -z-10 rounded-b-[50%]" />
        
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="text-sm font-bold text-slate-600 tracking-wide uppercase">FAQs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-500 font-medium">
              Everything You Need to Know!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a 
              href="mailto:support@nihongomaster.com" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

