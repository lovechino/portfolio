'use client'

import { useRef } from 'react'
import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Dim all sections above contact
    gsap.to(sectionsRef.current, {
      opacity: 0.15,
      filter: "blur(1px)",
      duration: 0.6,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      }
    });

    // Subtle highlight for contact section
    gsap.from("#contact", {
      scale: 0.98,
      opacity: 0.5,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      }
    });
  });

  return (
    <LanguageProvider>
      <Header />
      <div className="relative">
        <div ref={sectionsRef}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
        </div>
        <Contact />
      </div>
    </LanguageProvider>
  )
}
