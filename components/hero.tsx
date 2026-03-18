'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const container = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } })
    tl.from(".hero-name", {
      y: 60,
      opacity: 0,
      duration: 1.2
    }, "-=0.6").from(".hero-title", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.5")
  }, { scope: container })

  return (
    <section ref={container} className="relative min-h-screen w-full overflow-hidden px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-1000">
              {t.hero.subtop}
            </div>

            <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-[100px] leading-[1.1] pb-2">
              <span className="hero-name bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-[length:200%_auto] block">
                {t.hero.name}
              </span>
            </h1>

            <p className="hero-title text-2xl font-semibold text-foreground/90 tracking-wide sm:text-3xl">
              {t.hero.title}
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I craft <span className="text-primary font-medium">beautiful</span>, performant user interfaces with <span className="text-accent font-medium">React and Next.js</span>. Passionate about building pixel-perfect experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <button className="h-12 px-8 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              {t.hero.buttonPrimary}
            </button>
            <button className="h-12 px-8 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground font-bold hover:bg-accent/10 transition-all">
              {t.hero.buttonSecondary}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
