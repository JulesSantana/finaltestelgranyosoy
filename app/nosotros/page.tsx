import { Sparkles, Target, Users, Globe, Crown, Lightbulb, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#F4D03F' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{
              color: '#FFFFFF',
              fontFamily: 'system-ui, sans-serif',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)'
            }}>
              SOBRE NOSOTROS
            </h1>
            <div className="flex justify-center">
              <div className="w-20 h-1" style={{ backgroundColor: '#f59e0b' }} />
            </div>
          </div>

          <div className="border-2 rounded-3xl p-12 shadow-sm hover:shadow-md transition-all overflow-hidden relative mb-12" style={{ borderColor: '#15304A', backgroundColor: 'white', minHeight: '500px' }}>
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-3 opacity-50">
              <div className="relative h-full">
                <Image
                  src="/Material-audiovisual-para-producciones-profesionales copy.webp"
                  alt="Producción audiovisual"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative h-full">
                <Image
                  src="/camara.webp"
                  alt="Cámara de producción"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="relative z-10 p-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-6" style={{ color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
                Nuestro Origen
              </h2>
              <p className="leading-relaxed text-lg font-semibold" style={{ color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
                A raíz del piloto del formato TV <span className="font-bold" style={{ color: '#F4D03F', textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>"El negociador de trueques"</span>, creado por Allen Euclides (director general de la productora), y a causa del éxito internacional alcanzado por el formato antes mencionado, versionado por la reconocida productora estadounidense denominada <span className="font-bold">Brownstone Entertainment</span>, quien le adjudicó el título de <span className="font-bold" style={{ color: '#F4D03F', textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>"Los Reyes del trueque"</span>, surge la necesidad al creativo de constituir una productora de contenidos TV por la cual pueda dar rienda suelta a su fantasía creadora.
              </p>
            </div>
          </div>

          <div className="border-2 rounded-3xl p-10 shadow-sm hover:shadow-md transition-all mb-12" style={{ borderColor: '#C9A961', backgroundColor: '#1E4F8F' }}>
            <h2 className="text-2xl font-heading font-semibold mb-4" style={{ color: '#F4D03F' }}>
              Nuestra Visión
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: '#FFFFFF' }}>
              <p>
                <span className="font-bold" style={{ color: '#F4D03F' }}>EL GRAN YO SOY</span> es una productora cristiana de
                televisión inspirada por el Espíritu Santo, con la misión de llevar la Palabra de Dios a nuevos espacios
                y audiencias mediante formatos innovadores y de alto impacto.
              </p>
              <p>
                Nuestro propósito es ser luz en el mundo, utilizando los medios audiovisuales como una herramienta
                para transformar vidas, acompañar a quienes más lo necesitan y reflejar el amor de Cristo en cada
                producción.
              </p>
              <p>
                Creemos en una comunicación que trasciende lo religioso y que permite a todas las personas
                descubrir el poder del Evangelio en su forma más genuina y cercana.
              </p>
            </div>
          </div>

          <div className="border-2 rounded-3xl p-10 mb-12 shadow-sm" style={{ borderColor: '#C9A961', backgroundColor: '#1E4F8F' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: '#C9A961' }}>
                <Image
                  src="/image0(21).jpeg"
                  alt="Allen Euclides"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-2" style={{ color: '#F4D03F' }}>
                  Allen Euclides (nombre artístico de Euclides Allen Alberro)
                </h2>
                <p className="font-semibold mb-4" style={{ color: '#F4D03F' }}>
                  Pastor | Actor | Director | Guionista | Compositor | Productor y creador de formatos TV
                </p>
                <div className="space-y-6 leading-relaxed" style={{ color: '#FFFFFF' }}>
                  <p>
                    Allen Euclides ha desarrollado una destacada carrera artística desde los años 90. Comenzó como actor en Cuba en 1990 y en 1995 debutó como director artístico del grupo de teatro Arte Popular, bajo la dirección de Tito Junco Martínez. Su primera obra como director fue <em>El rey no ha muerto</em>, donde tuvo el honor de dirigir a la reconocida actriz Laura de la Uz.
                  </p>

                  <p>
                    Su versión de la obra <em>María Antonia</em> fue seleccionada entre las 10 mejores del Festival Internacional de Teatro de La Habana. En televisión, destacó con personajes populares en la emblemática serie cubana <em>Día y Noche</em>, como El Chacal, El Negrín y El Raterito.
                  </p>

                  <p>
                    Desde 1998 reside en España, donde ha continuado su carrera en cine, teatro y televisión.
                  </p>

                  <div className="space-y-3">
                    <p className="font-semibold text-lg" style={{ color: '#F4D03F' }}>
                      En cine, ha participado en películas como:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Flores de otro mundo (premiada en el Festival de Cannes)</li>
                      <li>Carne de gallina</li>
                      <li>Malas temporadas</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-lg" style={{ color: '#F4D03F' }}>
                      En televisión, ha trabajado en exitosas series como:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Un paso adelante</li>
                      <li>Los Serrano</li>
                      <li>Maresme (TV3 Catalunya)</li>
                      <li>Los Simuladores (Canal 4 – Mediaset)</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-lg" style={{ color: '#F4D03F' }}>
                      En teatro, ha participado en obras como:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li><em>Cacao</em>, producción de la prestigiosa compañía Dagoll Dagom, asociada al célebre grupo Tricicle, compartiendo escenario con artistas como Santiago Auserón y el recordado Pepe Rubianes.</li>
                      <li><em>Lulú</em>, producción del Teatro Nacional de Catalunya, dirigida por el renombrado Mario Gas.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-lg" style={{ color: '#F4D03F' }}>
                      Como director artístico y productor, ha trabajado en:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>La gira nacional del exitoso programa <em>Fama a Bailar</em>, dirigiendo a los reconocidos bailarines de sus primeras ediciones y a la popular Marbelys Zamora, en calidad de presentadora.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-lg" style={{ color: '#F4D03F' }}>
                      En el ámbito musical, es:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Compositor del tema <em>Habana</em>, interpretado por la cantante Lucrecia en su álbum <em>Mira las Luces</em> (Televisión Española).</li>
                      <li>Gracias a esta composición, firmó contrato con Warner Music Spain.</li>
                    </ul>
                  </div>

                  <p className="pt-4">
                    Actualmente es director de la productora de televisión cristiana <span className="font-bold" style={{ color: '#F4D03F' }}>El Gran Yo Soy</span>, donde lidera la creación del formato televisivo <span className="font-bold" style={{ color: '#F4D03F' }}>"Celebrando con Jesús"</span>, un proyecto que combina excelencia audiovisual con un mensaje de fe y esperanza.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
