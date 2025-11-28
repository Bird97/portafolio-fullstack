import { Code2, Palette, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "¿Cómo lo hago?",
      description:
        "Utilizando las últimas tecnologías y mejores prácticas para crear soluciones escalables y mantenibles.",
    },
    {
      icon: Palette,
      title: "¿Qué hago?",
      description:
        "Me dedico a crear, mantener y optimizar sitios web, desarrollando Back-End y Front-End altamente funcionales, manejando distintos sistemas operativos y lenguajes de programación.",
    },
    {
      icon: Zap,
      title: "¿Por qué lo hago?",
      description:
        "Porque creo en el poder de la tecnología para transformar ideas en realidades digitales que impactan positivamente a las personas.",
    },
  ]

  return (
    <section id="acerca" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformando ideas en experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
