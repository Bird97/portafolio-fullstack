"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { notification } from "@/app/utils/notification"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    setIsAnimating(true)
    
    // Crear el efecto de círculo expandiéndose
    if (buttonRef.current) {
      const button = buttonRef.current
      const rect = button.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      // Crear elemento de animación
      const circle = document.createElement('div')
      circle.className = 'theme-transition-circle'
      circle.style.left = `${x}px`
      circle.style.top = `${y}px`
      
      // Determinar el color según el tema actual
      if (theme === 'dark') {
        circle.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0) 70%)'
      } else {
        circle.style.background = 'radial-gradient(circle, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 40%, rgba(15, 23, 42, 0) 70%)'
      }
      
      document.body.appendChild(circle)

      // Trigger animation
      requestAnimationFrame(() => {
        circle.style.transform = 'translate(-50%, -50%) scale(1)'
      })

      // Cambiar el tema después de un pequeño delay
      setTimeout(() => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        
        // Mostrar notificación según el tema
        if (newTheme === "dark") {
          notification("success", "¡Modo Oscuro Activado!")
          //
        } else {
          notification("success", "¡Modo Claro Activado!")
        }
      }, 200)

      // Remover el círculo después de la animación
      setTimeout(() => {
        circle.remove()
        setIsAnimating(false)
      }, 200)
    }
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <Sun className="h-12 w-12" />
      </Button>
    )
  }

  return (
    <>
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        onClick={handleThemeChange}
        className="relative overflow-visible"
        disabled={isAnimating}
      >
        <Sun className="h-12 w-12 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-12 w-12 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Cambiar tema</span>
      </Button>
      
      <style jsx global>{`
        .theme-transition-circle {
          position: fixed;
          width: 0;
          height: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .theme-transition-circle::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300vmax;
          height: 300vmax;
          background: inherit;
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}
