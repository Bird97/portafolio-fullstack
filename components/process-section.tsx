"use client"
import {
  Target,
  Users,
  Lightbulb,
  Sparkles,
  Boxes,
  TestTube,
  MessageSquare,
  UserCheck,
  Wrench,
  Zap,
  Rocket,
  Languages,
} from "lucide-react"
import { useState } from "react"

export function ProcessSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const steps = [
    {
      icon: Target,
      title: "Definiendo Objetivos Claros",
      description: "Estableciendo metas precisas y alcanzables",
      backIcon: MessageSquare,
      backTitle: "Comunicación efectiva",
      backDescription: "Me comunico claramente con equipos y clientes para asegurar que todos entendamos los objetivos",
    },
    {
      icon: Users,
      title: "Empatizando con los usuarios",
      description: "Entendiendo necesidades y expectativas",
      backIcon: UserCheck,
      backTitle: "Trabajo en equipo",
      backDescription: "Colaboro eficazmente con desarrolladores, diseñadores y stakeholders",
    },
    {
      icon: Lightbulb,
      title: "Ideando soluciones digitales",
      description: "Generando ideas innovadoras y creativas",
      backIcon: Wrench,
      backTitle: "Solución de problemas",
      backDescription: "Analizo desafíos técnicos y encuentro soluciones eficientes y creativas",
    },
    {
      icon: Sparkles,
      title: "Creando UI/UX responsivas y elegantes",
      description: "Diseñando interfaces intuitivas y atractivas",
      backIcon: Zap,
      backTitle: "Adaptación rápida",
      backDescription: "Aprendo nuevas tecnologías y me ajusto a diferentes metodologías de trabajo",
    },
    {
      icon: Boxes,
      title: "Construyendo Prototipos",
      description: "Desarrollando versiones funcionales",
      backIcon: Rocket,
      backTitle: "Innovación constante",
      backDescription: "Busco siempre nuevas formas de mejorar y optimizar mis desarrollos",
    },
    {
      icon: TestTube,
      title: "Probando y corrigiendo",
      description: "Asegurando calidad y rendimiento",
      backIcon: Languages,
      backTitle: "Mejorando mi inglés",
      backDescription: "Practico inglés a diario para comunicarme mejor en el ámbito internacional",
    },
  ]

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-24">
      <div className="w-full px-4 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mi Proceso</h2>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado para crear soluciones digitales excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const FrontIcon = step.icon
            const BackIcon = step.backIcon
            const isFlipped = flippedCards.includes(index)

            return (
              <div
                key={index}
                className="relative h-[150px] md:h-[220px] lg:h-48 cursor-pointer perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                    isFlipped ? "rotate-x-180" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front side */}
                  <div
                    className="absolute inset-0 backface-hidden flex items-start gap-2 md:gap-4 p-4 md:p-5 lg:p-6 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FrontIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xl md:text-xl font-bold text-primary mb-1">Paso {index + 1}</div>
                      <h3 className="text-base md:text-xl
                       lg:text-xl font-bold mb-1 text-balance leading-tight">{step.title}</h3>
                      <p className="text-sm md:text-base lg:text-xl text-muted-foreground leading-snug">{step.description}</p>
                    </div>
                  </div>

                  {/* Back side */}
                  <div
                    className="absolute inset-0 backface-hidden rotate-x-180 flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-lg bg-primary text-primary-foreground border-2 border-primary"
                    style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                      <BackIcon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-xl lg:text-xl font-bold mb-1 text-balance leading-tight">{step.backTitle}</h3>
                      <p className="text-sm md:text-base lg:text-xl opacity-90 leading-snug">{step.backDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
