"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FRAME_COUNT = 240;

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/images/herosection/ezgif-frame-${frameNum}.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          if (canvasRef.current) {
             renderFrame(1, loadedImages);
          }
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const renderFrame = (index: number, imgArray: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index - 1];
    if (!img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.floor(latest * FRAME_COUNT) + 1));
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentFrame = Math.max(1, Math.min(FRAME_COUNT, Math.floor(scrollYProgress.get() * FRAME_COUNT) + 1));
        renderFrame(currentFrame);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <section ref={containerRef} id="hero" className="relative h-[400vh] bg-black">
      
      {/* Sticky Background Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Canvas for image sequence */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0"
        />
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Scrolling Content Overlays */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        
        {/* Intro Text (0vh to 100vh) */}
        <div className="absolute top-0 w-full h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 pointer-events-auto">
            <div className="max-w-2xl">
              <SectionLabel className="text-white/70">Versace Collection</SectionLabel>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] font-serif font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                TIME,<br />
                REDEFINED.
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-light mb-10 drop-shadow-md">
                Discover a statement of precision, craftsmanship, and unmistakable style.
                Scroll to experience the Greca collection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="white">Explore Collection</Button>
                <Button variant="outline-white">Discover The Craft</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 1 (100vh to 200vh) */}
        <div className="absolute top-[100vh] w-full h-screen flex items-center justify-end">
          <div className="max-w-7xl mx-auto w-full px-6 flex justify-end pointer-events-auto">
            <div className="max-w-xl text-right">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">Meticulously Engineered</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-md">
                Every component is carefully sculpted. The mechanism reveals the intricate balance between aesthetic beauty and structural integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 (200vh to 300vh) */}
        <div className="absolute top-[200vh] w-full h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 pointer-events-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">Swiss Precision</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light mb-8 drop-shadow-md">
                Powered by a heart of uncompromising accuracy. Designed for those who demand excellence in every second.
              </p>
              <div className="flex items-center space-x-12 border-t border-white/30 pt-8">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/80">Case</span>
                  <span className="text-lg font-medium text-white drop-shadow-md">41 MM</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/80">Movement</span>
                  <span className="text-lg font-medium text-white drop-shadow-md">Automatic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outro CTA (300vh to 400vh) */}
        <div className="absolute top-[300vh] w-full h-screen flex items-center justify-center">
          <div className="text-center pointer-events-auto">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-10 drop-shadow-lg">Make It Yours.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="white">Explore Collection</Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
