"use client";

import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
  icon: string;
  color: string; // Add color property
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "frontend" | "backend" | "tools"
  >("all");

  const skills: Skill[] = [
    // Frontend
    { name: "HTML5", level: 95, category: "frontend", icon: "fa-brands fa-html5", color: "#E34F26" },
    { name: "CSS3", level: 90, category: "frontend", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", level: 90, category: "frontend", icon: "fa-brands fa-js", color: "#F7DF1E" },
    { name: "React", level: 85, category: "frontend", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "TypeScript", level: 80, category: "frontend", icon: "fa-solid fa-code", color: "#3178C6" },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: "fa-solid fa-wind", color: "#06B6D4" },
    { name: "Bootstrap", level: 85, category: "frontend", icon: "fa-brands fa-bootstrap", color: "#7952B3" },

    // Backend
    { name: "Node.js", level: 80, category: "backend", icon: "fa-brands fa-node-js", color: "#339933" },
    { name: "Express", level: 75, category: "backend", icon: "fa-solid fa-server", color: "#8C8C8C" },
    { name: "MongoDB", level: 70, category: "backend", icon: "fa-solid fa-database", color: "#47A248" },
    { name: "REST APIs", level: 85, category: "backend", icon: "fa-solid fa-network-wired", color: "#FF6C37" },

    // Tools
    { name: "Git", level: 90, category: "tools", icon: "fa-brands fa-git-alt", color: "#F05032" },
    { name: "GitHub", level: 90, category: "tools", icon: "fa-brands fa-github", color: "#8C8C8C" },
    { name: "VS Code", level: 95, category: "tools", icon: "fa-solid fa-code-branch", color: "#007ACC" },
    { name: "Responsive Design", level: 90, category: "tools", icon: "fa-solid fa-mobile-screen", color: "#38B2AC" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ] as const;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-card-foreground hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
                { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
                { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
                { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
                { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
                { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
                { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
                { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178C6" },
                { name: "Express", icon: "fa-solid fa-server", color: "#8C8C8C" },
                { name: "GitHub", icon: "fa-brands fa-github", color: "#8C8C8C" },
                { name: "VS Code", icon: "fa-solid fa-code-branch", color: "#007ACC" },
                { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952B3" },
                { name: "Tailwind", icon: "fa-solid fa-wind", color: "#06B6D4" },
                { name: "REST APIs", icon: "fa-solid fa-network-wired", color: "#FF6C37" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <i className={`${tech.icon} text-4xl`} style={{ color: tech.color }}></i>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
