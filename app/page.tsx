'use client'

import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function Home() {
  return (
    <AuroraBackground>
      <LanguageProvider>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </LanguageProvider>
    </AuroraBackground>
  )
}
