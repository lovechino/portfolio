'use client'

import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export function Experience() {
  const { language } = useLanguage()
  const t = translations[language]
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const items = gsap.utils.toArray(".exp-card")
    
    items.forEach((el: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100", // Bắt đầu khi item cách đáy màn hình 100px
          end: "bottom top+=100",   // Kết thúc khi item cách đỉnh màn hình 100px
          scrub: 1,
        }
      });

      tl.fromTo(el, 
        { opacity: 0, y: 50, scale: 0.9 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
      )
      .to(el, 
        { opacity: 0, y: -50, scale: 0.9, duration: 1, ease: "power2.in" }, 
        "+=0.5" // Đợi một chút rồi mới fade out
      );
    })
  }, { scope: container })
  const experiences = [
    {
      company: t.experience.company1,
      position: t.experience.position1,
      period: t.experience.period1,
      responsibilities: [
        t.experience.responsibility1_1,
        t.experience.responsibility1_2,
        t.experience.responsibility1_3,
        t.experience.responsibility1_4,
        t.experience.responsibility1_5,
        t.experience.responsibility1_6,
      ],
    },
    {
      company: t.experience.company2,
      position: t.experience.position2,
      period: t.experience.period2,
      responsibilities: [
        t.experience.responsibility2_1,
        t.experience.responsibility2_2,
        t.experience.responsibility2_3,
        t.experience.responsibility2_4,
        t.experience.responsibility2_5,
      ],
    },
  ]

  return (
    <section ref={container} id="experience" className="border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground">{t.experience.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card rounded-lg border border-border bg-card/50 p-6 lg:p-8">
              <div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
