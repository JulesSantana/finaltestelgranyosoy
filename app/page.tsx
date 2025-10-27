'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Video,
  Megaphone,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronDown,
  Globe,
  Users,
  FileText,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  const { t } = useLanguage();

  const olivarCarouselImages = [
    '/Imagen de WhatsApp 2025-10-26 a las 13.55.17_2ec5d865.jpg',
    '/Imagen de WhatsApp 2025-10-26 a las 13.26.36_e7d52cb9.jpg',
    '/Imagen de WhatsApp 2025-10-26 a las 13.54.46_a9cd3a68.jpg',
    '/Imagen de WhatsApp 2025-10-26 a las 13.55.46_2eacbcb6.jpg',
    '/Imagen de WhatsApp 2025-10-26 a las 13.59.33_766420ae.jpg',
    '/image copy.png',
    '/image copy copy.png',
  ];

  const services = [
    {
      name: 'Lumina Web',
      description: 'Diseñador Digital y Creador de Páginas Web',
      logo: '/lumina web.png'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4D03F' }}>
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-6 pt-8" style={{ backgroundColor: '#F4D03F' }}>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="mb-6 text-center">
              <style jsx>{`
                @keyframes shimmer {
                  0% {
                    background-position: -200% center;
                  }
                  100% {
                    background-position: 200% center;
                  }
                }

                .elegant-title {
                  animation: shimmer 3s linear infinite;
                  background: linear-gradient(
                    90deg,
                    #1E4F8F 0%,
                    #2563A8 25%,
                    #F4D03F 40%,
                    #FFD700 50%,
                    #F4D03F 60%,
                    #2563A8 75%,
                    #1E4F8F 100%
                  );
                  background-size: 200% auto;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  filter: drop-shadow(0 0 10px rgba(244, 208, 63, 0.5))
                          drop-shadow(0 0 20px rgba(244, 208, 63, 0.3))
                          drop-shadow(0 0 30px rgba(244, 208, 63, 0.2));
                }
              `}</style>
              <h1 className="elegant-title text-4xl md:text-5xl font-bold tracking-tight" style={{
                fontFamily: 'system-ui, sans-serif',
                padding: '8px 0',
                letterSpacing: '0.02em',
                fontStyle: 'italic',
                fontWeight: '900'
              }}>
                Celebrando con Jesús
              </h1>
            </div>
            <div className="relative rounded-lg overflow-hidden" style={{ backgroundColor: '#15304a', minHeight: '250px' }}>
              <div className="relative w-full h-full" style={{ paddingTop: '56.25%', minHeight: '250px' }}>
                <iframe
                  src="https://drive.google.com/file/d/1BuxjDPZex0fi-Di00wUgOZ7ty2s2s6zG/preview"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  style={{ border: 'none', minHeight: '250px' }}
                  title="Video Celebrando con Jesús"
                />
              </div>
            </div>
            <div className="mt-4 text-center space-y-4 px-2">
              <Link href="/suscripciones" className="block">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-50 rounded-full w-full max-w-md mx-auto px-6 py-6 text-sm sm:text-base font-semibold shadow-xl transition-all"
                  style={{ color: '#1e4f8f' }}
                >
                  MODO DE SUSCRIPCION
                </Button>
              </Link>
              <Link href="/celebrando-con-jesus" className="block">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-50 rounded-full w-full max-w-md mx-auto px-4 sm:px-6 py-6 text-xs sm:text-sm md:text-base font-semibold shadow-xl transition-all min-h-[56px] leading-tight"
                  style={{ color: '#1e4f8f' }}
                >
                  PREMIOS HASTA EL 7 DE NOVIEMBRE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">

            <div className="flex flex-col">
              <div className="text-center mb-6">
                <style jsx>{`
                  @keyframes shimmer-blue {
                    0% {
                      background-position: -200% center;
                    }
                    100% {
                      background-position: 200% center;
                    }
                  }

                  .shiny-blue-text {
                    animation: shimmer-blue 3s linear infinite;
                    background: linear-gradient(
                      90deg,
                      #1E4F8F 0%,
                      #2563A8 25%,
                      #3B82F6 40%,
                      #60A5FA 50%,
                      #3B82F6 60%,
                      #2563A8 75%,
                      #1E4F8F 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    filter: drop-shadow(0 0 10px rgba(30, 79, 143, 0.8))
                            drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))
                            drop-shadow(0 0 30px rgba(96, 165, 250, 0.4));
                  }
                `}</style>
                <p className="shiny-blue-text text-xl md:text-2xl font-bold tracking-wide px-2">
                  La sección que te conecta y premia en celebrando con Jesús
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6 text-center cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#1E4F8F' }} onClick={() => {
                  const modal = document.getElementById('streaming-modal');
                  if (modal) modal.style.display = 'flex';
                }}>Streaming</h3>
                <div className="relative rounded-lg overflow-hidden p-6 overflow-y-auto cursor-pointer hover:opacity-95 transition-opacity flex-grow" style={{ backgroundColor: '#15304a', minHeight: '450px' }} onClick={() => {
                  const modal = document.getElementById('streaming-modal');
                  if (modal) modal.style.display = 'flex';
                }}>
                  <div className="text-left text-white space-y-4">
                    <h2 className="text-lg font-bold text-center mb-3" style={{ color: '#F4D03F' }}>
                      BASES OFICIALES DE PARTICIPACIÓN
                    </h2>

                    <style jsx>{`
                      @keyframes shimmer-text {
                        0% {
                          background-position: -200% center;
                        }
                        100% {
                          background-position: 200% center;
                        }
                      }

                      .shining-text {
                        animation: shimmer-text 3s linear infinite;
                        background: linear-gradient(
                          90deg,
                          #F4D03F 0%,
                          #FFD700 25%,
                          #FFFFFF 40%,
                          #FFD700 60%,
                          #F4D03F 100%
                        );
                        background-size: 200% auto;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        filter: drop-shadow(0 0 8px rgba(244, 208, 63, 0.8))
                                drop-shadow(0 0 16px rgba(255, 215, 0, 0.6))
                                drop-shadow(0 0 24px rgba(255, 255, 255, 0.4));
                      }
                    `}</style>
                    <p className="shining-text text-sm text-center mb-4 font-semibold">
                      Programa: "Celebrando con Jesús" – Sección: "Si me ves, ganas"
                    </p>

                    <div className="space-y-3 text-sm leading-relaxed">
                      <div>
                        <h3 className="font-bold mb-1 text-sm" style={{ color: '#F4D03F' }}>1. Objeto</h3>
                        <p className="text-[12px] leading-relaxed">El presente documento establece las normas que regulan la participación de concursantes en la sección "Si me ves, ganas", dentro del formato televisivo "Celebrando con Jesús".</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-1 text-sm" style={{ color: '#F4D03F' }}>2. Selección de concursantes</h3>
                        <p className="text-[12px] leading-relaxed mb-1">2.1. Los concursantes deberán visualizar el streaming "Si me ves, ganas", emitido al finalizar el programa televisivo principal.</p>
                        <p className="text-[12px] leading-relaxed mb-1">2.2. Durante la transmisión, se realizará un sorteo ("el bombo") mediante el cual se seleccionará al concursante ganador.</p>
                        <p className="text-[12px] leading-relaxed">2.3. El participante seleccionado deberá responder la videollamada. En caso de no contestar, perderá su oportunidad.</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-1 text-sm" style={{ color: '#F4D03F' }}>3. Obligaciones del concursante</h3>
                        <p className="text-[12px] leading-relaxed">3.1. Los concursantes deberán exponer su testimonio personal, compartiendo cómo Dios ha obrado en su vida.</p>
                      </div>

                      <div>
                        <h3 className="font-bold mb-1 text-sm" style={{ color: '#F4D03F' }}>4. Producción del evento</h3>
                        <p className="text-[12px] leading-relaxed">El equipo de producción se desplazará hasta el país de residencia del ganador para llevar a cabo el evento.</p>
                      </div>

                      <div className="text-center pt-2">
                        <p className="text-sm italic" style={{ color: '#F4D03F' }}>
                          Haz clic para ver las bases completas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full" style={{ minHeight: '600px' }}>
              <div className="relative bg-transparent animate-fade-in-up hover:scale-105 transition-all duration-500 group">
                <Image
                  src="/image.png"
                  alt="El Gran Yo Soy"
                  width={400}
                  height={64}
                  className="object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(30,79,143,0.6)]"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 4px 12px rgba(30,79,143,0.3))'
                  }}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-center mb-6">
                <style jsx>{`
                  @keyframes shimmer-blue-needs {
                    0% {
                      background-position: -200% center;
                    }
                    100% {
                      background-position: 200% center;
                    }
                  }

                  .shiny-blue-text-needs {
                    animation: shimmer-blue-needs 3s linear infinite;
                    background: linear-gradient(
                      90deg,
                      #1E4F8F 0%,
                      #2563A8 25%,
                      #3B82F6 40%,
                      #60A5FA 50%,
                      #3B82F6 60%,
                      #2563A8 75%,
                      #1E4F8F 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    filter: drop-shadow(0 0 10px rgba(30, 79, 143, 0.8))
                            drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))
                            drop-shadow(0 0 30px rgba(96, 165, 250, 0.4));
                  }
                `}</style>
                <p className="shiny-blue-text-needs text-xl md:text-2xl font-bold tracking-wide px-2">
                  No importa dónde estés, esta sección es parte del programa Celebrando con Jesús. Siempre a tu lado, para ayudarte cuando y donde lo necesites
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6 text-center cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#1E4F8F' }} onClick={() => {
                  const modal = document.getElementById('necesidades-modal');
                  if (modal) modal.style.display = 'flex';
                }}>Necesidades</h3>
                <div className="relative rounded-lg overflow-hidden p-6 overflow-y-auto cursor-pointer hover:opacity-95 transition-opacity flex-grow" style={{ backgroundColor: '#15304a', minHeight: '450px' }} onClick={() => {
                  const modal = document.getElementById('necesidades-modal');
                  if (modal) modal.style.display = 'flex';
                }}>
                  <div className="text-left text-white space-y-4">
                    <p className="leading-relaxed text-[12px]">
                      Al final de cada emisión, se realizará un sorteo —mediante un bombo— para seleccionar a uno de los suscriptores.
                    </p>

                    <p className="leading-relaxed text-[12px]">
                      La persona elegida tendrá la oportunidad de compartir una petición relacionada con alguna área de su vida en la que necesite el favor y la ayuda de Dios.
                    </p>

                    <p className="leading-relaxed text-[12px]">
                      Como muestra del amor y la provisión divina, recibirá un bono de 50 mil euros, el cual no se entregará en efectivo, sino que será utilizado para cubrir directamente sus necesidades, conforme a lo que está escrito:
                    </p>

                    <p className="italic text-center text-sm" style={{ color: '#F4D03F' }}>
                      "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús."<br />
                      — Filipenses 4:19
                    </p>

                    <p className="leading-relaxed text-[12px]">
                      Si el suscriptor no llega a utilizar el bono adjudicado en su totalidad, podrá destinar el restante para bendecir a un amigo, familiar o prójimo que también esté pasando por un momento de necesidad.
                    </p>

                    <div className="space-y-2">
                      <p className="font-bold text-sm" style={{ color: '#F4D03F' }}>Categorías de Ayuda:</p>
                      <p className="text-[12px]">1. Salud • 2. Educación • 3. Vivienda</p>
                      <p className="text-[12px]">4. Emprendimiento • 5. Emergencias • 6. Otros motivos</p>
                    </div>

                    <div className="flex-grow flex items-center justify-center">
                      <p className="text-sm italic text-center" style={{ color: '#F4D03F' }}>
                        Haz clic para ver las bases completas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
              </div>
            </div>

          </div>
        </div>
      </section>

      <div id="streaming-modal" style={{ display: 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={(e) => {
        if (e.target === e.currentTarget) {
          const modal = document.getElementById('streaming-modal');
          if (modal) modal.style.display = 'none';
        }
      }}>
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => {
              const modal = document.getElementById('streaming-modal');
              if (modal) modal.style.display = 'none';
            }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: '#1E4F8F', fontSize: '24px', fontWeight: 'bold' }}
          >
            ×
          </button>
          <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#1E4F8F' }}>Streaming</h3>
          <div className="relative rounded-lg overflow-hidden p-12" style={{ backgroundColor: '#15304a' }}>
            <div className="text-left text-white space-y-8">
              <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#F4D03F' }}>
                BASES OFICIALES DE PARTICIPACIÓN
              </h2>

              <style jsx>{`
                @keyframes shimmer-text {
                  0% {
                    background-position: -200% center;
                  }
                  100% {
                    background-position: 200% center;
                  }
                }

                .shining-text {
                  animation: shimmer-text 3s linear infinite;
                  background: linear-gradient(
                    90deg,
                    #F4D03F 0%,
                    #FFD700 25%,
                    #FFFFFF 40%,
                    #FFD700 60%,
                    #F4D03F 100%
                  );
                  background-size: 200% auto;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  filter: drop-shadow(0 0 8px rgba(244, 208, 63, 0.8))
                          drop-shadow(0 0 16px rgba(255, 215, 0, 0.6))
                          drop-shadow(0 0 24px rgba(255, 255, 255, 0.4));
                }
              `}</style>
              <p className="shining-text text-lg text-center mb-8 font-semibold">
                Programa: "Celebrando con Jesús" – Sección: "Si me ves, ganas"
              </p>

              <div className="space-y-8 text-lg leading-relaxed">
                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>1. Objeto</h3>
                  <p>El presente documento establece las normas que regulan la participación de concursantes en la sección "Si me ves, ganas", dentro del formato televisivo "Celebrando con Jesús", así como los criterios de selección, obligaciones de los participantes y condiciones de remuneración.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>2. Selección de concursantes</h3>
                  <p className="mb-3">2.1. Los concursantes deberán visualizar el streaming "Si me ves, ganas", emitido al finalizar el programa televisivo principal.</p>
                  <p className="mb-3">2.2. Durante la transmisión, se realizará un sorteo ("el bombo") mediante el cual se seleccionará al concursante ganador para la realización gratuita de un evento especial o una petición de resoluciones de alguna necesidad imperativa (boda, quinceañero o cumpleaños), según se haya realizado en el piloto del programa.</p>
                  <p>2.3. El participante seleccionado deberá responder la videollamada realizada por el presentador. En caso de no contestar o rechazar la llamada, perderá automáticamente su oportunidad, siendo reemplazado por otro suscriptor.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>3. Obligaciones del concursante</h3>
                  <p className="mb-3">3.1. Los concursantes deberán exponer su testimonio personal, compartiendo cómo Dios ha obrado en su vida, con el objetivo de dar testimonio de las obras maravillosas del Señor.</p>
                  <p>3.2. La participación en la filmación del testimonio es obligatoria, incluso si el concursante no posee talento para el canto, ya que los adoradores de la productora interpretarán temas inéditos inspirados en su historia.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>4. Producción del evento y filmación</h3>
                  <p className="mb-3">4.1. El equipo de producción se desplazará hasta el país de residencia del ganador para llevar a cabo el evento correspondiente.</p>
                  <p>4.2. Posteriormente, se realizará la filmación del testimonio del concursante, quien recibirá una remuneración de cincuenta euros (50 €) por cada día de grabación.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>5. Evaluación y desarrollo de contenidos</h3>
                  <p>5.1. Los testimonios que obtengan un respaldo audiovisual significativo, alcanzando al menos 200 mil visualizaciones en un período de 15 días, podrán ser adaptados y producidos en formato de serie, conforme a la valoración y decisión de la productora.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>6. Aceptación de las bases</h3>
                  <p>La participación en la sección "Si me ves, ganas" implica la aceptación íntegra de estas bases, así como el cumplimiento de las indicaciones del equipo de producción, la autorización para filmación y la cesión de derechos de imagen según corresponda.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-xl" style={{ color: '#F4D03F' }}>Asistencia y Beneficiarios del Evento</h3>
                  <p className="mb-3">Para el piloto, contaremos con una afluencia inicial de 300 asistentes en el prestigioso Complejo El Olivar, creando un ambiente vibrante y lleno de vida.</p>
                  <p className="mb-3">Posteriormente, las cenas semanales estarán destinadas a 200 beneficiados, mientras que los 100 invitados restantes serán seleccionados por el suscriptor ganador, permitiéndole compartir su celebración con quienes él desee.</p>
                  <p className="mb-3">Si el suscriptor ganador opta por cubrir una necesidad especial, esta será cuidadosamente verificada y respaldada por el equipo de producción de EL GRAN YO SOY, asegurando que cada evento tenga un impacto real y significativo.</p>
                  <p>Es importante destacar que solo los suscriptores residentes en España podrán participar en la cena semanal, y la selección se realizará de manera transparente a través de la página web oficial de EL GRAN YO SOY.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="necesidades-modal" style={{ display: 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={(e) => {
        if (e.target === e.currentTarget) {
          const modal = document.getElementById('necesidades-modal');
          if (modal) modal.style.display = 'none';
        }
      }}>
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => {
              const modal = document.getElementById('necesidades-modal');
              if (modal) modal.style.display = 'none';
            }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: '#1E4F8F', fontSize: '24px', fontWeight: 'bold' }}
          >
            ×
          </button>
          <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#1E4F8F' }}>Necesidades</h3>
          <div className="relative rounded-lg overflow-hidden p-8" style={{ backgroundColor: '#15304a' }}>
            <div className="text-left text-white space-y-6">
              <p className="leading-relaxed text-base">
                Esta sección forma parte de la dinámica del formato "Celebrando con Jesús", un espacio donde la fe, la esperanza y el amor se hacen vida.
              </p>

              <p className="leading-relaxed text-base">
                Al final de cada emisión, se realizará un sorteo —mediante un bombo— para seleccionar a uno de los suscriptores.
              </p>

              <p className="leading-relaxed text-base">
                La persona elegida tendrá la oportunidad de compartir una petición relacionada con alguna área de su vida en la que necesite el favor y la ayuda de Dios.
              </p>

              <p className="leading-relaxed text-base">
                Como muestra del amor y la provisión divina, recibirá un bono de 50 mil euros, el cual no se entregará en efectivo, sino que será utilizado para cubrir directamente sus necesidades, conforme a lo que está escrito:
              </p>

              <p className="italic text-center text-base" style={{ color: '#F4D03F' }}>
                "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús."<br />
                — Filipenses 4:19
              </p>

              <p className="leading-relaxed text-base">
                Si el suscriptor no llega a utilizar el bono adjudicado en su totalidad, podrá destinar el restante para bendecir a un amigo, familiar o prójimo que también esté pasando por un momento de necesidad.
              </p>

              <p className="leading-relaxed text-base">
                De esta manera, la gracia recibida se convierte en un canal de bendición para otros, cumpliendo la enseñanza del Señor:
              </p>

              <p className="italic text-center text-base" style={{ color: '#F4D03F' }}>
                "Hay más dicha en dar que en recibir."<br />
                — Hechos 20:35
              </p>

              <p className="leading-relaxed text-base">
                Así, el espíritu de solidaridad y amor fraternal que inspira "Celebrando con Jesús" se extiende, recordándonos que somos instrumentos del amor de Dios en la tierra.
              </p>

              <h4 className="font-bold text-xl mt-8" style={{ color: '#F4D03F' }}>
                Categorías de Ayuda
              </h4>

              <p className="leading-relaxed text-base">
                El suscriptor seleccionado en la sección de "Necesidades" podrá elegir el tipo de ayuda que mejor se adapte a su situación, entre las siguientes categorías:
              </p>

              <div className="space-y-5">
                <div>
                  <p className="font-bold text-lg" style={{ color: '#F4D03F' }}>1. Salud</p>
                  <p className="text-base leading-relaxed">
                    Apoyo económico para tratamientos médicos, intervenciones quirúrgicas o gastos relacionados con la salud, tanto del suscriptor como de sus hijos (as), esposo(a), conviviente o familiares directos, ya sea en España o en cualquier parte del mundo, dado el carácter internacional del programa.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg" style={{ color: '#F4D03F' }}>2. Educación</p>
                  <p className="text-base leading-relaxed">
                    Asistencia para realizar estudios en España o en cualquier otro país, ya sea en universidades, escuelas técnicas o programas de posgrado, con el propósito de impulsar el desarrollo académico y profesional del mismo beneficiario, sus hijos (as), esposo(a), conviviente o familiares directos.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg" style={{ color: '#F4D03F' }}>3. Vivienda</p>
                  <p className="text-base leading-relaxed">
                    Apoyo para la renta o entrada de un piso (departamento), compra de enseres básicos o mejoras necesarias en el hogar del suscriptor o su familia, cuando la situación económica o de emergencia lo justifique.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg" style={{ color: '#F4D03F' }}>4. Emprendimiento y reinserción laboral</p>
                  <p className="text-base leading-relaxed">
                    Asistencia económica o formativa para iniciar un pequeño negocio, desarrollar un proyecto productivo o capacitarse en un oficio, con el fin de fomentar la autosuficiencia y el desarrollo laboral del beneficiario.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg" style={{ color: '#F4D03F' }}>5. Emergencias familiares o desastres naturales</p>
                  <p className="text-base leading-relaxed">
                    Apoyo destinado a casos de pérdida de vivienda, bienes o recursos a causa de incendios, inundaciones, terremotos u otras situaciones de crisis humanitaria o emergencia familiar.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg" style={{ color: '#F4D03F' }}>6. Otros motivos justificados</p>
                  <p className="text-base leading-relaxed">
                    Apoyo para salir del país de origen por razones médicas, humanitarias o de formación, así como para cubrir necesidades excepcionales debidamente comprobadas por nuestro equipo de producción EL GRAN YO SOY.
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-xl mt-8" style={{ color: '#F4D03F' }}>
                Cobertura del programa
              </h4>

              <p className="leading-relaxed text-base">
                El programa podrá otorgar una ayuda de hasta 50.000 euros (€) al suscriptor seleccionado, según la evaluación de su caso.
              </p>

              <p className="leading-relaxed text-base">
                Este monto podrá cubrir los siguientes conceptos:
              </p>

              <ul className="list-disc list-inside space-y-3 text-base">
                <li>Pasajes internacionales del suscriptor y, si aplica, de sus hijos o familiares que requieran tratamiento o acompañamiento.</li>
                <li>Alojamiento y estadía en un piso (departamento) durante el tiempo que dure el proceso de ayuda.</li>
                <li>Tratamientos médicos o procedimientos de salud.</li>
                <li>Gastos educativos o académicos, tanto en España como en cualquier parte del mundo.</li>
                <li>Entrada o alquiler de un piso, incluso si el beneficiario se encuentra en su país de origen, ya que el programa tiene alcance internacional.</li>
                <li>Gastos derivados de emergencias, reconstrucción o apoyo logístico para el restablecimiento familiar o personal.</li>
                <li>Materiales, herramientas o formación necesarios para iniciar un emprendimiento.</li>
              </ul>

              <h4 className="font-bold text-xl mt-8" style={{ color: '#F4D03F' }}>
                Carácter internacional
              </h4>

              <p className="leading-relaxed text-base">
                La sección "Necesidades" tiene un alcance global e internacional, lo que permite que los beneficiarios puedan recibir apoyo sin importar el país donde residan o deseen realizar sus estudios, tratamientos médicos o proyectos, siempre que cumplan con los requisitos establecidos.
              </p>

              <p className="leading-relaxed text-base">
                Nuestro deseo es que ningún suscriptor quede sin apoyo por razones de distancia o ubicación.
              </p>

              <h4 className="font-bold text-xl mt-8" style={{ color: '#F4D03F' }}>
                Propósito
              </h4>

              <p className="leading-relaxed text-base">
                EL GRAN YO SOY fundamenta esta iniciativa en el mover de la necesidad y la compasión cristiana, buscando que cada ayuda sea una manifestación viva del amor de Dios.
              </p>

              <p className="leading-relaxed text-base">
                Creemos firmemente que apoyar a nuestros suscriptores es sembrar esperanza, fe y transformación en las naciones, siendo instrumentos de bendición para quienes más lo necesitan.
              </p>

              <h4 className="font-bold text-xl mt-8" style={{ color: '#F4D03F' }}>
                Emisión y condiciones
              </h4>

              <p className="leading-relaxed text-base">
                La sección "Necesidades" se emitirá dos veces al mes dentro del formato "Celebrando con Jesús", alternándose con las secciones de bodas y cumpleaños, que también tendrán presencia en el programa dos veces al mes.
              </p>

              <p className="leading-relaxed text-base">
                El participante seleccionado deberá responder la videollamada realizada por el presentador. En caso de no contestar o rechazar la llamada, perderá automáticamente su oportunidad, siendo reemplazado por otro suscriptor.
              </p>

              <p className="leading-relaxed text-base">
                Por otro lado, en el caso de la ayuda correspondiente al monto máximo de 50.000 euros (€), no se entregará en efectivo.
              </p>

              <p className="leading-relaxed text-base">
                El suscriptor seleccionado deberá exponer su necesidad desde el primer momento de la videollamada, para que la Productora Cristiana EL GRAN YO SOY, junto con su equipo de producción, pueda verificar y gestionar directamente la cobertura de dicha necesidad.
              </p>

              <p className="leading-relaxed text-base">
                Si el suscriptor no llega a utilizar el bono adjudicado en su totalidad, podrá destinar el restante para bendecir a un amigo, familiar o prójimo que también esté pasando por un momento de necesidad.
              </p>

              <p className="leading-relaxed text-base">
                De esta manera, la gracia recibida se convierte en un canal de bendición para otros, cumpliendo la enseñanza del Señor.
              </p>

              <p className="italic text-center text-base" style={{ color: '#F4D03F' }}>
                "De gracia recibisteis, dad de gracia."<br />
                — Mateo 10:8
              </p>

              <p className="leading-relaxed text-base">
                Sigamos siendo instrumentos en las manos de Dios, multiplicando Su amor y extendiendo Su Reino a través de cada acción de generosidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
                color: '#FFFFFF',
                fontFamily: 'system-ui, sans-serif',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
              }}>
                ¿QUÉ ES CELEBRANDO CON JESÚS?
              </h2>
              <p className="text-lg mb-2" style={{ color: '#1E4F8F', fontFamily: 'system-ui, sans-serif' }}>
                Formato Televisivo Online Internacional
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-1" style={{ backgroundColor: '#f59e0b' }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#1E4F8F40' }}>
                <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#F4D03F' }}>
                  Descripción
                </h2>
                <p className="leading-relaxed mb-4 text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 'bold', textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)' }}>"Celebrando con Jesús"</span> no es solo un programa… ¡es una experiencia de fe, amor y esperanza que está transformando vidas en todo el mundo!
                </p>
                <p className="leading-relaxed mb-4 text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                  Este innovador formato televisivo internacional nace para honrar a Dios y bendecir a la comunidad cristiana, ofreciendo además la oportunidad de celebrar gratuitamente bodas, cumpleaños, quinceañeras y otras fechas especiales en un entorno cristiano.
                </p>
                <p className="leading-relaxed mb-4 text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                  Cada emisión se convierte en una auténtica fiesta espiritual, donde la adoración a nuestro Señor y los testimonios de Su poder se combinan para inspirar corazones, fortalecer la fe y demostrar que todo es posible cuando celebramos con Jesús.
                </p>
                <h3 className="text-2xl font-bold text-center mb-6 mt-8" style={{ color: '#F4D03F' }}>
                  Lugar de adoración y testimonio en celebrando con Jesús
                </h3>

                <div className="flex justify-center mb-6">
                  <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/Imagen de WhatsApp 2025-10-26 a las 13.26.36_26a29e8c.jpg"
                      alt="Lugar de adoración y testimonio"
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                </div>

                <div className="relative w-full mt-6 px-2 sm:px-0">
                  <style jsx>{`
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-10px); }
                    }
                    @keyframes pulse-glow {
                      0%, 100% {
                        box-shadow: 0 0 20px rgba(244, 208, 63, 0.4);
                      }
                      50% {
                        box-shadow: 0 0 30px rgba(244, 208, 63, 0.8);
                      }
                    }
                    @keyframes slide-in {
                      from {
                        opacity: 0;
                        transform: translateX(-20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                    .worship-card {
                      animation: slide-in 0.8s ease-out;
                    }
                    .worship-card:hover {
                      transform: translateY(-8px);
                      transition: all 0.4s ease;
                    }
                  `}</style>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="worship-card group relative overflow-hidden rounded-xl border-2"
                         style={{ borderColor: '#F4D03F', backgroundColor: '#15304a' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 z-10"></div>
                      <Image
                        src="/ADORACION copy.jpeg"
                        alt="Adoración en vivo"
                        width={400}
                        height={300}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                        <p className="text-white text-xs sm:text-sm font-semibold">Adoración en el Espíritu</p>
                      </div>
                    </div>

                    <div className="worship-card group relative overflow-hidden rounded-xl border-2"
                         style={{ borderColor: '#F4D03F', backgroundColor: '#15304a', animationDelay: '0.2s' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 z-10"></div>
                      <Image
                        src="/worship-includes-music-numerous-people-600nw-2327079459 copy.webp"
                        alt="Congregación adorando"
                        width={400}
                        height={300}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                        <p className="text-white text-xs sm:text-sm font-semibold">Unidos en Alabanza</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#1E4F8F40' }}>
                <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#F4D03F' }}>
                  Algunos de los platos a degustar en "Celebrando con Jesús"
                </h2>
                <p className="leading-relaxed mb-4 text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                  La productora del innovador formato televisivo online de carácter internacional <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>"Celebrando con Jesús"</span> ha confiado, desde sus inicios, en el Complejo El Olivar, un espacio que combina belleza, lujo y una propuesta culinaria de primer nivel.
                </p>
                <p className="leading-relaxed mb-4 text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                  Cada semana, los suscriptores agraciados en el sorteo podrán invitar a 100 amigos, familiares o conocidos, mientras que otros 200 suscriptores serán seleccionados por el programa. Todos ellos disfrutarán de un exquisito menú valorado en 100 euros, en un entorno diseñado para transmitir elegancia, armonía y la magnánima providencia de Dios.
                </p>
                <p className="leading-relaxed mb-6 text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                  Un lugar donde la celebración, la gastronomía y la espiritualidad se encuentran, creando momentos únicos e inolvidables que permanecerán en la memoria de cada participante.
                </p>

                <div className="mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {['/Imagen de WhatsApp 2025-10-26 a las 13.26.36_49918b58.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.35_08374622.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.35_bc961a07.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.35_e0bf5b7d.jpg'].map((img, idx) => (
                      <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow" onClick={() => {
                        const modal = document.getElementById('food-image-modal');
                        const modalImg = document.getElementById('food-modal-image') as HTMLImageElement;
                        if (modal && modalImg) {
                          modalImg.src = img;
                          modal.style.display = 'flex';
                        }
                      }}>
                        <Image
                          src={img}
                          alt={`Plato ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {['/Imagen de WhatsApp 2025-10-26 a las 13.26.35_0269e88e.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.35_d727a589.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.35_82cea2c8.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.34_eaa7e30f.jpg'].map((img, idx) => (
                      <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow" onClick={() => {
                        const modal = document.getElementById('food-image-modal');
                        const modalImg = document.getElementById('food-modal-image') as HTMLImageElement;
                        if (modal && modalImg) {
                          modalImg.src = img;
                          modal.style.display = 'flex';
                        }
                      }}>
                        <Image
                          src={img}
                          alt={`Plato ${idx + 5}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {['/Imagen de WhatsApp 2025-10-26 a las 13.26.34_c52b3398.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.34_01310777.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.34_b448b800.jpg', '/Imagen de WhatsApp 2025-10-26 a las 13.26.34_13b51e47.jpg'].map((img, idx) => (
                      <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow" onClick={() => {
                        const modal = document.getElementById('food-image-modal');
                        const modalImg = document.getElementById('food-modal-image') as HTMLImageElement;
                        if (modal && modalImg) {
                          modalImg.src = img;
                          modal.style.display = 'flex';
                        }
                      }}>
                        <Image
                          src={img}
                          alt={`Plato ${idx + 9}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <ImageCarousel images={olivarCarouselImages} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 md:p-12 shadow-xl" style={{ backgroundColor: '#1E4F8F' }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center" style={{ color: '#F4D03F' }}>
                Episodio Piloto Promocional
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4D03F40' }}>
                    <Calendar className="w-6 h-6" style={{ color: '#F4D03F' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#F4D03F' }}>
                      Fecha del Piloto
                    </p>
                    <p className="text-xl font-semibold" style={{ color: '#FFFFFF' }}>
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
                    <p className="text-xl font-semibold" style={{ color: '#FFFFFF' }}>
                      Complejo El Olivar
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#FFFFFF' }}>
                  ¡La productora cristiana El Gran Yo Soy presenta su nuevo formato televisivo "Celebrando con Jesús"!
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#FFFFFF' }}>
                  Buscamos suscriptores que quieran participar y beneficiarse de celebraciones gratuitas en bodas, cumpleaños u otras ocasiones especiales.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#FFFFFF' }}>
                  El ganador será seleccionado a partir del 7 de noviembre, y comenzaremos a grabar su historia o apoyarlo en aquello que necesite, corroborado por el equipo de producción de la productora y aprobado por la audiencia, para que su experiencia se haga manifiesta el 12 de diciembre.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
                  ¡No pierdas la oportunidad de ser parte de una historia que inspira y une corazones!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
            }}>
              Colaboradores
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#1E4F8F' }}></div>
            </div>
          </div>


          <div className="text-center mt-20 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
            }}>
              Publicidad
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#1E4F8F' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl p-12 md:p-16 shadow-xl" style={{ backgroundColor: '#1E4F8F' }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center" style={{ color: '#F4D03F' }}>
                Estrategia de Éxito
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-center" style={{ color: '#FFFFFF' }}>
                Combinamos creatividad, experiencia internacional y tecnología de vanguardia para desarrollar
                contenido que captura la atención de audiencias globales. Nuestra metodología probada garantiza
                resultados excepcionales en cada proyecto.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-center" style={{ color: '#FFFFFF' }}>
                Nuestra estrategia de éxito nace del deseo de generar un impacto real en la vida del creyente y no creyente. Este proyecto busca fortalecer la fe, inspirar esperanza y crear contenidos cristianos que edifiquen, transformen y conecten corazones.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-center" style={{ color: '#FFFFFF' }}>
                El episodio piloto promocional es una oportunidad para sembrar y evaluar el fruto de nuestro trabajo. A través de su difusión en redes sociales y su alcance en la comunidad cristiana y público en general, podremos confirmar que el formato responde a las expectativas y necesidades de una audiencia que anhela mensajes con propósito, antes de su lanzamiento oficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="food-image-modal" style={{ display: 'none', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '40px' }} onClick={(e) => {
        if (e.target === e.currentTarget) {
          const modal = document.getElementById('food-image-modal');
          if (modal) modal.style.display = 'none';
        }
      }}>
        <div className="relative max-w-xl w-full">
          <button
            onClick={() => {
              const modal = document.getElementById('food-image-modal');
              if (modal) modal.style.display = 'none';
            }}
            className="absolute -top-14 right-0 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: '#F4D03F', color: '#1E4F8F', fontSize: '28px', fontWeight: 'bold' }}
          >
            ×
          </button>
          <img
            id="food-modal-image"
            src=""
            alt="Plato en grande"
            className="w-full h-auto rounded-lg shadow-2xl"
            style={{ maxHeight: '60vh', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

    </div>
  );
}
