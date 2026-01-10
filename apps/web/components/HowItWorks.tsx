"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Library, RefreshCw, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const FEATURES = [
  {
    id: 1,
    title: "Human Expertise, AI Precision",
    description: "Each piece is crafted by native speakers, then refined by AI algorithms to match your level and learning goals perfectly.",
    screen: "reader",
    color: "bg-rose-50",
    borderColor: "border-rose-100",
  },
  {
    id: 2,
    title: "Growing Library",
    description: "Access a growing library of over 400 graded readings spanning JLPT N5-N1, updated with new content every day.",
    screen: "library",
    color: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    id: 3,
    title: "Smart Review",
    description: "Our SRS algorithms track your forgetting curve and schedule reviews at the perfect moment for maximum retention.",
    screen: "review",
    color: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    id: 4,
    title: "Instant Dictionary",
    description: "Tap any word to see definitions, pitch accent, and example sentences without leaving the story.",
    screen: "dictionary",
    color: "bg-green-50",
    borderColor: "border-green-100",
  }
];

// --- Mock Phone Screens ---

const ReadingScreen = () => (
  <div className="w-full h-full bg-white flex flex-col relative font-sans overflow-hidden">
    {/* Status Bar */}
    <div className="flex items-center justify-between px-5 pt-8 pb-2 shrink-0">
      <span className="text-[10px] font-semibold text-slate-900">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 bg-slate-900 rounded-sm" />
      </div>
    </div>
    
    {/* Header */}
    <div className="px-4 pb-3 shrink-0">
      <div className="flex items-center justify-between mb-3">
        <button className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
          <ChevronLeft size={16} className="text-slate-600" />
        </button>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Article</span>
        <div className="w-8" />
      </div>
    </div>

    {/* Hero Image */}
    <div className="mx-4 h-28 rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 relative overflow-hidden shrink-0 mb-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center opacity-90" />
      <div className="absolute bottom-2 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg">
        <span className="text-[9px] font-bold text-orange-600">🔥 TRENDING</span>
      </div>
    </div>
    
    {/* Content */}
    <div className="flex-1 px-4 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded-full">N4</span>
        <span className="text-[10px] text-slate-400">8 min · 234 words</span>
      </div>
      
      <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
        日本の春祭り
      </h3>
      <p className="text-slate-500 text-[10px] mb-3">Spring Festivals in Japan</p>

      <div className="flex-1 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10" />
        <p className="text-[11px] text-slate-700 leading-relaxed">
          <span className="text-slate-900 font-medium">桜</span>の季節になると、日本中で<span className="bg-amber-100 text-amber-800 px-0.5 rounded">お祭り</span>が開かれます。人々は美しい花を見ながら...
        </p>
      </div>

      {/* Progress & CTA */}
      <div className="mt-auto pt-3 pb-4 shrink-0">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-slate-400">Progress</span>
          <span className="text-[10px] font-bold text-emerald-600">45%</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full mb-3 overflow-hidden">
          <div className="h-full w-[45%] bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
        </div>
        <button className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg">
          Continue Reading
        </button>
      </div>
    </div>
  </div>
);

const LibraryScreen = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans overflow-hidden">
    {/* Status Bar */}
    <div className="flex items-center justify-between px-5 pt-8 pb-2 bg-white shrink-0">
      <span className="text-[10px] font-semibold text-slate-900">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 bg-slate-900 rounded-sm" />
      </div>
    </div>
    
    {/* Header */}
    <div className="px-4 pb-3 bg-white shrink-0">
      <h2 className="text-lg font-bold text-slate-900 mb-3">Discover</h2>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="px-3 py-1.5 bg-slate-900 text-white text-[9px] font-bold rounded-full whitespace-nowrap">All</span>
        <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-full whitespace-nowrap">Stories</span>
        <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-full whitespace-nowrap">News</span>
        <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-full whitespace-nowrap">Culture</span>
      </div>
    </div>

    {/* Feed */}
    <div className="flex-1 p-3 space-y-3 overflow-hidden">
      {/* Featured Card */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative h-20 rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 mb-2 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center opacity-80" />
          <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded-md">
            <span className="text-[8px] font-bold text-violet-600">NEW</span>
          </div>
        </div>
        <h4 className="font-bold text-slate-900 text-xs leading-snug mb-1">東京タワーの歴史</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[8px] font-bold rounded">N3</span>
            <span className="text-[9px] text-slate-400">12 min</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-amber-500">
            <span>★</span><span className="text-slate-600">4.9</span>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 opacity-90">
        <div className="flex gap-3">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 shrink-0 overflow-hidden">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center opacity-80" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-slate-900 text-xs leading-snug mb-1 truncate">お寿司の作り方</h4>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-[8px] font-bold rounded">N5</span>
              <span className="text-[9px] text-slate-400">5 min</span>
            </div>
            <div className="h-1 bg-slate-100 rounded-full w-full">
              <div className="h-full w-[60%] bg-emerald-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Nav */}
    <div className="bg-white border-t border-slate-100 py-2 px-6 flex justify-between items-center shrink-0">
      <div className="flex flex-col items-center gap-0.5">
        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">🏠</div>
        <span className="text-[8px] text-slate-400">Home</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-[10px]">📚</div>
        <span className="text-[8px] text-red-500 font-bold">Library</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">👤</div>
        <span className="text-[8px] text-slate-400">Profile</span>
      </div>
    </div>
  </div>
);

const ReviewScreen = () => (
  <div className="w-full h-full bg-gradient-to-b from-indigo-50 to-white flex flex-col font-sans overflow-hidden">
    {/* Status Bar */}
    <div className="flex items-center justify-between px-5 pt-8 pb-2 shrink-0">
      <span className="text-[10px] font-semibold text-slate-900">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 bg-slate-900 rounded-sm" />
      </div>
    </div>
    
    {/* Header */}
    <div className="px-4 pb-3 shrink-0">
      <div className="flex items-center justify-between">
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft size={16} className="text-slate-600" />
        </button>
        <div className="text-center">
          <span className="text-[10px] font-bold text-indigo-600">Daily Review</span>
          <p className="text-[9px] text-slate-400">12 of 40 cards</p>
        </div>
        <div className="w-8" />
      </div>
    </div>

    {/* Progress Bar */}
    <div className="px-4 mb-4 shrink-0">
      <div className="h-1.5 bg-white rounded-full overflow-hidden shadow-inner">
        <div className="h-full w-[30%] bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full" />
      </div>
    </div>

    {/* Flashcard */}
    <div className="flex-1 px-4 flex flex-col items-center justify-center">
      <div className="w-full bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-100">
        <div className="absolute top-3 right-3">
          <span className="text-[9px] font-bold text-slate-300">#294</span>
        </div>
        
        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4">
          <span className="text-xl">🎌</span>
        </div>
        
        <h2 className="text-4xl font-bold text-slate-900 mb-2">食べる</h2>
        <p className="text-sm text-slate-400 font-medium mb-1">たべる</p>
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded-full">N5 Verb</span>
        
        <div className="mt-6 pt-4 border-t border-slate-100 w-full">
          <p className="text-xs text-slate-600">to eat</p>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="p-4 shrink-0">
      <div className="grid grid-cols-3 gap-2">
        <button className="py-2.5 rounded-xl bg-red-100 text-red-600 font-bold text-[10px] hover:bg-red-200 transition-colors">
          Again
        </button>
        <button className="py-2.5 rounded-xl bg-amber-100 text-amber-600 font-bold text-[10px] hover:bg-amber-200 transition-colors">
          Hard
        </button>
        <button className="py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-[10px] shadow-md hover:bg-emerald-600 transition-colors">
          Easy
        </button>
      </div>
    </div>
  </div>
);

const DictionaryScreen = () => (
  <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
    {/* Status Bar */}
    <div className="flex items-center justify-between px-5 pt-8 pb-2 shrink-0">
      <span className="text-[10px] font-semibold text-slate-900">9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 bg-slate-900 rounded-sm" />
      </div>
    </div>
    
    {/* Search Bar */}
    <div className="px-4 pb-3 shrink-0">
      <div className="bg-slate-100 rounded-xl px-3 py-2 flex items-center gap-2">
        <span className="text-slate-400 text-xs">🔍</span>
        <span className="text-xs text-slate-400">Search words...</span>
      </div>
    </div>

    {/* Reading Context */}
    <div className="px-4 py-3 bg-slate-50 border-y border-slate-100 shrink-0">
      <p className="text-sm text-slate-800 leading-relaxed">
        私は毎日<span className="bg-emerald-200 text-emerald-900 px-1 rounded font-medium">日本語</span>を勉強しています。
      </p>
      <p className="text-[10px] text-slate-400 mt-1">I study Japanese every day.</p>
    </div>

    {/* Dictionary Popup */}
    <div className="flex-1 p-4">
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-xl font-bold mb-0.5">日本語</h4>
            <p className="text-[10px] text-slate-400">にほんご • Nihongo</p>
          </div>
          <div className="flex gap-1.5">
            <button className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center text-[10px] hover:bg-slate-700">🔊</button>
            <button className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center text-[10px] hover:bg-slate-700">⭐</button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 bg-blue-500/30 text-blue-300 text-[9px] font-bold rounded">N5</span>
          <span className="px-2 py-0.5 bg-violet-500/30 text-violet-300 text-[9px] font-bold rounded">Noun</span>
        </div>
        
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          Japanese language. The official language spoken in Japan.
        </p>

        <div className="bg-slate-800 rounded-xl p-3 mb-3">
          <p className="text-[10px] text-slate-400 mb-1">Example</p>
          <p className="text-xs text-white">日本語は難しいですが、面白いです。</p>
          <p className="text-[10px] text-slate-400 mt-1">Japanese is difficult but interesting.</p>
        </div>
        
        <button className="w-full bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg hover:bg-emerald-600 transition-colors">
          + Add to Flashcards
        </button>
      </div>
    </div>
  </div>
);

const AppScreen = ({ type }: { type: string }) => {
    switch (type) {
        case "reader": return <ReadingScreen />;
        case "library": return <LibraryScreen />;
        case "review": return <ReviewScreen />;
        case "dictionary": return <DictionaryScreen />;
        default: return <div className="bg-white h-full w-full" />;
    }
}

export const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate max index based on showing 2 items at a time on desktop
  // If we have 4 items, and show 2, max index is 2 (0, 1, 2).
  // Actually, standard carousel behavior is easier: just scroll by item width.
  const maxIndex = FEATURES.length - (typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1);

  const scrollTo = (index: number) => {
    if (index < 0) index = 0;
    // Simple wrap around logic not strictly needed if we bound it, but user might want loop.
    // Let's stick to bounded for "premium" feel (no jarring jump).
    if (index > FEATURES.length - 1) index = FEATURES.length - 1; 
    
    setCurrentIndex(index);
  };

  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-28"
    >
      {/* Pinkish Glow Effects - Lighter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[500px] bg-red-500/25 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[500px] bg-red-500/25 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Smartphone size={14} className="text-slate-500" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Experience the App</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Fluency</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See how our intelligent features work together to accelerate your Japanese learning journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
            
            {/* Nav Buttons - Centered Vertically on Left/Right */}
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-30 hidden md:flex">
                <button 
                    onClick={() => scrollTo(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={28} />
                </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-30 hidden md:flex">
                <button 
                    onClick={() => scrollTo(currentIndex + 1)}
                    disabled={currentIndex >= FEATURES.length - 2} // Disable when at end (showing last 2)
                    className="w-14 h-14 rounded-full bg-slate-900 shadow-xl flex items-center justify-center text-white hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Scrollable Track */}
            <div className="overflow-hidden px-4 md:px-0 -mx-4 md:mx-0">
                <motion.div 
                    className="flex gap-6 md:gap-8"
                    animate={ typeof window !== 'undefined' && window.innerWidth >= 768 
                        ? { x: `-${currentIndex * 50}%` } 
                        : { x: `-${currentIndex * 100}%` }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {FEATURES.map((feature) => (
                        <div 
                            key={feature.id} 
                            className="min-w-[100%] md:min-w-[calc(50%-16px)] flex-shrink-0"
                        >
                            <div className={cn(
                                "rounded-[2.5rem] p-6 h-[620px] flex flex-col items-center text-center border relative overflow-hidden group transition-all duration-500 hover:shadow-xl",
                                feature.color, feature.borderColor
                            )}>
                                {/* Text Content */}
                                <div className="mb-6 relative z-10 max-w-sm">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Phone Mockup - Taller and Narrower */}
                                <div className="relative w-[240px] flex-1 bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-xl z-30" />
                                    
                                    {/* Screen Content */}
                                    <div className="w-full h-full pt-0">
                                        <AppScreen type={feature.screen} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Mobile Pagination Dots (since arrows hidden on mobile) */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
                {FEATURES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentIndex === idx ? "bg-slate-900 w-6" : "bg-slate-300"
                        )}
                    />
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};
