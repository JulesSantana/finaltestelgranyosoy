'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F4D03F' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl p-12 text-center relative overflow-hidden" style={{
            backgroundColor: '#1E4F8F',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(201, 169, 97, 0.3)'
          }}>
            <div className="absolute top-0 left-0 right-0 h-2" style={{
              background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 25%, #F4D03F 50%, #FFD700 75%, #D4AF37 100%)'
            }} />

            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 relative" style={{
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              boxShadow: '0 15px 40px rgba(239, 68, 68, 0.4)',
            }}>
              <div className="absolute inset-0 rounded-full" style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent)',
              }} />
              <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: '#FFFFFF' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: '#F4D03F',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              Suscripción Cancelada
            </h1>

            <p className="text-lg mb-6" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF', lineHeight: '1.7' }}>
              Has cancelado el proceso de suscripción a <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>"Celebrando con Jesús"</span>.
            </p>

            <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: 'rgba(244, 208, 63, 0.1)', border: '1px solid rgba(244, 208, 63, 0.3)' }}>
              <p className="text-base mb-2" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF', lineHeight: '1.7' }}>
                No se ha realizado ningún cargo a tu cuenta.
              </p>
              <p className="text-base" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF', lineHeight: '1.7' }}>
                Si deseas participar en el programa, puedes intentar suscribirte nuevamente en cualquier momento.
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/suscripciones">
                <Button
                  className="w-full py-3 text-lg font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #F4D03F 0%, #FFD700 100%)',
                    color: '#1E4F8F',
                    boxShadow: '0 10px 30px rgba(244, 208, 63, 0.3)',
                    fontFamily: 'system-ui, sans-serif',
                    border: 'none'
                  }}
                >
                  Intentar Nuevamente
                </Button>
              </Link>

              <Link href="/">
                <Button
                  className="w-full py-3 text-lg font-semibold rounded-xl transition-all"
                  style={{
                    background: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid #C9A961',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  Volver al Inicio
                </Button>
              </Link>

              <p className="text-sm mt-6" style={{ fontFamily: 'Georgia, serif', color: '#C9A961', fontStyle: 'italic' }}>
                Estamos aquí para ayudarte cuando estés listo para unirte
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
