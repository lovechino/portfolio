'use client'

import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground">{t.about.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
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

          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-accent">{t.about.location}</h3>
              <p className="text-foreground">{t.about.locationValue}</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-accent">{t.about.education}</h3>
              <p className="text-foreground">{t.about.educationSchool}</p>
              <p className="text-sm text-muted-foreground">{t.about.educationFaculty}</p>
              <p className="text-sm text-muted-foreground">{t.about.educationPeriod}</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-accent">{t.about.goal}</h3>
              <p className="text-sm text-foreground">
                {t.about.goalValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
