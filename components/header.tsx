'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">QH</div>
          <div className="flex gap-6 items-center text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t.nav.contact}
            </button>
            <div className="h-6 w-px bg-border" />
            <div className="flex gap-2 bg-card rounded-lg p-1 border border-border">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-semibold transition ${
                  language === 'en'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('vi')}
                className={`px-3 py-1 rounded text-xs font-semibold transition ${
                  language === 'vi'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                VI
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
