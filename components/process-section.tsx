import { Target, Users, Lightbulb, Sparkles, Boxes, TestTube } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Target,
      title: "Definiendo Objetivos Claros",
      description: "Estableciendo metas precisas y alcanzables",
    },
    {
      icon: Users,
      title: "Empatizando con los usuarios",
      description: "Entendiendo necesidades y expectativas",
    },
    {
      icon: Lightbulb,
      title: "Ideando soluciones digitales",
      description: "Generando ideas innovadoras y creativas",
    },
    {
      icon: Sparkles,
      title: "Creando UI/UX responsivas y elegantes",
      description: "Diseñando interfaces intuitivas y atractivas",
    },
    {
      icon: Boxes,
      title: "Construyendo Prototipos",
      description: "Desarrollando versiones funcionales",
    },
    {
      icon: TestTube,
      title: "Probando y corrigiendo",
      description: "Asegurando calidad y rendimiento",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mi Proceso</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado para crear soluciones digitales excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                <div className="flex items-start gap-4 p-6 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-2">Paso {index + 1}</div>
                    <h3 className="text-lg font-bold mb-2 text-balance">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
