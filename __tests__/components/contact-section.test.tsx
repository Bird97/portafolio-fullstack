import { render, screen } from "@testing-library/react"
import ContactSection from "@/components/contact-section"

describe("ContactSection", () => {
  it("renderiza el título de la sección", () => {
    render(<ContactSection />)
    expect(screen.getByText("Contacto")).toBeInTheDocument()
  })

  it("renderiza el correo electrónico correcto", () => {
    render(<ContactSection />)
    expect(screen.getByText("juamacx@gmail.com")).toBeInTheDocument()
  })

  it("renderiza el formulario de contacto", () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument()
  })

  it("renderiza el botón de enviar", () => {
    render(<ContactSection />)
    const submitButton = screen.getByRole("button", { name: /enviar mensaje/i })
    expect(submitButton).toBeInTheDocument()
  })

  it("renderiza los enlaces a redes sociales", () => {
    render(<ContactSection />)
    const socialLinks = screen.getAllByRole("link")
    expect(socialLinks.length).toBeGreaterThan(0)
  })
})
