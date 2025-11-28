"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

function SkillBadge({ skill }: { skill: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

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
    <div className="relative">
      <Badge
        variant="secondary"
        className="text-base flex flex-col py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all cursor-default relative group"
        onMouseEnter={() => {
          setIsHovered(true)
          setShowTooltip(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          setShowTooltip(false)
        }}
      >
        <span className={`transition-all ${isHovered ? "mr-2" : ""}`}>{skill}</span>
        {isHovered && (
          <span className="absolute -bottom-60 left-1/2 -translate-x-1/2 text-4xl  animate-in fade-in zoom-in duration-300">
            {getSkillIcon(skill)}
          </span>
        )}
      </Badge>
      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-1 0 py-2 bg-popover text-popover-foreground border rounded-md shadow-md max-w-xs text-center text-sm animate-in fade-in slide-in-from-bottom-2 duration-200 pointer-events-none">
          {getSkillDescription(skill)}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover" />
        </div>      
      )}
    </div>
  )
}

export function SkillsSection() {
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

  return (
    <section id="habilidades" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 text-2xl">
            <TabsTrigger value="frontend"className="text-2xl">Front-End</TabsTrigger>
            <TabsTrigger value="backend" className="text-2xl">Back-End</TabsTrigger>
            <TabsTrigger value="otros" className="text-2xl">Otros</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="mt-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.frontend.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.backend.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="otros" className="mt-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.otros.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
