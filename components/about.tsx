'use client'

import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const { language } = useLanguage()
  const t = translations[language]
  const container = useRef<HTMLDivElement>(null)
  const leftCol = useRef<HTMLDivElement>(null)
  const rightCol = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Left column slide from left
    gsap.from(leftCol.current, {
      x: -150,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftCol.current,
        start: "top 95%", // Bắt đầu khi phần tử vừa chớm xuất hiện
        end: "bottom 30%", // Kết thúc muộn hơn để quãng đường di chuyển dài hơn
        scrub: 2, // Tăng giá trị scrub để chuyển động mượt và "chậm" hơn (delay catching up)
      }
    });

    // Right column slide from right
    gsap.from(rightCol.current, {
      x: 150,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightCol.current,
        start: "top 95%",
        end: "bottom 30%",
        scrub: 2,
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="about" className="border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">{t.about.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-3 overflow-hidden">
          <div ref={leftCol} className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              {t.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {t.about.paragraph2}
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {t.about.paragraph3}
            </p>
          </div>

          <div ref={rightCol} className="space-y-6 rounded-2xl border border-border bg-card/50 p-8 shadow-sm backdrop-blur-sm">
            <div>
              <h3 className="mb-3 text-xs font-bold tracking-wider text-accent uppercase">{t.about.location}</h3>
              <p className="text-foreground font-medium">{t.about.locationValue}</p>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-bold tracking-wider text-accent uppercase">{t.about.education}</h3>
              <p className="text-foreground font-semibold">{t.about.educationSchool}</p>
              <p className="text-sm text-muted-foreground">{t.about.educationFaculty}</p>
              <p className="text-sm text-muted-foreground font-mono">{t.about.educationPeriod}</p>
            </div>
            <div className="pt-2">
              <h3 className="mb-3 text-xs font-bold tracking-wider text-accent uppercase">{t.about.goal}</h3>
              <p className="text-sm text-foreground leading-relaxed italic">
                "{t.about.goalValue}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
