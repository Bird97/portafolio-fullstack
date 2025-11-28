import { render, screen } from "@testing-library/react"
import HeroSection from "@/components/hero-section"

describe("HeroSection", () => {
  it("renderiza el nombre completo", () => {
    render(<HeroSection />)
    expect(screen.getByText("Juan Camilo Pájaro Reyes")).toBeInTheDocument()
  })

  it("renderiza el título profesional", () => {
    render(<HeroSection />)
    expect(screen.getByText("Desarrollador Fullstack")).toBeInTheDocument()
  })

  it("renderiza la imagen del desarrollador", () => {
    render(<HeroSection />)
    const image = screen.getByAltText("Desarrollador trabajando")
    expect(image).toBeInTheDocument()
  })

  it("renderiza el botón de contacto", () => {
    render(<HeroSection />)
    const contactButton = screen.getByRole("link", { name: /contáctame/i })
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute("href", "#contacto")
  })

  it("renderiza el botón de ver proyectos", () => {
    render(<HeroSection />)
    const projectsButton = screen.getByRole("link", { name: /ver proyectos/i })
    expect(projectsButton).toBeInTheDocument()
    expect(projectsButton).toHaveAttribute("href", "#proyectos")
  })
})
