"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, BarChart3, MessageCircle, Home, User, Settings as SettingsIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data & Component Helpers ---

const CAROUSEL_ITEMS = [
  { id: 1, type: "vocab", title: "Vocabulary" },
  { id: 2, type: "reader", title: "Smart Reader" },
  { id: 3, type: "chat", title: "AI Chat" },
  { id: 4, type: "stats", title: "Statistics" },
  { id: 5, type: "settings", title: "Settings" },
];

// Bottom Navigation Component
const BottomNav = ({ active }: { active: string }) => (
  <div className="bg-white border-t border-slate-100 py-2 px-4 flex justify-between items-center shrink-0">
    <div className={cn("flex flex-col items-center gap-0.5 px-3", active === "home" && "text-red-500")}>
      <Home size={18} className={active === "home" ? "text-red-500" : "text-slate-400"} />
      <span className="text-[8px] font-medium">Home</span>
    </div>
    <div className={cn("flex flex-col items-center gap-0.5 px-3", active === "read" && "text-red-500")}>
      <BookOpen size={18} className={active === "read" ? "text-red-500" : "text-slate-400"} />
      <span className="text-[8px] font-medium">Read</span>
    </div>
    <div className={cn("flex flex-col items-center gap-0.5 px-3", active === "chat" && "text-red-500")}>
      <MessageCircle size={18} className={active === "chat" ? "text-red-500" : "text-slate-400"} />
      <span className="text-[8px] font-medium">Chat</span>
    </div>
    <div className={cn("flex flex-col items-center gap-0.5 px-3", active === "stats" && "text-red-500")}>
      <BarChart3 size={18} className={active === "stats" ? "text-red-500" : "text-slate-400"} />
      <span className="text-[8px] font-medium">Stats</span>
    </div>
    <div className={cn("flex flex-col items-center gap-0.5 px-3", active === "profile" && "text-red-500")}>
      <User size={18} className={active === "profile" ? "text-red-500" : "text-slate-400"} />
      <span className="text-[8px] font-medium">Profile</span>
    </div>
  </div>
);

// Mock Screens for Japanese App
const ChatScreen = () => (
  <div className="flex flex-col h-full bg-slate-50">
    {/* Top padding for notch */}
    <div className="h-8 bg-white shrink-0" />
    <div className="bg-white px-4 py-3 shadow-sm border-b border-slate-100 flex items-center justify-between shrink-0">
      <span className="font-bold text-slate-800 text-sm">Sensei AI</span>
      <div className="w-2 h-2 rounded-full bg-green-500" />
    </div>
    <div className="flex-1 p-3 space-y-3 overflow-hidden">
      <div className="flex gap-2">
        <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-[10px] shrink-0">AI</div>
        <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm text-[10px] text-slate-600 max-w-[85%]">
          こんにちは！今日は何を勉強しますか？
        </div>
      </div>
      <div className="flex gap-2 flex-row-reverse">
        <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] shrink-0">Me</div>
        <div className="bg-red-500 text-white p-2.5 rounded-2xl rounded-tr-none shadow-sm text-[10px] max-w-[85%]">
          JLPT N3の文法を練習したいです。
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-[10px] shrink-0">AI</div>
        <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm text-[10px] text-slate-600 max-w-[85%]">
          分かりました。「〜について」から始めましょう。
        </div>
      </div>
    </div>
    <div className="p-2 bg-white border-t border-slate-100 shrink-0">
      <div className="h-8 bg-slate-100 rounded-full w-full" />
    </div>
    <BottomNav active="chat" />
  </div>
);

const ReaderScreen = () => (
  <div className="flex flex-col h-full bg-white">
    {/* Top padding for notch */}
    <div className="h-8 bg-orange-100 shrink-0" />
    <div className="h-28 bg-orange-100 px-4 pb-3 flex flex-col justify-end shrink-0">
      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mb-1">News</span>
      <h3 className="text-base font-bold text-slate-900 leading-tight">日本の春 (Spring in Japan)</h3>
    </div>
    <div className="flex-1 p-3 space-y-2 overflow-hidden">
      <div className="flex flex-wrap gap-0.5 text-xs leading-relaxed text-slate-700">
        <span>桜</span>
        <span className="text-slate-400 text-[9px]">(Sakura)</span>
        <span>が</span>
        <span>満開</span>
        <span className="text-slate-400 text-[9px]">(Full bloom)</span>
        <span>です。</span>
        <span>多くの</span>
        <span>人々</span>
        <span>が</span>
        <span>花見</span>
        <span>を</span>
        <span>楽しみます。</span>
      </div>
      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
        <div className="text-[10px] font-bold text-slate-500 mb-1">Vocabulary</div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-800 text-xs">花見 (Hanami)</span>
          <span className="text-[9px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full">N5</span>
        </div>
        <div className="text-[10px] text-slate-500 mt-0.5">Flower viewing</div>
      </div>
    </div>
    <BottomNav active="read" />
  </div>
);

const VocabScreen = () => (
  <div className="flex flex-col h-full bg-slate-50">
    {/* Top padding for notch */}
    <div className="h-8 bg-slate-50 shrink-0" />
    <div className="flex-1 p-3 overflow-hidden">
      <div className="w-full aspect-[4/3] bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center mb-3 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-2 right-2 text-[10px] font-bold text-slate-300">#294</div>
        <span className="text-4xl mb-1 text-slate-800">猫</span>
        <span className="text-xs text-slate-400">Neko</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs">Dog</button>
        <button className="h-10 bg-red-500 text-white rounded-xl shadow-sm border border-red-500 flex items-center justify-center font-bold text-xs">Cat</button>
        <button className="h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs">Bird</button>
        <button className="h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs">Fish</button>
      </div>
    </div>
    <BottomNav active="home" />
  </div>
);

const StatsScreen = () => (
  <div className="flex flex-col h-full bg-white">
    {/* Top padding for notch */}
    <div className="h-8 bg-white shrink-0" />
    <div className="flex-1 p-3 overflow-hidden">
      <h3 className="font-bold text-sm mb-3">Your Progress</h3>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
        {[1,2,3,4,5,6,7].map(d => (
          <div key={d} className={`flex-shrink-0 w-6 h-12 rounded-full flex flex-col items-center justify-end p-0.5 ${d === 7 ? 'bg-red-500' : 'bg-slate-100'}`}>
            <div className={`w-full rounded-full bg-white/30 ${d===7 ? 'h-[70%]' : 'h-[30%] bg-slate-300'}`} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
          <div className="p-1.5 bg-orange-100 rounded-lg text-orange-600"><BookOpen size={14}/></div>
          <div className="flex-1">
            <div className="text-[10px] text-slate-500">Words Learned</div>
            <div className="font-bold text-sm">1,240</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
          <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600"><BarChart3 size={14}/></div>
          <div className="flex-1">
            <div className="text-[10px] text-slate-500">Study Time</div>
            <div className="font-bold text-sm">42h 10m</div>
          </div>
        </div>
      </div>
    </div>
    <BottomNav active="stats" />
  </div>
);

const SettingsScreen = () => (
  <div className="flex flex-col h-full bg-slate-50">
    {/* Top padding for notch */}
    <div className="h-8 bg-white shrink-0" />
    <div className="bg-white px-4 py-4 border-b border-slate-100 shrink-0">
      <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto mb-2" />
      <h3 className="text-center font-bold text-sm">Rushikesh</h3>
      <p className="text-center text-[10px] text-slate-500">JLPT N4 Aspirant</p>
    </div>
    <div className="flex-1 p-3 space-y-2 overflow-hidden">
      <div className="bg-white p-2.5 rounded-xl flex items-center justify-between shadow-sm">
        <span className="text-xs font-medium">Dark Mode</span>
        <div className="w-8 h-5 bg-slate-200 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"/></div>
      </div>
      <div className="bg-white p-2.5 rounded-xl flex items-center justify-between shadow-sm">
        <span className="text-xs font-medium">Notifications</span>
        <div className="w-8 h-5 bg-red-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"/></div>
      </div>
      <div className="bg-white p-2.5 rounded-xl flex items-center justify-between shadow-sm">
        <span className="text-xs font-medium">Sound Effects</span>
        <div className="w-8 h-5 bg-red-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"/></div>
      </div>
    </div>
    <BottomNav active="profile" />
  </div>
);

const AppScreen = ({ type }: { type: string }) => {
  switch (type) {
    case "chat": return <ChatScreen />;
    case "reader": return <ReaderScreen />;
    case "vocab": return <VocabScreen />;
    case "stats": return <StatsScreen />;
    case "settings": return <SettingsScreen />;
    default: return <div className="bg-white h-full w-full" />;
  }
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
)

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
)

const GooglePlayLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 29.2 21.7 35.6l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3L187.1 294.7 104.6 499z"/>
  </svg>
)

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at center (index 2)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? CAROUSEL_ITEMS.length - 1 : prev - 1
    );
  };

  const getStyle = (index: number) => {
    let dist = index - currentIndex;
    
    // Circular logic for infinite loop effect
    if (dist > 2) dist -= CAROUSEL_ITEMS.length;
    if (dist < -2) dist += CAROUSEL_ITEMS.length;

    const isCenter = dist === 0;
    
    // We space them out linearly based on distance
    let x = dist * 275; // Small gap (260px width + 15px gap)
    
    // Height & Scale Logic
    let height = "600px"; // Default center height
    let opacity = 1;
    let zIndex = 10;
    let brightness = 1;

    if (isCenter) {
      height = "600px";
      zIndex = 50;
      opacity = 1;
      brightness = 1;
    } else if (Math.abs(dist) === 1) {
      height = "540px"; // 90%
      zIndex = 40;
      opacity = 0.9;
      brightness = 0.95;
    } else {
      height = "480px"; // 80%
      zIndex = 30;
      opacity = 0.4;
      brightness = 0.9;
    }

    return { x, height, opacity, zIndex, brightness, isCenter };
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center pt-24 pb-12">
      
      {/* Background with Glow Effects */}
      <div className="absolute inset-0 bg-slate-50 -z-20" />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10 mb-12">
        {/* App Store Rating Badge */}
        <div className="bg-red-200/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-3 mb-8 shadow-sm border border-red-100/50">
           <AppleLogo className="w-5 h-5 text-slate-900" />
           <span className="font-semibold text-slate-800 text-sm">App Store</span>
           <div className="flex items-center gap-0.5">
             {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-3.5 h-3.5 text-slate-900" />)}
           </div>
           <span className="font-bold text-slate-900 text-sm">5.0</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl">
          Read <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Japanese</span> At Any Level
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Graded readings from real content, personalized to your level. 
          Save vocab, instant lookup, and smart review.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
           <a href="#" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-full hover:bg-slate-900 transition-all hover:-translate-y-1 shadow-lg min-w-[180px] justify-center border border-slate-800">
             <AppleLogo className="w-6 h-6 fill-white" />
             <div className="flex flex-col items-start text-left leading-none">
               <span className="text-[9px] font-medium opacity-80">Download on the</span>
               <span className="text-lg font-bold tracking-tight">App Store</span>
             </div>
           </a>
           <a href="#" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-full hover:bg-slate-900 transition-all hover:-translate-y-1 shadow-lg min-w-[180px] justify-center border border-slate-800">
             <GooglePlayLogo className="w-5 h-5 fill-white" />
             <div className="flex flex-col items-start text-left leading-none">
               <span className="text-[9px] font-medium opacity-80">GET IT ON</span>
               <span className="text-lg font-bold tracking-tight">Google Play</span>
             </div>
           </a>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[620px] flex items-center justify-center">
        
        {/* Overall background glow - INTENSIFIED */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-pink-500/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

        {/* Dynamic Glow Spots behind Far Left and Far Right items */}
        <div className="absolute top-1/2 left-[calc(50%-520px)] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-red-500/40 rounded-full blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-[calc(50%+520px)] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-red-500/40 rounded-full blur-[80px] -z-10 pointer-events-none" />

        {/* Static Phone Frame Overlay - Centered & Fixed */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[600px] z-[55] pointer-events-none">
             {/* Bezel */}
             <div className="w-full h-full border-[8px] border-slate-900 rounded-[2.5rem] relative shadow-2xl">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-50" />
                 {/* Inner Shadow to blend cutouts */}
                 <div className="absolute inset-0 rounded-[2rem] shadow-inner pointer-events-none" />
             </div>
        </div>

        {/* Carousel Items Track */}
        <div className="relative w-full h-full flex justify-center items-center">
          {CAROUSEL_ITEMS.map((item, index) => {
            const { x, height, opacity, zIndex, brightness, isCenter } = getStyle(index);
            
            return (
              <motion.div
                key={item.id}
                className="absolute w-[260px] bg-white overflow-hidden shadow-lg flex flex-col"
                animate={{
                  x,
                  height,
                  opacity,
                  zIndex,
                  filter: `brightness(${brightness})`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                style={{
                  left: "50%",
                  top: "50%", 
                  y: "-50%", 
                  marginLeft: -130, // Half of 260px width
                  borderRadius: isCenter ? "2rem" : "1.5rem",
                }}
              >
                {/* Screen Content */}
                <div className="w-full h-full overflow-hidden">
                   <AppScreen type={item.type} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-8 md:left-32 -translate-y-1/2 z-[60]">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 border border-slate-100"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute top-1/2 right-8 md:right-32 -translate-y-1/2 z-[60]">
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 border border-slate-100"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}
