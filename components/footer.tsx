export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto text-center">
        <p className="text-lg md:text-xl text-muted-foreground">
          © {currentYear} Reservados todos los derechos. Diseño, contenido y desarrollo por{" "}
          <span className="font-semibold text-foreground">Juan Camilo Pájaro Reyes</span>
        </p>
      </div>
    </footer>
  )
}
