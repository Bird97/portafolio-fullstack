import { render, screen, fireEvent } from "@testing-library/react"
import SkillsSection from "@/components/skills-section"

describe("SkillsSection", () => {
  it("renderiza el título de la sección", () => {
    render(<SkillsSection />)
    expect(screen.getByText("Habilidades")).toBeInTheDocument()
  })

  it("renderiza las tres pestañas de categorías", () => {
    render(<SkillsSection />)
    expect(screen.getByRole("tab", { name: "Front-End" })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Back-End" })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Otros" })).toBeInTheDocument()
  })

  it("muestra las habilidades de Front-End por defecto", () => {
    render(<SkillsSection />)
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Angular")).toBeInTheDocument()
  })

  it("cambia a habilidades de Back-End al hacer clic en la pestaña", () => {
    render(<SkillsSection />)
    const backendTab = screen.getByRole("tab", { name: "Back-End" })
    fireEvent.click(backendTab)

    expect(screen.getByText("Node.js")).toBeInTheDocument()
    expect(screen.getByText("NestJS")).toBeInTheDocument()
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument()
  })

  it("cambia a otras habilidades al hacer clic en la pestaña", () => {
    render(<SkillsSection />)
    const otrosTab = screen.getByRole("tab", { name: "Otros" })
    fireEvent.click(otrosTab)

    expect(screen.getByText("Git")).toBeInTheDocument()
    expect(screen.getByText("Docker")).toBeInTheDocument()
  })
})
