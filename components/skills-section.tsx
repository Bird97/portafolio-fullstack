"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

function SkillBadge({ skill }: { skill: string }) {
  const [isHovered, setIsHovered] = useState(false)

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
      SEO: "🔍",
      Linux: "🐧",
      "VS Code": "💻",
      Jira: "📊",
      Vercel: "▲",
    }
    return icons[skillName] || "💻"
  }

  return (
    <Badge
      variant="secondary"
      className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all cursor-default relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`transition-all ${isHovered ? "mr-2" : ""}`}>{skill}</span>
      {isHovered && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl animate-in fade-in zoom-in duration-200">
          {getSkillIcon(skill)}
        </span>
      )}
    </Badge>
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
      "Vue.js",
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
      "GraphQL",
      "Docker",
      "AWS",
      "Firebase",
      "SQL",
    ],
    otros: ["Git", "GitHub", "Figma", "CI/CD", "Agile/Scrum", "Testing", "SEO", "Linux", "VS Code", "Jira", "Vercel"],
  }

  return (
    <section id="habilidades" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="frontend">Front-End</TabsTrigger>
            <TabsTrigger value="backend">Back-End</TabsTrigger>
            <TabsTrigger value="otros">Otros</TabsTrigger>
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
