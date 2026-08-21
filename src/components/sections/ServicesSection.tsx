"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    id: "01",
    title: "Authentic Craftsmanship",
    icon: <BadgeCheck className="w-6 h-6 stroke-[1.5]" />,
    description: "Every timepiece is crafted with exceptional attention to detail, combining refined design with reliable precision.",
  },
  {
    id: "02",
    title: "Global Warranty",
    icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
    description: "Enjoy complete confidence with international manufacturer warranty and dedicated after-sales support.",
  },
  {
    id: "03",
    title: "Personalized Service",
    icon: <Sparkles className="w-6 h-6 stroke-[1.5]" />,
    description: "Experience expert assistance, professional servicing, and personalized guidance throughout your journey.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20 text-center lg:text-left lg:flex justify-between items-end gap-12"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <SectionLabel className="lg:mb-6">The Experience</SectionLabel>
            </motion.div>
            <motion.h2 
              variants={fadeUp}
              className="text-4xl md:text-5xl font-serif font-bold tracking-tight"
            >
              CRAFTED FOR<br className="hidden lg:block" /> A LIFETIME.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="max-w-md mt-6 lg:mt-0 text-brand-muted text-lg">
            <p>From exceptional craftsmanship to dedicated service, every detail is designed around your timepiece.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-12 lg:gap-8 lg:divide-x divide-brand-border/60"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={fadeUp}
              className={`flex flex-col lg:px-8 ${index === 0 ? "lg:pl-0" : ""} ${index === services.length - 1 ? "lg:pr-0" : ""}`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-serif font-light text-brand-muted/30">
                  {service.id}
                </span>
                <div className="p-3 bg-brand-bg rounded-full text-brand-accent">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-wide mb-4 font-serif">
                {service.title}
              </h3>
              <p className="text-brand-muted leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
