"use client"

import { Code2, Palette, Zap, Coffee, PawPrint, Trophy, Volleyball } from "lucide-react"
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
      personalInfo: "Me gusta mucho el fútbol y el voleibol",
      personalIcon: Volleyball,
    },
  ]

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <section id="acerca" className="py-24 bg-secondary/30">
      <div className="w-full px-4 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transformando ideas en experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const PersonalIcon = feature.personalIcon
            const isFlipped = flippedCard === index

            return (
              <div
                key={index}
                className="relative h-[270px] md:h-[320px] cursor-pointer"
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
                    className="absolute w-full h-full border-2 hover:border-primary/50 transition-all hover:scale-105 transition-transform duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <CardContent className="pt-6 pb-6 px-4 md:pt-8 md:pb-8 text-center space-y-3 md:space-y-4 h-full flex flex-col justify-center">
                      <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-3xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-xl">{feature.description}</p>
                    </CardContent>
                  </Card>

                  <Card
                    className="absolute w-full h-full border-2 border-primary bg-primary/5"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <CardContent className="h-full flex flex-col items-center justify-center space-y-4 md:space-y-6 p-6 md:p-8">
                      <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center">
                        <PersonalIcon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                      </div>
                      <p className="text-lg md:text-2xl font-bold text-center text-balance">{feature.personalInfo}</p>
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
