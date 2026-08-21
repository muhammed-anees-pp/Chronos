"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-brand-dark text-white overflow-hidden py-32 px-6">
      
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-white/20"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent to-white/20"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel className="text-white/60 mx-auto">The Legacy</SectionLabel>
          </motion.div>
          
          <motion.h2 
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-12 leading-[1.15]"
          >
            MORE THAN <br className="hidden sm:block" />
            <span className="italic font-light text-white/90">A TIMEPIECE.</span>
          </motion.h2>

          <div className="space-y-8 text-white/70 font-light leading-relaxed mb-16 max-w-2xl mx-auto text-lg md:text-xl">
            <motion.p variants={fadeUp}>
              A watch is more than a way to measure time. It is a reflection of character, craftsmanship, and individuality.
            </motion.p>
            <motion.p variants={fadeUp}>
              Inspired by the bold spirit of Italian design and the precision of Swiss watchmaking, every detail is carefully considered — from the sculpted case to the refined dial and meticulously engineered movement.
            </motion.p>
            <motion.p variants={fadeUp}>
              Designed for those who see style as a form of expression, our timepieces are created to remain relevant long after trends fade.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <Button 
              variant="white" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back To Top &uarr;
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
