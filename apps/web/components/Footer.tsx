"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Github, Send } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] bg-red-500/15 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[250px] h-[250px] bg-red-500/15 rounded-full blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-red-500 rounded-lg p-1.5 transition-transform group-hover:rotate-12 shadow-sm">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Sakura<span className="text-red-500">Sensei</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Master Japanese through immersive reading. Built for learners, by learners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"><Github size={20} /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#features" className="text-slate-600 hover:text-red-500 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-600 hover:text-red-500 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-red-500 transition-colors">Download App</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-red-500 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="text-slate-600 hover:text-red-500 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-slate-600 hover:text-red-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-red-500 transition-colors">JLPT Guides</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-red-500 transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-500 mb-4">
              Get the latest study tips and app updates.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-900 w-full focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition-all placeholder:text-slate-400"
              />
              <button 
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} SakuraSensei Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
