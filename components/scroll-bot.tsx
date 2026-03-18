'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollBot() {
  const botRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!botRef.current) return;

    // Appearance & Initial Position
    gsap.set(botRef.current, { opacity: 0, scale: 0, x: 50 });
    
    gsap.to(botRef.current, {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#hero",
        start: "top 20%",
        toggleActions: "play none none none"
      }
    });

    // Phase 1: Continuous downward movement following the scroll
    gsap.to(botRef.current, {
      y: "80vh", // Move down to 80% of screen height
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "#contact top",
        scrub: 0.5, // Faster responsiveness
      }
    });

    // Floating effect (loops independently)
    gsap.to(iconRef.current, {
      y: "-=20",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut"
    });

    // Phase 2: Contact Section Transformation & Rolling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      }
    });

    tl.to(iconRef.current, {
      borderRadius: "999px",
      backgroundColor: "var(--accent)",
      padding: "0px",
      width: "50px",
      height: "50px",
      scale: 1,
      rotation: 720,
      boxShadow: "0 0 30px var(--accent)",
      duration: 1,
    })
    .to(".robot-image", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    }, "<") // Start at the same time as parent transformation
    .to(botRef.current, {
      x: "-=85vw",
      rotation: -1440,
      ease: "power2.inOut",
      duration: 5,
    })
    .to(botRef.current, {
       opacity: 0,
       scale: 0,
       duration: 0.5,
    });

  }, []);

  return (
    <div
      ref={botRef}
      className="fixed top-20 right-10 z-[100] pointer-events-none hidden md:block"
    >
      <div
        ref={iconRef}
        className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background/50 border-2 border-accent/30 shadow-2xl backdrop-blur-md overflow-hidden"
      >
        <Image 
          src="/robot.svg" 
          alt="Robot" 
          width={60} 
          height={60} 
          className="robot-image object-contain transition-transform duration-500"
        />
      </div>
    </div>
  )
}
