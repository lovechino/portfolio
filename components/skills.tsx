'use client'

import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]
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

  const SkillBar = ({ name, level }: { name: string; level: string }) => (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-card">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: level }}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="border-t border-border bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground">{t.skills.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">{t.skills.frontendTitle}</h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">{t.skills.toolsTitle}</h3>
              <div className="space-y-4">
                {otherSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-6">
          <h3 className="mb-4 text-sm font-semibold text-accent">{t.skills.languagesTitle}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-foreground">{t.skills.english}</span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">{t.skills.englishLevel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground">{t.skills.vietnamese}</span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">{t.skills.vietnameseLevel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
