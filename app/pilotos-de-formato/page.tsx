'use client';

export default function PilotosDeFormato() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4D03F' }}>
      <section className="py-12" style={{ backgroundColor: '#F4D03F' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
                color: '#FFFFFF',
                fontFamily: 'system-ui, sans-serif',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
              }}>
                PILOTOS DE FORMATO
              </h2>
              <div className="flex justify-center">
                <div className="w-20 h-1" style={{ backgroundColor: '#f59e0b' }} />
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#F4D03F' }}>
                <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#F4D03F', fontFamily: 'system-ui, sans-serif' }}>
                  Sobre Nuestros Pilotos de Formato
                </h2>

                <div className="space-y-5">
                  <p className="leading-relaxed text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Los pilotos de formato desarrollados por <span style={{ fontWeight: 'bold', color: '#F4D03F' }}>EL GRAN YO SOY</span> no son simples proyectos audiovisuales, sino instrumentos inspirados por Dios, concebidos para manifestar Su propósito y extender Su Palabra a través de los medios de comunicación.
                  </p>

                  <p className="leading-relaxed text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Estos formatos no constituyen productos finales destinados a su comercialización o emisión inmediata, sino que funcionan como expresiones conceptuales del mover de Dios, reflejando la esencia, dinámica y potencial de las futuras producciones que Él inspira en nuestra compañía.
                  </p>

                  <p className="leading-relaxed text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Cada proyecto se convierte en una semilla de visión divina, diseñada para proyectar la luz del Reino y servir como guía creativa y estratégica. A través de ellos, buscamos dimensionar el poder transformador de la Palabra de Dios, mostrando cómo Su mensaje puede impactar positivamente las vidas, las comunidades y la cultura contemporánea.
                  </p>

                  <p className="leading-relaxed text-center" style={{ color: '#FFFFFF', fontFamily: 'Georgia, serif', fontSize: '15px', lineHeight: '1.7' }}>
                    Entre los formatos presentados destacan <span style={{ fontWeight: 'bold', color: '#F4D03F' }}>"El Negociador de Trueques"</span> y <span style={{ fontWeight: 'bold', color: '#F4D03F' }}>"El Trabajo de tus Sueños"</span>, ejemplos del compromiso de nuestra productora con la innovación guiada por el Espíritu Santo, el propósito social y la difusión de los valores del Reino mediante la televisión moderna.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#F4D03F' }}>
                <h2 className="text-2xl font-bold mb-5 text-center" style={{ color: '#F4D03F', fontFamily: 'system-ui, sans-serif' }}>
                  El Negociador de Trueques
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-3xl" style={{ paddingBottom: '42.1875%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
                      <iframe
                        src="https://www.youtube.com/embed/1jZHzAV_Buc"
                        title="El Negociador de Trueques"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-10 border-2" style={{ backgroundColor: '#1E4F8F', borderColor: '#F4D03F' }}>
                <h2 className="text-2xl font-bold mb-5 text-center" style={{ color: '#F4D03F', fontFamily: 'system-ui, sans-serif' }}>
                  El Trabajo de tus Sueños
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-3xl" style={{ paddingBottom: '42.1875%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
                      <iframe
                        src="https://www.youtube.com/embed/uLSFFobx0H4"
                        title="El Trabajo de tus Sueños"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
