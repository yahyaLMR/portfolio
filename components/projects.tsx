"use client"

import { useState } from "react"

interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  imageQuery: string
}

interface TechIcon {
  icon: string
  color: string
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(2)

  // Tech stack icon mapping
  const getTechIcon = (tech: string): TechIcon => {
    const techMap: Record<string, TechIcon> = {
      "React": { icon: "fa-brands fa-react", color: "#61DAFB" },
      "Node.js": { icon: "fa-brands fa-node-js", color: "#339933" },
      "MongoDB": { icon: "fa-solid fa-database", color: "#47A248" },
      "Express": { icon: "fa-solid fa-server", color: "#8C8C8C" },
      "Stripe": { icon: "fa-solid fa-credit-card", color: "#635BFF" },
      "TypeScript": { icon: "fa-solid fa-code", color: "#3178C6" },
      "Firebase": { icon: "fa-solid fa-fire", color: "#FFCA28" },
      "Tailwind CSS": { icon: "fa-solid fa-wind", color: "#06B6D4" },
      "JavaScript": { icon: "fa-brands fa-js", color: "#F7DF1E" },
      "OpenWeather API": { icon: "fa-solid fa-cloud-sun", color: "#FF6B35" },
      "CSS3": { icon: "fa-brands fa-css3-alt", color: "#1572B6" },
      "Next.js": { icon: "fa-solid fa-arrow-up-right-dots", color: "#000000" },
      // Default fallback
      "default": { icon: "fa-solid fa-code", color: "#8C8C8C" }
    }
    return techMap[tech] || techMap["default"]
  }

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React and Node.js.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      imageQuery: "modern ecommerce website interface",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://taskmanager-demo.com",
      imageQuery: "task management dashboard interface",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.",
      techStack: ["React", "JavaScript", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-demo.com",
      imageQuery: "weather app dashboard interface",
    },
    {
      title: "Portfolio CMS",
      description:
        "A content management system for portfolios with markdown support, image optimization, and SEO features.",
      techStack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio-cms",
      liveUrl: "https://portfolio-cms-demo.com",
      imageQuery: "content management system interface",
    },
        {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.",
      techStack: ["React", "JavaScript", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-demo.com",
      imageQuery: "weather app dashboard interface",
    },
    {
      title: "Portfolio CMS",
      description:
        "A content management system for portfolios with markdown support, image optimization, and SEO features.",
      techStack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio-cms",
      liveUrl: "https://portfolio-cms-demo.com",
      imageQuery: "content management system interface",
    },
  ]

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projects.length))
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={`/.jpg?height=300&width=500&query=${project.imageQuery}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => {
                      const techInfo = getTechIcon(tech)
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-all duration-300 group"
                          title={tech}
                        >
                          <i 
                            className={`${techInfo.icon} text-lg group-hover:scale-110 transition-transform`}
                            style={{ color: techInfo.color }}
                          />
                          <span className="text-sm">{tech}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card-foreground text-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / View All Button */}
          <div className="text-center mt-12">
            {hasMore ? (
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Load More Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <a
                href="https://github.com/yahyaLMR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-card text-card-foreground border-2 border-border rounded-lg font-semibold hover:bg-muted transition-all duration-300 hover:scale-105"
              >
                View More Projects on GitHub
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
