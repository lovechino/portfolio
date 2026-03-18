'use client'

import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="contact" className="border-t border-border bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground">{t.contact.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="rounded-lg border border-border bg-card/50 p-8 lg:p-12">
          <p className="mb-8 text-center text-lg text-foreground">
            {t.contact.description}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:quochung13122002@gmail.com"
              className="group rounded-lg border border-border bg-background p-4 text-center transition hover:border-accent hover:bg-accent hover:bg-opacity-10"
            >
              <Mail className="mx-auto mb-3 h-6 w-6 text-accent transition group-hover:scale-110" />
              <p className="text-sm font-semibold text-foreground">{t.contact.email}</p>
              <p className="truncate text-xs text-muted-foreground">quochung13122002@gmail.com</p>
            </a>

            <a
              href="tel:+84974168187"
              className="group rounded-lg border border-border bg-background p-4 text-center transition hover:border-accent hover:bg-accent hover:bg-opacity-10"
            >
              <Phone className="mx-auto mb-3 h-6 w-6 text-accent transition group-hover:scale-110" />
              <p className="text-sm font-semibold text-foreground">{t.contact.phone}</p>
              <p className="text-xs text-muted-foreground">+84 974 168 187</p>
            </a>

            <a
              href="https://github.com/lovechino"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-background p-4 text-center transition hover:border-accent hover:bg-accent hover:bg-opacity-10"
            >
              <Github className="mx-auto mb-3 h-6 w-6 text-accent transition group-hover:scale-110" />
              <p className="text-sm font-semibold text-foreground">{t.contact.github}</p>
              <p className="text-xs text-muted-foreground">lovechino</p>
            </a>

            <a
              href="https://lnk.ink/oyBWj"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-background p-4 text-center transition hover:border-accent hover:bg-accent hover:bg-opacity-10"
            >
              <Linkedin className="mx-auto mb-3 h-6 w-6 text-accent transition group-hover:scale-110" />
              <p className="text-sm font-semibold text-foreground">{t.contact.linkedin}</p>
              <p className="text-xs text-muted-foreground">Profile</p>
            </a>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{t.contact.copyright}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
