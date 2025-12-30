"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"


export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData)
  }

  const WhatsAppIcon = () => (
    <Image
      src="/images/descarga.png"
      alt="WhatsApp"
      width={40}
      height={45}
    />
  );
  const socialLinks = [
    { icon: Mail, href: "mailto:juamacx@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/juan-camilo-p%C3%A1jaro-reyes/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Bird97", label: "GitHub" },
    { icon: WhatsAppIcon, href: "https://wa.me/+573122031791", label: "WhatsApp" },
  ]

  return (
    <section id="contacto" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground">
            Escríbeme a{" "}
            <a href="mailto:juamacx@gmail.com" className="text-primary hover:underline">
              juamacx@gmail.com
            </a>{" "}
            o contáctame a través de
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          

          <div className="space-y-5">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
                <div className="space-y-3 flex flex-col lg:flex-row">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-secondary transition-colors"
>
                        <Icon className="h-10 w-10 text-primary" />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-5">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Disponibilidad</h3>
                <p className="text-muted-foreground">
                  Actualmente disponible para proyectos freelance y oportunidades de colaboración. Respondo normalmente
                  en 24-48 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    </section>
  )
}
