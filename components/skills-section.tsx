"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import { X, Code2, Server, Database, Wrench, TestTube, Palette, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

function SkillBadge({ skill, imagePath, icon }: { skill: string; imagePath?: string; icon?: string }) {
  const [showCard, setShowCard] = useState(false)

  const getSkillDescription = (skillName: string): string => {
    const descriptions: Record<string, string> = {
      React: "Biblioteca JavaScript para construir interfaces de usuario interactivas con componentes reutilizables",
      "Next.js": "Framework de React para aplicaciones web con renderizado del lado del servidor y generación estática",
      TypeScript: "JavaScript con tipos estáticos para código más seguro y mantenible",
      JavaScript: "Lenguaje de programación para crear interactividad en aplicaciones web",
      HTML5: "Lenguaje de marcado estándar para estructurar contenido web",
      CSS3: "Lenguaje de estilos para diseñar y dar formato visual a páginas web",
      "Tailwind CSS": "Framework CSS de utilidades para diseñar interfaces rápidamente sin salir del HTML",
      Sass: "Preprocesador CSS que añade funcionalidades como variables y anidamiento",
      Redux: "Librería para gestionar el estado global de aplicaciones JavaScript de forma predecible",
      "Vue.js": "Framework progresivo de JavaScript para construir interfaces de usuario reactivas",
      Angular: "Framework completo de TypeScript para aplicaciones web empresariales robustas",
      "Node.js":
        "Entorno que ejecuta JavaScript en el servidor, ideal para aplicaciones rápidas, escalables y en tiempo real",
      Express: "Framework minimalista de Node.js para crear APIs y aplicaciones web de forma rápida",
      Python: "Lenguaje versátil y legible para desarrollo web, ciencia de datos y automatización",
      Django: "Framework de Python de alto nivel para desarrollo web rápido y seguro",
      PostgreSQL: "Base de datos relacional potente y de código abierto con soporte avanzado",
      MongoDB: "Base de datos NoSQL flexible que almacena datos en formato JSON",
      NestJS: "Framework de Node.js con TypeScript para construir aplicaciones del lado del servidor escalables",
      TypeORM: "ORM de TypeScript para trabajar con bases de datos usando objetos en lugar de SQL",
      Bootstrap: "Framework CSS con componentes prediseñados para desarrollo web responsivo",
      Swagger: "Herramienta para documentar, diseñar y probar APIs REST de forma interactiva",
      JWT: "Estándar para crear tokens de acceso seguros que permiten autenticación sin estado",
      "REST APIs": "Arquitectura para crear servicios web que comunican sistemas mediante HTTP",
      Docker: "Plataforma para crear, distribuir y ejecutar aplicaciones en contenedores aislados",
      AWS: "Plataforma de servicios en la nube de Amazon para hosting, bases de datos y más",
      Firebase: "Plataforma de Google para desarrollo de apps con base de datos en tiempo real y autenticación",
      SQL: "Lenguaje estándar para gestionar y consultar bases de datos relacionales",
      Git: "Sistema de control de versiones para rastrear cambios en el código",
      GitHub: "Plataforma para alojar repositorios Git y colaborar en proyectos de código",
      Figma: "Herramienta de diseño colaborativo para crear interfaces y prototipos",
      "Adobe XD": "Herramienta de Adobe para diseñar y prototipar experiencias de usuario",
      "CI/CD": "Prácticas para integrar y desplegar código automáticamente de forma continua",
      "Agile/Scrum": "Metodologías ágiles para gestionar proyectos con iteraciones cortas y colaboración",
      Testing: "Proceso de verificar que el software funciona correctamente mediante pruebas automatizadas",
      Jest: "Framework de testing de JavaScript con enfoque en simplicidad",
      Cypress: "Herramienta para pruebas end-to-end de aplicaciones web",
      "React Testing Library": "Biblioteca para probar componentes de React simulando el comportamiento del usuario",
      Playwright: "Framework moderno para pruebas automatizadas de navegadores web",
      SEO: "Optimización para motores de búsqueda para mejorar la visibilidad en Google",
      "VS Code": "Editor de código potente y extensible de Microsoft",
      Trello: "Herramienta de gestión de proyectos y seguimiento de issues para equipos ágiles",
      Vercel: "Plataforma para desplegar aplicaciones web con Next.js de forma rápida y escalable",
      "Responsive Design": "Técnica para crear sitios web que se adaptan a cualquier tamaño de pantalla",
    }
    return descriptions[skillName] || "Tecnología para desarrollo web"
  }

  return (
    <>
      <div
        className="group flex items-center gap-3 bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg px-4 py-3 cursor-pointer transition-all hover:shadow-md"
        onClick={() => setShowCard(true)}
      >
        {imagePath ? (
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src={imagePath}
              alt={skill}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
        <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">
          {skill}
        </span>
      </div>

      {/* Card Modal */}
      {showCard && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[60] animate-in fade-in rounded-lg duration-200"
            onClick={() => setShowCard(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-md animate-in zoom-in-95 fade-in duration-200">
            <div className="bg-background border-2 border-primary rounded-lg shadow-2xl p-6 md:p-8 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCard(false)}
                className="absolute top-2 right-2 h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center p-4">
                  {imagePath ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={imagePath}
                        alt={skill}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-5xl">{icon}</span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">{skill}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {getSkillDescription(skill)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Array<{ name: string; imagePath?: string; icon?: string }>
  gradient: string
}

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isProgrammaticScroll = useRef(false)

  const toggleCategory = (title: string) => {
    const newExpanded = new Set<string>()
    if (!expandedCategories.has(title)) {
      newExpanded.add(title)
    }
    setExpandedCategories(newExpanded)
  }

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      gradient: "from-blue-500/10 to-cyan-500/10",
      skills: [
        { name: "React", imagePath: "/images/frontend/react.png" },
        { name: "Next.js", imagePath: "/images/frontend/nextjs.png" },
        { name: "TypeScript", imagePath: "/images/frontend/typescript.png" },
        { name: "JavaScript", imagePath: "/images/frontend/javascript.png" },
        { name: "HTML5", imagePath: "/images/frontend/HTML5.png" },
        { name: "CSS3", imagePath: "/images/frontend/CSS3.png" },
        { name: "Tailwind CSS", imagePath: "/images/frontend/tailwind.png" },
        { name: "Redux", imagePath: "/images/frontend/redux.svg" },
        { name: "Responsive Design", icon: "📱" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      gradient: "from-green-500/10 to-emerald-500/10",
      skills: [
        { name: "Node.js", imagePath: "/images/backend/node.svg" },
        { name: "NestJS", imagePath: "/images/backend/Nestjs.png" },
        { name: "Express", imagePath: "/images/backend/expressjs.svg" },
        { name: "REST APIs", icon: "🔌" },
        { name: "Swagger", imagePath: "/images/backend/swagger.png" },
        { name: "JWT", imagePath: "/images/backend/jwt.png" },
      ],
    },
    {
      title: "Bases de Datos",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-purple-500/10 to-pink-500/10",
      skills: [
        { name: "PostgreSQL", imagePath: "/images/db/postgresql.png" },
        { name: "MongoDB", imagePath: "/images/db/mongodb.png" },
        { name: "TypeORM", imagePath: "/images/db/typeorm.png" },
        { name: "SQL", imagePath: "/images/db/Sql.png" },
      ],
    },
    {
      title: "DevOps & Herramientas",
      icon: <Wrench className="h-6 w-6" />,
      gradient: "from-orange-500/10 to-red-500/10",
      skills: [
        { name: "Docker", imagePath: "/images/devops/docker.svg" },
        { name: "Git", imagePath: "/images/devops/git.svg" },
        { name: "GitHub", imagePath: "/images/devops/github.png" },
        { name: "AWS", imagePath: "/images/devops/aws.png" },
        { name: "Vercel", imagePath: "/images/devops/vercel.svg" },
      ],
    },
    {
      title: "Testing",
      icon: <TestTube className="h-6 w-6" />,
      gradient: "from-yellow-500/10 to-amber-500/10",
      skills: [
        { name: "Jest", imagePath: "/images/testing/jest.png" },
        { name: "Cypress", imagePath: "/images/testing/cypress.png" },
        { name: "React Testing Library", imagePath: "/images/testing/reacttestinglibrary.png" },
        { name: "Playwright", imagePath: "/images/testing/playwright.png" },
      ],
    },
    {
      title: "Diseño & Otros",
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-rose-500/10 to-pink-500/10",
      skills: [
        { name: "Figma", imagePath: "/images/design/figma.png" },
        { name: "Agile/Scrum", icon: "📋" },
        { name: "Trello", imagePath: "/images/design/trello.png" },
        { name: "VS Code", imagePath: "/images/design/vscode.png" },
      ],
    },
  ]

  // Scroll cuando cambia el índice
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const card = container.children[currentIndex] as HTMLElement
      
      if (card) {
        // Para las tarjetas de los bordes, scroll al borde; para las del centro, centrar
        const containerWidth = container.offsetWidth
        const cardWidth = card.offsetWidth
        const cardLeft = card.offsetLeft
        const maxScroll = container.scrollWidth - containerWidth
        
        // Calcular posición ideal centrada
        let scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2)
        
        // Limitar a los bordes del scroll
        scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll))
        
        isProgrammaticScroll.current = true
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
        
        // Reset flag después de que termine el scroll
        setTimeout(() => {
          isProgrammaticScroll.current = false
        }, 1000)
      }
    }
  }, [currentIndex])

  // Detectar scroll manual en móvil
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      // Ignorar scroll si es programático
      if (isProgrammaticScroll.current) return
      
      clearTimeout(scrollTimeout)
      
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft
        const containerWidth = container.offsetWidth
        const scrollCenter = scrollLeft + containerWidth / 2

        // Encontrar la tarjeta más cercana al centro
        let closestIndex = 0
        let minDistance = Infinity

        Array.from(container.children).forEach((child, index) => {
          const card = child as HTMLElement
          const cardCenter = card.offsetLeft + card.offsetWidth / 2
          const distance = Math.abs(scrollCenter - cardCenter)

          if (distance < minDistance) {
            minDistance = distance
            closestIndex = index
          }
        })

        if (closestIndex !== currentIndex) {
          setCurrentIndex(closestIndex)
        }
      }, 150)
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      container.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [currentIndex])

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    scrollToIndex((currentIndex - 1 + skillCategories.length) % skillCategories.length)
  }

  const handleNext = () => {
    scrollToIndex((currentIndex + 1) % skillCategories.length)
  }

  const handleCardClick = (index: number, title: string) => {
    setCurrentIndex(index)
    toggleCategory(title)
  }

  return (
    <section id="habilidades" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="w-full px-4 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico completo para desarrollo Full Stack moderno
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Fade Gradients - Hidden on mobile and when first/last card is active */}
          {currentIndex !== 0 && (
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-background via-secondary/30 to-transparent z-10 pointer-events-none" />
          )}
          {currentIndex !== skillCategories.length - 1 && (
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-background via-secondary/30 to-transparent z-10 pointer-events-none" />
          )}

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hidden md:flex"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full shadow-lg bg-background/80 backdrop-blur-sm hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 pt-5 pl-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-2 hide-scrollbar"
          >
            {skillCategories.map((category, index) => {
              const isExpanded = expandedCategories.has(category.title)
              const isActive = index === currentIndex
              return (
                <Card
                  key={category.title}
                  className={`flex-shrink-0 w-[85vw] md:w-[400px] snap-center p-6 bg-gradient-to-br ${category.gradient} border-2 transition-all duration-300 ${
                    isActive
                      ? "border-primary shadow-xl scale-105"
                      : "border-border hover:border-primary/50 hover:shadow-lg "
                  }`}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer group "
                    onClick={() => handleCardClick(index, category.title)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center rounded-full text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-primary transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`grid grid-cols-1 gap-2 transition-all duration-300 overflow-hidden ${
                      isExpanded ? "max-h-[2000px] opacity-100  mt-4" : "max-h-0 opacity-0 "
                    }`}
                  >
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill.name} imagePath={skill.imagePath} icon={skill.icon} />
                    ))}
                  </div>

                  {!isExpanded && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Click para ver {category.skills.length} habilidades
                    </p>
                  )}
                </Card>
              )
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary"  : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir a categoría ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  )
}
