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

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]
  const container = useRef<HTMLDivElement>(null);

  const frontendSkills = [
    { name: 'React.js', level: '90%' },
    { name: 'Next.js', level: '85%' },
    { name: 'TypeScript', level: '80%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'CSS/SCSS', level: '85%' },
    { name: 'React Native', level: '75%' },
  ]

  const otherSkills = [
    { name: 'Redux Toolkit', level: '80%' },
    { name: 'RESTful API', level: '80%' },
    { name: 'Git/GitLab', level: '85%' },
    { name: 'Docker', level: '70%' },
    { name: 'Responsive Design', level: '90%' },
    { name: 'Performance Optimization', level: '80%' },
  ]

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".skill-item");
    
    items.forEach((item) => {
      const progress = item.querySelector(".skill-progress");
      const percentText = item.querySelector(".skill-percent");
      const targetLevel = item.getAttribute("data-level") || "0%";
      const targetValue = parseInt(targetLevel);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
          toggleActions: "play none none none"
        }
      });

      tl.to(progress, {
        width: targetLevel,
        duration: 1.5,
        ease: "power2.out"
      }, 0);

      const counter = { value: 0 };
      tl.to(counter, {
        value: targetValue,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          if (percentText) {
            percentText.textContent = `${Math.round(counter.value)}%`;
          }
        }
      }, 0);
    });
  }, { scope: container });

  const SkillBar = ({ name, level }: { name: string; level: string }) => (
    <div className="skill-item group" data-level={level}>
      <div className="mb-2 flex justify-between items-end">
        <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">{name}</span>
        <span className="skill-percent text-xs font-bold text-accent/80 tabular-nums">0%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted/30 overflow-hidden ring-1 ring-border/50">
        <div
          className="skill-progress relative h-full rounded-full bg-accent shadow-sm shadow-accent/20"
          style={{ width: "0%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </div>
  )

  return (
    <section ref={container} id="skills" className="border-t border-border bg-card/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">{t.skills.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-lg font-bold text-foreground">
              <span className="h-6 w-1 rounded-full bg-accent" />
              {t.skills.frontendTitle}
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-lg font-bold text-foreground">
              <span className="h-6 w-1 rounded-full bg-accent" />
              {t.skills.toolsTitle}
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl border border-border bg-background/50 p-8 shadow-sm backdrop-blur-sm">
          <h3 className="mb-8 text-sm font-bold tracking-wider text-accent uppercase">{t.skills.languagesTitle}</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-xl bg-card/50 p-4 ring-1 ring-border/50 transition-all hover:ring-accent/30">
              <span className="font-medium text-foreground">{t.skills.english}</span>
              <span className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent border border-accent/20">
                {t.skills.englishLevel}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-card/50 p-4 ring-1 ring-border/50 transition-all hover:ring-accent/30">
              <span className="font-medium text-foreground">{t.skills.vietnamese}</span>
              <span className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent border border-accent/20">
                {t.skills.vietnameseLevel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
