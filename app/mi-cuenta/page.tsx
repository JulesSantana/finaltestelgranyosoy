'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Video, Lock, LogOut, User } from 'lucide-react';

export default function MiCuentaPage() {
  const { user, loading, logout, isSubscribed, login } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);

    try {
      const result = await login(email, password);

      if (!result.success) {
        setError(result.error || 'Error al iniciar sesión. Verifica tu email y contraseña.');
      }
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F4D03F' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
          <p className="text-navy font-semibold">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen py-12" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
            }}>
              Mi Cuenta
            </h1>

            <Card className="border-2" style={{ borderColor: '#C9A961' }}>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-navy">
                  Iniciar Sesión
                </CardTitle>
                <p className="text-center text-sm text-navy/70 mt-2">
                  Ingresa con tu email y contraseña para acceder a tu contenido
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg text-sm text-red-600 bg-red-50 border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoggingIn}
                      className="border-2"
                      style={{ borderColor: '#C9A961' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-navy font-semibold">
                      Contraseña
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoggingIn}
                      minLength={8}
                      className="border-2"
                      style={{ borderColor: '#C9A961' }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white font-semibold py-6"
                    style={{ backgroundColor: '#1E4F8F' }}
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-navy/70 mb-3">
                    ¿No tienes una cuenta todavía?
                  </p>
                  <Button
                    onClick={() => router.push('/suscripciones')}
                    variant="outline"
                    className="w-full border-2 font-semibold"
                    style={{ borderColor: '#1E4F8F', color: '#1E4F8F' }}
                  >
                    Suscribirse Ahora
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-navy/80">
                Después de pagar tu suscripción, usa el email y contraseña que configuraste para acceder.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const subscribed = isSubscribed();

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#F4D03F' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{
                color: '#FFFFFF',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
              }}>
                Mi Cuenta
              </h1>
              <p className="text-lg" style={{ color: '#1E4F8F' }}>
                Bienvenido, {user.name}
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
              style={{ borderColor: '#1E4F8F', color: '#1E4F8F' }}
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2" style={{ borderColor: '#C9A961' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy">
                  <User className="h-5 w-5" />
                  Información
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Email:</span> {user.email}</p>
                  <p><span className="font-semibold">Estado:</span>{' '}
                    <span className={`font-bold ${subscribed ? 'text-green-600' : 'text-orange-600'}`}>
                      {subscribed ? 'Activo' : 'Pendiente'}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 md:col-span-2" style={{ borderColor: '#C9A961' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy">
                  <Video className="h-5 w-5" />
                  Estado de Suscripción
                </CardTitle>
              </CardHeader>
              <CardContent>
                {subscribed ? (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-green-800 font-semibold mb-2">
                      Tu suscripción está activa
                    </p>
                    <p className="text-sm text-green-700">
                      Tienes acceso completo a todos los videos y contenido exclusivo.
                    </p>
                    {user.current_period_end && (
                      <p className="text-xs text-green-600 mt-2">
                        Válido hasta: {new Date(user.current_period_end).toLocaleDateString('es-ES')}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                    <p className="text-orange-800 font-semibold mb-2">
                      Suscripción pendiente
                    </p>
                    <p className="text-sm text-orange-700 mb-3">
                      Necesitas una suscripción activa para acceder al contenido.
                    </p>
                    <Button
                      onClick={() => router.push('/suscripciones')}
                      className="bg-navy text-white hover:bg-navy/90"
                    >
                      Activar Suscripción
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="rounded-3xl p-10" style={{
            backgroundColor: '#1E4F8F',
            border: '2px solid #C9A961'
          }}>
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#F4D03F' }}>
              Videos Exclusivos
            </h2>

            {!subscribed ? (
              <div className="text-center py-16">
                <Lock className="h-20 w-20 mx-auto mb-6 text-white/30" />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Acceso Denegado
                </h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  Necesitas una suscripción activa para ver este contenido.
                  Suscríbete hoy para acceder a todos nuestros videos exclusivos.
                </p>
                <Button
                  onClick={() => router.push('/suscripciones')}
                  className="bg-white text-navy hover:bg-white/90 font-bold px-8 py-3"
                >
                  Ver Planes de Suscripción
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Celebración Especial - Enero 2025',
                    duration: '45:30',
                    thumbnail: '/image0(20).jpeg',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                  },
                  {
                    title: 'Testimonio de Fe - María García',
                    duration: '32:15',
                    thumbnail: '/image0(21).jpeg',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                  },
                  {
                    title: 'Adoración en Vivo',
                    duration: '1:02:45',
                    thumbnail: '/ADORACION.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                  },
                  {
                    title: 'Quinceañera con Jesús',
                    duration: '38:20',
                    thumbnail: '/adolescente-feliz-celebrando-su-decimoquinto-cumpleanos.jpg',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                  },
                  {
                    title: 'Boda Cristiana - Pedro y Ana',
                    duration: '55:10',
                    thumbnail: '/novias-pareja-corte-boda-torta.jpg',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                  },
                  {
                    title: 'Mensaje Inspirador',
                    duration: '28:45',
                    thumbnail: '/image0(24).jpeg',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                  }
                ].map((video, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer group">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-l-[20px] border-l-navy border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm text-navy line-clamp-2">
                        {video.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
