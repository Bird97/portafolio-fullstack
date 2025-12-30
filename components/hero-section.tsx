import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
      <div className="w-full px-4 md:px-8 mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-muted-foreground text-3xl md:text-5xl">Hola.</p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-balance">
              Yo soy <span className="text-primary text-5xl md:text-8xl">Juan</span>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/90">
              Desarrollador <span className="text-primary">Fullstack</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Mi nombre completo es Juan Camilo Pájaro Reyes, soy un joven apasionado por la tecnología, dedicado a
              crear experiencias digitales excepcionales que combinan diseño elegante y funcionalidad robusta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-lg md:text-2xl w-full sm:w-auto" asChild>
              <a href="#proyectos">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg md:text-2xl w-full sm:w-auto" asChild>
              <a href="#contacto">Contáctame</a>
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          <Image
            src="/images/imageonline-co-whitebackgroundremoved.png"
            alt="Desarrollador trabajando"
            width={500}
            height={500}
            className="object-contain animate-float"
            priority
          />
        </div>
      </div>
    </section>
  )
}
