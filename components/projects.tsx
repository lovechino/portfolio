'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      title: t.projects.projectTitle,
      description: t.projects.projectDescription,
      features: [
        t.projects.feature1,
        t.projects.feature2,
        t.projects.feature3,
        t.projects.feature4,
      ],
      techStack: ['Python', 'FastAPI', 'Sentence-Transformers', 'RAG Architecture', 'SSE', 'Ollama'],
      links: {
        github: 'https://github.com/lovechino/legal-ai',
      },
    },
  ]

  const TagBadge = ({ text }: { text: string }) => (
    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      {text}
    </span>
  )

  return (
    <section id="projects" className="border-t border-border bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-grow bg-border" />
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground">{t.projects.title}</h2>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg border border-border bg-background p-6 lg:p-8">
              <div className="mb-4">
                <h3 className="mb-2 text-2xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-accent">{t.projects.keyFeatures}</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-foreground">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-accent">{t.projects.techStack}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TagBadge key={tech} text={tech} />
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="h-4 w-4" />
                    {t.projects.viewGithub}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-6 lg:p-8">
          <p className="text-center text-foreground">
            {t.projects.viewMore}{' '}
            <a
              href="https://github.com/lovechino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-accent transition hover:underline"
            >
              GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
