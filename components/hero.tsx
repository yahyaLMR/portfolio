"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import Vortex with no SSR to prevent blocking
const Vortex = dynamic(() => import("./ui/vortex").then(mod => mod.Vortex), {
  ssr: false,
  loading: () => null, // No loading state, just show content
})

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showVortex, setShowVortex] = useState(false)
  const fullText = "Full-Stack Web Developer"

  useEffect(() => {
    // Show vortex after initial paint
    const vortexTimer = setTimeout(() => setShowVortex(true), 100)
    
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => {
      clearTimeout(vortexTimer)
      clearInterval(timer)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Load Vortex after content is visible */}
      {showVortex && (
        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={500}
          baseHue={270}
          className="absolute inset-0"
        />
      )}
      
      {/* Content - Optimized for LCP - paints immediately */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* LCP Element - No animations, immediate paint */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Hi, I'm <span className="text-primary">Yahya Lmouri</span>
          </h1>

          {/* Secondary text with typing animation */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              {displayedText}
              <span className="inline-block w-1 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web applications. Specialized in React,
            JavaScript, and modern web technologies.
          </p>

          {/* Buttons can have subtle animations after initial paint */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 bg-card text-card-foreground border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors duration-200"
              >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <a style={{backgroundColor:'rgb(150,150,150)', padding:'5px',borderRadius:'25px'}} href="#about" className="inline-block hover:translate-y-1 transition-transform duration-200">
              <svg className="w-6 h-6 text-muted-foreground" style={{color:'black'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
