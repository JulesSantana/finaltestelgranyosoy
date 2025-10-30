'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function Suscripciones() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    documento: '',
    pais: '',
    edad: '',
    direccion: '',
    telefono: '',
    email: '',
    password: '',
    amount: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testAPI = async () => {
    try {
      console.log('Testing API route...');
      const response = await fetch('/api/test');
      console.log('Test API status:', response.status);
      const data = await response.json();
      console.log('Test API response:', data);
      alert('API Test Success: ' + JSON.stringify(data));
    } catch (err) {
      console.error('Test API failed:', err);
      alert('API Test Failed: ' + err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (formData.password.length < 8) {
        throw new Error('La contraseña debe tener al menos 8 caracteres');
      }

      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount < 1 || amount > 1000) {
        throw new Error('El monto debe estar entre $1 y $1000 USD');
      }

      console.log('Calling edge function...');
      console.log('Current location:', window.location.href);

      const response = await supabase.functions.invoke('create-subscription', {
        body: {
          name: `${formData.nombres} ${formData.apellidos}`,
          email: formData.email,
          password: formData.password,
          amount: formData.amount,
          nombres: formData.nombres,
          apellidos: formData.apellidos,
          documento: formData.documento,
          pais: formData.pais,
          edad: formData.edad,
          telefono: formData.telefono,
          direccion: formData.direccion,
          origin: window.location.origin,
        }
      });

      console.log('Full response:', response);

      const { data, error: functionError } = response;

      console.log('=== DEBUG INFO ===');
      console.log('data:', data);
      console.log('functionError:', functionError);
      console.log('==================');

      if (functionError) {
        console.error('Function error details:', {
          message: functionError.message,
          context: (functionError as any).context,
          details: (functionError as any).details
        });

        if (data?.error) {
          console.error('Error from edge function:', data.error);
          throw new Error(data.error);
        }

        throw new Error(functionError.message || 'Error al procesar la suscripción');
      }

      console.log('Success response:', data);

      if (data?.error) {
        console.error('Data error:', data.error);
        throw new Error(data.error);
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No se recibió la URL de pago');
      }
    } catch (err: any) {
      setError(err.message || 'Error al procesar la suscripción. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4D03F' }}>
      <section className="py-12" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
                color: '#FFFFFF',
                fontFamily: 'system-ui, sans-serif',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
              }}>
                SUSCRIPCIONES
              </h2>
              <div className="flex justify-center">
                <div className="w-20 h-1" style={{ backgroundColor: '#f59e0b' }} />
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#C9A961' }}>
                <h2 className="text-2xl font-bold mb-5 text-center" style={{ color: '#F4D03F', fontFamily: 'system-ui, sans-serif' }}>
                  Participación Gratuita
                </h2>

                <div className="space-y-4 text-center">
                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Podrán participar en el formato televisivo <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>"Celebrando con Jesús"</span> de forma totalmente gratuita.
                  </p>

                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Asimismo, quienes lo deseen podrán aportar voluntariamente, según lo que disponga su corazón, aplicando la Palabra del Señor, que dice:
                  </p>

                  <blockquote className="text-base leading-relaxed italic mt-4 font-semibold" style={{ color: '#F4D03F', fontFamily: 'Georgia, serif', textShadow: '0 2px 4px rgba(244, 208, 63, 0.3)' }}>
                    "Porque Dios ama al dador alegre. Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra."
                  </blockquote>
                  <cite className="block text-base font-bold not-italic" style={{ color: '#F4D03F', fontFamily: 'system-ui, sans-serif' }}>
                    (2 Corintios 9:7-8)
                  </cite>

                  <p className="leading-relaxed mt-6" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Es muy importante suscribirte cada mes para poder participar en el programa y, en caso de resultar agraciado, beneficiarte de los premios que ofrecemos.
                  </p>

                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Recuerda que <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>cada mes puedes aportar la cantidad que tu corazón decida</span>.
                  </p>

                  <div className="rounded-lg p-6 my-6" style={{ backgroundColor: '#F4D03F', color: '#1E4F8F' }}>
                    <p className="font-semibold text-lg mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      Importante
                    </p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                      Si no realizas la suscripción mensualmente, la inscripción inicial quedará invalidada. Al final de cada mes, enviaremos un SMS a cada suscriptor para activar su renovación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden" style={{
                backgroundColor: '#1E4F8F',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(201, 169, 97, 0.3)'
              }}>
                <div className="absolute top-0 left-0 right-0 h-2" style={{
                  background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 25%, #F4D03F 50%, #FFD700 75%, #D4AF37 100%)'
                }} />

                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 relative" style={{
                    background: 'linear-gradient(135deg, #F4D03F 0%, #FFD700 100%)',
                    boxShadow: '0 15px 40px rgba(244, 208, 63, 0.4)',
                  }}>
                    <div className="absolute inset-0 rounded-full" style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent)',
                    }} />
                    <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#1E4F8F' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{
                    color: '#F4D03F',
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '-0.02em'
                  }}>
                    Formulario de Suscripción
                  </h2>
                  <p className="text-lg" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF' }}>
                    Completa tus datos para unirte a <span style={{ color: '#F4D03F', fontWeight: '600' }}>Celebrando con Jesús</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        Nombres *
                      </label>
                      <Input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                        placeholder="Ingresa tus nombres"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        Apellidos *
                      </label>
                      <Input
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                        placeholder="Ingresa tus apellidos"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        Nº de Documento de Identificación *
                      </label>
                      <Input
                        type="text"
                        name="documento"
                        value={formData.documento}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                        placeholder="DNI, Pasaporte, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        País *
                      </label>
                      <Input
                        type="text"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                        placeholder="Tu país de residencia"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        Edad *
                      </label>
                      <Input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                        placeholder="Tu edad"
                        min="18"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'system-ui, sans-serif'
                        }}
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                      Dirección Completa *
                    </label>
                    <Input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                      style={{
                        borderColor: '#E5E7EB',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'system-ui, sans-serif'
                      }}
                      placeholder="Calle, número, ciudad, código postal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                      Correo Electrónico *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                      style={{
                        borderColor: '#E5E7EB',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'system-ui, sans-serif'
                      }}
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2.5" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                      Contraseña *
                    </label>
                    <Input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                      className="w-full px-4 py-3.5 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2"
                      style={{
                        borderColor: '#E5E7EB',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'system-ui, sans-serif'
                      }}
                      placeholder="Mínimo 8 caracteres"
                    />
                  </div>

                  <div className="border-t-2 pt-6 mt-6" style={{ borderColor: '#C9A961' }}>
                    <h3 className="text-xl font-bold mb-4 text-center" style={{
                      color: '#F4D03F',
                      fontFamily: 'system-ui, sans-serif'
                    }}>
                      Aporte Mensual *
                    </h3>
                    <p className="text-sm text-center mb-4" style={{ fontFamily: 'Georgia, serif', color: '#FFFFFF' }}>
                      Elige el monto mensual de suscripción (mínimo $1, máximo $1000 USD)
                    </p>
                    <div className="max-w-md mx-auto">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-semibold">$</span>
                        <Input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          required
                          min="1"
                          max="1000"
                          step="0.01"
                          className="w-full pl-10 pr-4 py-4 rounded-xl text-base transition-all duration-200 border-2 focus:ring-2 focus:ring-offset-2 text-center font-semibold"
                          style={{
                            borderColor: '#D4AF37',
                            backgroundColor: '#FFFEF7',
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '1.25rem'
                          }}
                          placeholder="0.00"
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-semibold">USD</span>
                      </div>
                      <p className="text-xs text-center mt-2" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                        El monto se convertirá automáticamente a tu moneda local
                      </p>
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-lg p-4 mt-4" style={{ backgroundColor: '#FEE2E2', borderLeft: '4px solid #DC2626' }}>
                      <p className="text-sm font-semibold" style={{ color: '#DC2626', fontFamily: 'system-ui, sans-serif' }}>
                        {error}
                      </p>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 text-lg font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                      style={{
                        background: loading ? '#6B7280' : 'linear-gradient(135deg, #1E4F8F 0%, #3b82f6 100%)',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(30, 79, 143, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'system-ui, sans-serif',
                        border: 'none'
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Procesando...
                        </span>
                      ) : (
                        <span className="relative z-10">Continuar al Pago Seguro</span>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-center mt-6" style={{ fontFamily: 'system-ui, sans-serif', color: '#FFFFFF' }}>
                    * Todos los campos son obligatorios
                  </p>
                </form>
              </div>

              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#C9A961' }}>
                <h2 className="text-2xl font-bold mb-5 text-center" style={{ color: '#F4D03F', fontFamily: 'system-ui, sans-serif' }}>
                  Política de Suscripción y Ajuste de Moneda
                </h2>

                <div className="space-y-4 text-center">
                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    La fase de suscripción inicia el <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>jueves 23 de octubre</span> y se extenderá hasta el <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>12 de diciembre</span>. Todos pueden unirse al innovador formato televisivo internacional "Celebrando con Jesús\" de manera gratuita.
                  </p>

                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Quienes deseen apoyar el proyecto podrán hacerlo voluntariamente en el momento de la suscripción, con la contribución que proponga su corazón.
                  </p>

                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    El programa incluye la sección <span style={{ color: '#F4D03F', fontWeight: 'bold' }}>"NECESIDADES"</span>, destinada a identificar y atender las situaciones más urgentes de la comunidad, ofreciendo apoyo, inspiración y soluciones a quienes más lo requieren.
                  </p>

                  <p className="leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Para participantes internacionales, se aplicarán ajustes de conversión según el tipo de cambio vigente, garantizando que el aporte se mantenga equivalente al valor original en España (EURO).
                  </p>

                  <p className="leading-relaxed font-semibold" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Con esta política se asegura transparencia, equidad y coherencia económica en todos los mercados, fomentando una comunidad unida por la fe, la generosidad y la excelencia televisiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
