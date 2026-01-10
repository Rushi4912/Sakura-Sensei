"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "This app completely changed how I study. The graded readers are exactly what I needed to bridge the gap between textbook Japanese and real content.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Chen",
    role: "JLPT N3 Student",
  },
  {
    text: "The instant vocabulary lookup and spaced repetition system saves me so much time. I'm finally retaining the kanji I learn!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael Ross",
    role: "Self-Learner",
  },
  {
    text: "As a busy professional, I love that I can get bite-sized reading practice during my commute. The design is beautiful and distracting-free.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emily Sato",
    role: "Marketing Director",
  },
  {
    text: "I was stuck at the intermediate plateau for years. This app's curated content helped me finally break through to advanced reading.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Kim",
    role: "JLPT N2 Candidate",
  },
  {
    text: "The audio features for shadowing are fantastic. My pitch accent has improved significantly since I started using the reader.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Jessica Wong",
    role: "University Student",
  },
  {
    text: "Better than any textbook I've used. It feels like I'm actually reading Japanese, not just studying grammar rules in a vacuum.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Alex Thompson",
    role: "Language Enthusiast",
  },
  {
    text: "Clean, intuitive, and effective. The gamification elements keep me motivated without being annoying. Highly recommend!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ryan Park",
    role: "Software Engineer",
  },
  {
    text: "Finally, an app that focuses on reading context! The sentence mining feature is a game-changer for building vocab.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sophie Miller",
    role: "Translator",
  },
  {
    text: "Support is super responsive, and they actually listen to feature requests. The best investment I've made for my Japanese studies.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Daniel Lee",
    role: "Expat in Tokyo",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:border-red-100 transition-all duration-300 cursor-default select-none group" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-slate-600 leading-relaxed font-normal m-0 text-base">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-red-200 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-bold not-italic tracking-tight leading-5 text-slate-900">
                          {name}
                        </cite>
                        <span className="text-xs leading-5 tracking-tight text-slate-500 mt-0.5 font-medium uppercase">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-slate-50 py-24 relative overflow-hidden"
    >
      {/* Pinkish Glow Effects - Lighter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[500px] bg-red-500/25 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[500px] bg-red-500/25 rounded-full blur-[80px] pointer-events-none" />

      <motion.div  
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.0, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className="container px-4 z-10 mx-auto relative"
      >
        <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase text-red-600">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Testimonials
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-slate-900 mb-6">
            Loved by <span className="text-red-500">Learners</span> Worldwide
          </h2>
          <p className="text-center text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
            Join thousands of students who have transformed their Japanese reading ability with our graded readers and smart tools.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
