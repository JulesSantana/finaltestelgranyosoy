'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Video, Heart, Star } from 'lucide-react';

export default function PilotosDeFormatoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4D03F' }}>
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
            }}>
              Episodio Piloto Promocional
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#1E4F8F' }}>
              ¡Sé parte de la historia de "Celebrando con Jesús"!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="mb-12" style={{ backgroundColor: '#1E4F8F' }}>
              <CardHeader>
                <CardTitle className="text-3xl text-center" style={{ color: '#F4D03F' }}>
                  Información del Piloto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4D03F40' }}>
                      <Calendar className="w-6 h-6" style={{ color: '#F4D03F' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#F4D03F' }}>
                        Fecha del Piloto
                      </p>
                      <p className="text-xl font-semibold text-white">
                        Viernes 7 de Noviembre
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4D03F40' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#F4D03F' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#F4D03F' }}>
                        Lugar
                      </p>
                      <p className="text-xl font-semibold text-white">
                        Complejo El Olivar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-white text-lg">
                  <p>
                    ¡La productora cristiana El Gran Yo Soy presenta su nuevo formato televisivo "Celebrando con Jesús"!
                  </p>
                  <p>
                    Buscamos suscriptores que quieran participar y beneficiarse de celebraciones gratuitas en bodas, cumpleaños u otras ocasiones especiales.
                  </p>
                  <p>
                    El ganador será seleccionado a partir del 7 de noviembre, y comenzaremos a grabar su historia o apoyarlo en aquello que necesite, corroborado por el equipo de producción de la productora y aprobado por la audiencia, para que su experiencia se haga manifiesta el 12 de diciembre.
                  </p>
                  <p className="font-semibold" style={{ color: '#F4D03F' }}>
                    ¡No pierdas la oportunidad de ser parte de una historia que inspira y une corazones!
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card style={{ backgroundColor: '#FFFFFF' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#F4D03F' }}>
                    <Users className="w-6 h-6" style={{ color: '#1E4F8F' }} />
                  </div>
                  <CardTitle className="text-center" style={{ color: '#1E4F8F' }}>
                    Para Suscriptores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">
                    Solo suscriptores activos pueden participar en el sorteo del episodio piloto
                  </p>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#FFFFFF' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#F4D03F' }}>
                    <Video className="w-6 h-6" style={{ color: '#1E4F8F' }} />
                  </div>
                  <CardTitle className="text-center" style={{ color: '#1E4F8F' }}>
                    Producción Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">
                    Tu celebración será grabada con equipos profesionales de alta calidad
                  </p>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#FFFFFF' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#F4D03F' }}>
                    <Heart className="w-6 h-6" style={{ color: '#1E4F8F' }} />
                  </div>
                  <CardTitle className="text-center" style={{ color: '#1E4F8F' }}>
                    100% Gratuito
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">
                    El ganador recibe todo el evento completamente gratis
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader>
                <CardTitle className="text-2xl text-center" style={{ color: '#1E4F8F' }}>
                  Cómo Participar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#F4D03F', color: '#1E4F8F' }}>
                      1
                    </span>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#1E4F8F' }}>Suscríbete</h3>
                      <p>Elige uno de nuestros planes de suscripción para ser elegible</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#F4D03F', color: '#1E4F8F' }}>
                      2
                    </span>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#1E4F8F' }}>Mantén tu Suscripción Activa</h3>
                      <p>Asegúrate de que tu suscripción esté activa antes del 7 de noviembre</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#F4D03F', color: '#1E4F8F' }}>
                      3
                    </span>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#1E4F8F' }}>Espera el Sorteo</h3>
                      <p>El ganador será anunciado y contactado el 7 de noviembre</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#F4D03F', color: '#1E4F8F' }}>
                      4
                    </span>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#1E4F8F' }}>¡Celebra!</h3>
                      <p>Tu evento será grabado y transmitido el 12 de diciembre</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link href="/suscripciones">
                <Button
                  size="lg"
                  className="text-xl px-12 py-6"
                  style={{ backgroundColor: '#1E4F8F', color: '#F4D03F' }}
                >
                  Ver Planes de Suscripción
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#1E4F8F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#F4D03F' }}>
              ¿Qué Incluye el Episodio Piloto?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-white text-lg">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#F4D03F' }} />
                <p className="text-left">Grabación profesional de todo el evento</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#F4D03F' }} />
                <p className="text-left">Edición y postproducción de alta calidad</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#F4D03F' }} />
                <p className="text-left">Difusión en redes sociales y plataformas digitales</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#F4D03F' }} />
                <p className="text-left">Recuerdo permanente de tu celebración especial</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
