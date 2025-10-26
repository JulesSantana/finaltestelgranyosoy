'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'price_basic',
    name: 'Plan Básico',
    price: '€9.99',
    interval: 'mes',
    features: [
      'Acceso a contenido exclusivo',
      'Participa en sorteos mensuales',
      'Descuentos en eventos especiales',
      'Comunidad de miembros'
    ]
  },
  {
    id: 'price_premium',
    name: 'Plan Premium',
    price: '€19.99',
    interval: 'mes',
    features: [
      'Todo lo del Plan Básico',
      'Acceso prioritario a sorteos',
      'Invitaciones VIP a eventos',
      'Merchandising exclusivo',
      'Consultas personalizadas'
    ],
    highlighted: true
  },
  {
    id: 'price_annual',
    name: 'Plan Anual',
    price: '€199.99',
    interval: 'año',
    features: [
      'Todo lo del Plan Premium',
      '2 meses gratis',
      'Acceso de por vida a eventos grabados',
      'Reconocimiento en créditos',
      'Asesoría espiritual mensual'
    ]
  }
];

export default function SuscripcionesPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    if (!user) {
      router.push('/login?redirect=/suscripciones');
      return;
    }

    setLoading(priceId);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          userId: user.id,
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        alert(error);
        return;
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar tu solicitud');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#F4D03F' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" style={{
            color: '#FFFFFF',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
          }}>
            Planes de Suscripción
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#1E4F8F' }}>
            Únete a nuestra comunidad y forma parte de algo especial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${plan.highlighted ? 'ring-4 ring-blue-600 scale-105' : ''}`}
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: '#1E4F8F' }}>
                    MÁS POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#1E4F8F' }}>
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold" style={{ color: '#1E4F8F' }}>{plan.price}</span>
                  <span className="text-gray-600">/{plan.interval}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1E4F8F' }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loading === plan.id}
                  className="w-full text-lg py-6"
                  style={{
                    backgroundColor: plan.highlighted ? '#1E4F8F' : '#F4D03F',
                    color: plan.highlighted ? '#FFFFFF' : '#1E4F8F'
                  }}
                >
                  {loading === plan.id ? 'Procesando...' : 'Suscribirse Ahora'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card style={{ backgroundColor: '#1E4F8F' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-center" style={{ color: '#F4D03F' }}>
                Preguntas Frecuentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white">
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#F4D03F' }}>¿Puedo cancelar en cualquier momento?</h3>
                <p>Sí, puedes cancelar tu suscripción en cualquier momento desde tu cuenta.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#F4D03F' }}>¿Cómo funciona el sorteo?</h3>
                <p>Cada mes realizamos un sorteo entre todos nuestros suscriptores activos. Los ganadores son contactados directamente.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#F4D03F' }}>¿Qué métodos de pago aceptan?</h3>
                <p>Aceptamos todas las tarjetas de crédito y débito principales a través de Stripe.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
