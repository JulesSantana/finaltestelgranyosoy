'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

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

            {loading ? (
              <div className="py-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 relative animate-pulse" style={{
                  background: 'linear-gradient(135deg, #F4D03F 0%, #FFD700 100%)',
                  boxShadow: '0 15px 40px rgba(244, 208, 63, 0.4)',
                }}>
                  <svg className="w-12 h-12 relative z-10 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#1E4F8F' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-xl" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                  Procesando tu suscripción...
                </p>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 relative" style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  boxShadow: '0 15px 40px rgba(16, 185, 129, 0.4)',
                }}>
                  <div className="absolute inset-0 rounded-full" style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent)',
                  }} />
                  <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: '#FFFFFF' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
                  color: '#F4D03F',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '-0.02em'
                }}>
                  Suscripción Exitosa
                </h1>

                <p className="text-lg mb-6" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF', lineHeight: '1.7' }}>
                  Tu suscripción a <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>"Celebrando con Jesús"</span> ha sido procesada exitosamente.
                </p>

                <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: 'rgba(244, 208, 63, 0.1)', border: '1px solid rgba(244, 208, 63, 0.3)' }}>
                  <p className="text-base mb-2" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF', lineHeight: '1.7' }}>
                    Recibirás un correo electrónico de confirmación con todos los detalles de tu suscripción.
                  </p>
                  <p className="text-base" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF', lineHeight: '1.7' }}>
                    Recuerda renovar tu suscripción cada mes para seguir participando en el programa.
                  </p>
                </div>

                {sessionId && (
                  <div className="mb-8">
                    <p className="text-sm" style={{ fontFamily: 'system-ui, sans-serif', color: '#C9A961' }}>
                      ID de Sesión: {sessionId.substring(0, 20)}...
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <Link href="/">
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
                      Volver al Inicio
                    </Button>
                  </Link>

                  <p className="text-sm" style={{ fontFamily: 'Georgia, serif', color: '#C9A961', fontStyle: 'italic' }}>
                    "Porque Dios ama al dador alegre" - 2 Corintios 9:7
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
