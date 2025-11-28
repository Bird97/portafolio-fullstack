import { render, screen } from "@testing-library/react"
import ProjectsSection from "@/components/projects-section"

describe("ProjectsSection", () => {
  it("renderiza el título de la sección", () => {
    render(<ProjectsSection />)
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
  })

  it("renderiza el proyecto Ahumados al Barril", () => {
    render(<ProjectsSection />)
    expect(screen.getByText("Ahumados al Barril")).toBeInTheDocument()
    expect(screen.getByText(/programa de gestión integral para un restaurante/i)).toBeInTheDocument()
  })

  it("renderiza el proyecto Desref", () => {
    render(<ProjectsSection />)
    expect(screen.getByText("Desref - Sistema de Gestión de Libranzas")).toBeInTheDocument()
    expect(screen.getByText(/plataforma web integral para la administración de libranzas/i)).toBeInTheDocument()
  })

  it("muestra las tecnologías utilizadas en los proyectos", () => {
    render(<ProjectsSection />)
    expect(screen.getByText("Angular")).toBeInTheDocument()
    expect(screen.getByText("Node.js")).toBeInTheDocument()
    expect(screen.getByText("NestJS")).toBeInTheDocument()
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
  })

  it("renderiza las imágenes de los proyectos", () => {
    render(<ProjectsSection />)
    const images = screen.getAllByRole("img")
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
