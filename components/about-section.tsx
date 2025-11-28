"use client"

import { Code2, Palette, Zap, Coffee, PawPrint, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function AboutSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const features = [
    {
      icon: Code2,
      title: "¿Cómo lo hago?",
      description:
        "Utilizando las últimas tecnologías y mejores prácticas para crear soluciones escalables y mantenibles.",
      personalInfo: "Amo tomar café",
      personalIcon: Coffee,
    },
    {
      icon: Palette,
      title: "¿Qué hago?",
      description:
        "Me dedico a crear, mantener y optimizar sitios web, desarrollando Back-End y Front-End altamente funcionales, manejando distintos sistemas operativos y lenguajes de programación.",
      personalInfo: "Me gustan mucho las mascotas",
      personalIcon: PawPrint,
    },
    {
      icon: Zap,
      title: "¿Por qué lo hago?",
      description:
        "Porque creo en el poder de la tecnología para transformar ideas en realidades digitales que impactan positivamente a las personas.",
      personalInfo: "Me gusta mucho el fútbol",
      personalIcon: Trophy,
    },
  ]

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <section id="acerca" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transformando ideas en experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const PersonalIcon = feature.personalIcon
            const isFlipped = flippedCard === index

            return (
              <div
                key={index}
                className="relative h-[280px] cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <Card
                    className="absolute w-full h-full border-2 hover:border-primary/50 transition-all"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <CardContent className="pt-8 pb-8 text-center space-y-4 h-full flex flex-col justify-center">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-xl">{feature.description}</p>
                    </CardContent>
                  </Card>

                  <Card
                    className="absolute w-full h-full border-2 border-primary bg-primary/5"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <CardContent className="h-full flex flex-col items-center justify-center space-y-6 p-8">
                      <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                        <PersonalIcon className="h-10 w-10 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-center text-balance">{feature.personalInfo}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
