import { cn } from "@/lib/utils"

describe("Utils - cn function", () => {
  it("combina clases correctamente", () => {
    const result = cn("text-blue-500", "bg-white")
    expect(result).toContain("text-blue-500")
    expect(result).toContain("bg-white")
  })

  it("maneja clases condicionales", () => {
    const result = cn("base-class", true && "conditional-class", false && "excluded-class")
    expect(result).toContain("base-class")
    expect(result).toContain("conditional-class")
    expect(result).not.toContain("excluded-class")
  })

  it("resuelve conflictos de Tailwind correctamente", () => {
    const result = cn("p-4", "p-8")
    expect(result).toBe("p-8")
  })
})
