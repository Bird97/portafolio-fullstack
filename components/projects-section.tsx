"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

function TechBadge({ tech }: { tech: string }) {
  const [isHovered, setIsHovered] = useState(false)

  const getTechIcon = (techName: string) => {
    const icons: Record<string, string> = {
      Angular: "A",
      "Node.js": "🟢",
      "Full Stack": "⚡",
      NestJS: "N",
      PostgreSQL: "🐘",
      TypeORM: "📊",
      React: "⚛️",
      Bootstrap: "B",
      JWT: "🔐",
    }
    return icons[techName] || "💻"
  }

  return (
    <Badge
      variant="secondary"
      className="relative group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`transition-all ${isHovered ? "mr-2" : ""}`}>{tech}</span>
      {isHovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl animate-in fade-in zoom-in duration-200">
          {getTechIcon(tech)}
        </span>
      )}
    </Badge>
  )
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Ahumados al Barril",
      description:
        "Desarrollé e implementé un programa de gestión integral para un restaurante usando Angular y Node.js. Mejoré la eficiencia operativa del restaurante, reduciendo errores en la toma de pedidos y mejorando la experiencia del cliente.",
      image: "/images/captura.jpeg",
      tags: ["Angular", "Node.js", "Full Stack"],
      period: "2024-2025",
    },
    {
      title: "Desref - Gestión de Libranzas",
      description:
        "Diseñé e implementé una plataforma web integral para la administración de libranzas entre más de 18 entidades. Desarrollé módulos para la administración de beneficiarios, servicios y pagos, permitiendo a las entidades gestionar créditos, descuentos y saldos de empleados de forma centralizada. Logré optimizar los procesos financieros de las entidades, reduciendo errores administrativos y mejorando la trazabilidad de las operaciones de libranza.",
      image: "/images/4799410.jpg",
      tags: ["NestJS", "PostgreSQL", "TypeORM", "React", "Bootstrap", "JWT"],
      period: "Marzo - Octubre 2025",
    },
  ]

  return (
    <section id="proyectos" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos profesionales en los que he trabajado para empresas
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 flex flex-col justify-center">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <Badge variant="outline" className="mb-4">
                      {project.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} tech={tag} />
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
