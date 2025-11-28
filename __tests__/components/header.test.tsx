import { render, screen } from "@testing-library/react"
import Header from "@/components/header"

describe("Header", () => {
  it("renderiza el logo correctamente", () => {
    render(<Header />)
    const logo = screen.getByText(/Juan/)
    expect(logo).toBeInTheDocument()
  })

  it("renderiza todos los enlaces de navegación", () => {
    render(<Header />)
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Acerca de mí")).toBeInTheDocument()
    expect(screen.getByText("Habilidades")).toBeInTheDocument()
    expect(screen.getByText("Proyectos")).toBeInTheDocument()
    expect(screen.getByText("Contacto")).toBeInTheDocument()
  })

  it("muestra el botón de menú móvil", () => {
    render(<Header />)
    const menuButton = screen.getByRole("button", { name: /menu/i })
    expect(menuButton).toBeInTheDocument()
  })
})
