'use client';

import Link from 'next/link';
import { Calendar, MapPin, Video, Globe, Heart, Users, ChevronRight, UserPlus, FileText, CreditCard, DollarSign, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function CelebrandoConJesusPage() {
  return (
    <div className="min-h-screen py-12 md:py-20" style={{ backgroundColor: '#F4D03F' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-2" style={{
              color: '#FFFFFF',
              fontFamily: 'system-ui, sans-serif',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
            }}>
              PREMIOS
            </h1>
            <div className="flex justify-center">
              <div className="w-20 h-1" style={{ backgroundColor: '#f59e0b' }} />
            </div>
          </div>

          <div className="rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl mb-8 md:mb-12 relative overflow-hidden" style={{ backgroundColor: '#1E4F8F', border: '3px solid #D4AF6A' }}>
            <style jsx>{`
              @keyframes goldenRain {
                0% {
                  transform: translateY(-100%) rotate(0deg);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                90% {
                  opacity: 1;
                }
                100% {
                  transform: translateY(100vh) rotate(360deg);
                  opacity: 0;
                }
              }
              .golden-particle {
                position: absolute;
                width: 8px;
                height: 8px;
                background: radial-gradient(circle, #FFD700 0%, #FFA500 50%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: goldenRain linear infinite;
                box-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500;
              }
              .golden-particle:nth-child(1) { left: 5%; animation-duration: 8s; animation-delay: 0s; }
              .golden-particle:nth-child(2) { left: 15%; animation-duration: 10s; animation-delay: 2s; }
              .golden-particle:nth-child(3) { left: 25%; animation-duration: 9s; animation-delay: 4s; }
              .golden-particle:nth-child(4) { left: 35%; animation-duration: 11s; animation-delay: 1s; }
              .golden-particle:nth-child(5) { left: 45%; animation-duration: 8.5s; animation-delay: 3s; }
              .golden-particle:nth-child(6) { left: 55%; animation-duration: 10.5s; animation-delay: 0.5s; }
              .golden-particle:nth-child(7) { left: 65%; animation-duration: 9.5s; animation-delay: 2.5s; }
              .golden-particle:nth-child(8) { left: 75%; animation-duration: 11.5s; animation-delay: 1.5s; }
              .golden-particle:nth-child(9) { left: 85%; animation-duration: 8.8s; animation-delay: 3.5s; }
              .golden-particle:nth-child(10) { left: 95%; animation-duration: 10.2s; animation-delay: 0.8s; }

              @keyframes borderGlow {
                0%, 100% {
                  box-shadow:
                    0 0 10px rgba(244, 208, 63, 0.6),
                    0 0 20px rgba(244, 208, 63, 0.4),
                    inset 0 0 10px rgba(244, 208, 63, 0.2);
                }
                50% {
                  box-shadow:
                    0 0 20px rgba(244, 208, 63, 0.8),
                    0 0 40px rgba(244, 208, 63, 0.6),
                    inset 0 0 20px rgba(244, 208, 63, 0.3);
                }
              }

            `}</style>

            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>

            <div className="relative z-10">
              <div className="space-y-4 md:space-y-6 leading-relaxed text-center" style={{ color: '#FFFFFF' }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold px-2" style={{ color: '#F4D03F' }}>
                  ¡Regístrate y vive una experiencia única en Celebrando con Jesús!
                </h2>

                <p className="text-base md:text-lg px-2" style={{ color: '#FFFFFF' }}>
                  Con la bendición de Dios, agradecemos tu apoyo.
                </p>

                <p className="text-base md:text-lg px-2" style={{ color: '#FFFFFF' }}>
                  Los primeros <strong className="font-bold" style={{ color: '#F4D03F' }}>300 suscriptores</strong> recibirán una cena especial gratuita, en el estreno <strong style={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
                  }}>"Celebrando con Jesús"</strong>, el <strong className="font-bold" style={{ color: '#F4D03F' }}>viernes 7 de noviembre</strong>.
                </p>

                <p className="text-base md:text-lg px-2" style={{ color: '#FFFFFF' }}>
                  El <strong className="font-bold" style={{ color: '#F4D03F' }}>miércoles 5 de noviembre</strong> realizaremos un streaming en vivo, donde se seleccionarán 300 suscriptores, algunos serán de España y otros extranjeros no residentes en el país.
                </p>

                <p className="text-base md:text-lg px-2" style={{ color: '#FFFFFF' }}>
                  Si entre esos ganadores hay participantes internacionales (fuera de España), los <strong className="font-bold" style={{ color: '#F4D03F' }}>cinco primeros seleccionados</strong> recibirán un premio de <strong className="font-bold" style={{ color: '#F4D03F' }}>100 €</strong> cada uno.
                </p>

                <p className="text-base md:text-lg px-2" style={{ color: '#FFFFFF' }}>
                  Si tienes necesidades en salud, estudios u otras áreas, la Productora <strong className="font-bold" style={{ color: '#F4D03F' }}>EL GRAN YO SOY</strong> podrá cubrir hasta <strong className="font-bold" style={{ color: '#F4D03F' }}>50.000 €</strong>, según tu situación, el agraciado que resulte ganador tendrá que estar dispuesto para grabar su vida (Ver streaming).
                </p>

                <p className="text-base md:text-lg px-2" style={{ color: '#FFFFFF' }}>
                  Si el suscriptor no llega a utilizar el bono adjudicado en su totalidad, podrá destinar el restante para bendecir a un amigo, familiar o prójimo que también esté pasando por un momento de necesidad.
                </p>

                <p className="text-base md:text-lg italic px-2" style={{ color: '#FFFFFF' }}>
                  Sé un canal del amor de Cristo; cada ayuda lleva esperanza y es testimonio de Su fidelidad.
                </p>

                <p className="text-base md:text-lg italic px-2" style={{
                  color: '#F4D03F',
                  textShadow: '0 0 15px rgba(244, 208, 63, 0.8), 0 0 30px rgba(244, 208, 63, 0.6), 0 0 45px rgba(244, 208, 63, 0.4)',
                  fontWeight: '600'
                }}>
                  "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces" (Santiago 1:17).
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8 px-4">
            <Link href="/suscripciones">
              <Button
                size="lg"
                className="rounded-full px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold shadow-xl transition-all hover:opacity-90 min-h-[56px] w-full max-w-md mx-auto"
                style={{
                  backgroundColor: '#1e4f8f',
                  color: '#FFD700',
                  border: '3px solid #FFD700',
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3)'
                }}
              >
                SUSCRIBETE AHORA
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
