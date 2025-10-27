'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error('Por favor, completa todos los campos requeridos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, ingresa un correo electrónico válido');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');

      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-20" style={{ backgroundColor: '#F4D03F' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6" style={{ color: '#1E4F8F' }}>
              Contacto
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#1E4F8F' }}>
              Conversemos sobre tu próximo proyecto de contenido televisivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <div className="border rounded-2xl p-6 sm:p-8 shadow-sm mb-6 md:mb-8" style={{ backgroundColor: '#1E4F8F', borderColor: '#C9A961' }}>
                <h2 className="text-2xl font-heading font-semibold mb-6" style={{ color: '#F4D03F' }}>
                  Información de Contacto
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#F4D03F' }}>
                        Correo Electrónico
                      </p>
                      <a
                        href="https://www.instagram.com/Celebrando.conjesus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline break-all"
                        style={{ color: '#FFFFFF' }}
                      >
                        @Celebrando.conjesus
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#F4D03F' }}>
                        Teléfono
                      </p>
                      <a
                        href="tel:+34910548550"
                        className="hover:underline"
                        style={{ color: '#FFFFFF' }}
                      >
                        910 548 550
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#F4D03F' }}>
                        Dirección
                      </p>
                      <p style={{ color: '#FFFFFF' }}>
                        Avenida Rafael Alberti 16, local 18<br />
                        28038 Madrid, España
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="border rounded-2xl p-6 sm:p-8 shadow-sm" style={{ backgroundColor: '#1E4F8F', borderColor: '#C9A961' }}>
                <h2 className="text-2xl font-heading font-semibold mb-6" style={{ color: '#F4D03F' }}>
                  Envíanos un Mensaje
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="nombre" className="font-medium" style={{ color: '#FFFFFF' }}>
                      Nombre Completo <span style={{ color: '#F4D03F' }}>*</span>
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="mt-1.5 rounded-xl border-warm-border focus:border-gold focus:ring-gold min-h-[52px]"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-medium" style={{ color: '#FFFFFF' }}>
                      Correo Electrónico <span style={{ color: '#F4D03F' }}>*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1.5 rounded-xl border-warm-border focus:border-gold focus:ring-gold min-h-[52px]"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono" className="font-medium" style={{ color: '#FFFFFF' }}>
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="mt-1.5 rounded-xl border-warm-border focus:border-gold focus:ring-gold min-h-[52px]"
                      placeholder="+34 123 456 789"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mensaje" className="font-medium" style={{ color: '#FFFFFF' }}>
                      Mensaje <span style={{ color: '#F4D03F' }}>*</span>
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1.5 rounded-xl border-warm-border focus:border-gold focus:ring-gold resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-gradient text-navy hover:opacity-90 transition-all hover:shadow-lg rounded-2xl min-h-[56px] touch-manipulation"
                    size="lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl" style={{ backgroundColor: '#1E4F8F' }}>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6" style={{ color: '#F4D03F' }}>
              Oportunidades de Negocio
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: '#FFFFFF' }}>
              Estamos abiertos a colaboraciones estratégicas y proyectos innovadores.
              Si buscas una productora con experiencia internacional y visión creativa,
              conversemos sobre las posibilidades.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F4D03F' }} />
                <p style={{ color: '#FFFFFF' }}>
                  Desarrollo de formatos a medida para cadenas y plataformas
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F4D03F' }} />
                <p style={{ color: '#FFFFFF' }}>
                  Alianzas estratégicas para producción y distribución internacional
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#F4D03F' }} />
                <p style={{ color: '#FFFFFF' }}>
                  Branded content personalizado que conecta marcas con audiencias
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
