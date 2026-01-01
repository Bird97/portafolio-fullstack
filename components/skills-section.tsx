"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X, Code2, Server, Wrench } from "lucide-react"

function SkillBadge({ skill }: { skill: string }) {
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
      JWT: "Estándar para crear tokens de acceso seguros que permiten autenticación sin estado",
      "REST APIs": "Arquitectura para crear servicios web que comunican sistemas mediante HTTP",
      GraphQL: "Lenguaje de consulta para APIs que permite solicitar exactamente los datos necesarios",
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
      Linux: "Sistema operativo de código abierto usado en servidores y desarrollo",
      "VS Code": "Editor de código potente y extensible de Microsoft",
      Jira: "Herramienta de gestión de proyectos y seguimiento de issues para equipos ágiles",
      Vercel: "Plataforma para desplegar aplicaciones web con Next.js de forma rápida y escalable",
      "Responsive Design": "Técnica para crear sitios web que se adaptan a cualquier tamaño de pantalla",
    }
    return descriptions[skillName] || "Tecnología para desarrollo web"
  }

  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, string> = {
      React: "⚛️",
      "Next.js": "▲",
      TypeScript: "TS",
      JavaScript: "JS",
      HTML5: "HTML",
      CSS3: "CSS",
      "Tailwind CSS": "💨",
      Sass: "💅",
      Redux: "🔄",
      "Vue.js": "V",
      Angular: "A",
      "Node.js": "🟢",
      Express: "E",
      Python: "🐍",
      Django: "D",
      PostgreSQL: "🐘",
      MongoDB: "🍃",
      NestJS: "N",
      TypeORM: "📊",
      Bootstrap: "B",
      JWT: "🔐",
      "REST APIs": "🔌",
      GraphQL: "◼️",
      Docker: "🐳",
      AWS: "☁️",
      Firebase: "🔥",
      SQL: "💾",
      Git: "📦",
      GitHub: "🐙",
      Figma: "🎨",
      "Adobe XD": "🎨",
      "CI/CD": "🔄",
      "Agile/Scrum": "📋",
      Testing: "✅",
      Jest: "🃏",
      Cypress: "🌲",
      "React Testing Library": "🧪",
      Playwright: "🎭",
      SEO: "🔍",
      Linux: "🐧",
      "VS Code": "💻",
      Jira: "📊",
      Vercel: "▲",
      "Responsive Design": "📱",
    }
    return icons[skillName] || "💻"
  }

  return (
    <>
      <Badge
        variant="secondary"
        className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all cursor-pointer"
        onClick={() => setShowCard(true)}
      >
        {skill}
      </Badge>

      {/* Card Modal */}
      {showCard && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[60] animate-in fade-in duration-200"
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
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-5xl">{getSkillIcon(skill)}</span>
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

export function SkillsSection() {
  const [activePanel, setActivePanel] = useState<"frontend" | "backend" | "otros" | null>(null)

  const skills = {
    frontend: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "Redux",
      "Responsive Design",
    ],
    backend: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Docker",
      "AWS",
      "SQL",
    ],
    otros: [
      "Git",
      "GitHub",
      "Testing",
      "Jest",
      "React Testing Library",
      "Figma",
      "CI/CD",
      "Agile/Scrum",
      "Linux",
      "VS Code",
      "Jira",
      "Vercel",
    ],
  }

  const handlePanelToggle = (panel: "frontend" | "backend" | "otros") => {
    setActivePanel(activePanel === panel ? null : panel)
  }

  return (
    <section id="habilidades" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="w-full px-4 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button
            size="lg"
            variant={activePanel === "frontend" ? "default" : "outline"}
            className="text-lg md:text-xl w-full sm:w-auto flex items-center gap-2"
            onClick={() => handlePanelToggle("frontend")}
          >
            <Code2 className="h-5 w-5" />
            Front-End
          </Button>
          <Button
            size="lg"
            variant={activePanel === "backend" ? "default" : "outline"}
            className="text-lg md:text-xl w-full sm:w-auto flex items-center gap-2"
            onClick={() => handlePanelToggle("backend")}
          >
            <Server className="h-5 w-5" />
            Back-End
          </Button>
          <Button
            size="lg"
            variant={activePanel === "otros" ? "default" : "outline"}
            className="text-lg md:text-xl w-full sm:w-auto flex items-center gap-2"
            onClick={() => handlePanelToggle("otros")}
          >
            <Wrench className="h-5 w-5" />
            Otros
          </Button>
        </div>

        {/* Panel desde la derecha - Frontend */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-background border-l shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
            activePanel === "frontend" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Front-End</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActivePanel(null)}
                className="h-10 w-10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Panel desde abajo - Backend */}
        <div
          className={`fixed bottom-0 left-0 w-full h-[70vh] md:h-[500px] bg-background border-t shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
            activePanel === "backend" ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-full overflow-y-auto p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Back-End</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActivePanel(null)}
                className="h-10 w-10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Panel desde la izquierda - Otros */}
        <div
          className={`fixed top-0 left-0 h-full w-full md:w-[500px] bg-background border-r shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
            activePanel === "otros" ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Otros</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActivePanel(null)}
                className="h-10 w-10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.otros.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {activePanel && (
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setActivePanel(null)}
          />
        )}
      </div>
    </section>
  )
}
