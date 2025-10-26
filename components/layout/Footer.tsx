import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/celebrando-con-jesus', label: 'Celebrando con Jesús' },
  { href: '/pilotos-de-formato', label: 'Pilotos de Formato' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1E4F8F' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="group mb-6 inline-block">
              <div className="relative w-64 h-16 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(244,208,63,0.5)]">
                <Image
                  src="/image copy copy copy.png"
                  alt="EL GRAN YO SOY"
                  fill
                  className="object-contain object-left"
                  style={{
                    filter: 'brightness(1.1) contrast(1.05)'
                  }}
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4 mt-6" style={{ color: '#F4D03F' }}>
              Productora de contenido televisivo con reconocimiento internacional.
            </p>
            <p className="text-xs italic" style={{ color: '#F4D03F', opacity: 0.7 }}>
              En desarrollo — Próximamente más contenido
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4" style={{ color: '#F4D03F' }}>Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors text-sm"
                    style={{ color: '#F4D03F' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4" style={{ color: '#F4D03F' }}>Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#F4D03F' }} />
                <a href="mailto:Producciones@elgranyosoytv.com" className="hover:text-gold transition-colors break-all" style={{ color: '#F4D03F' }}>
                  Producciones@elgranyosoytv.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#F4D03F' }} />
                <a href="tel:+34910548550" className="hover:text-gold transition-colors" style={{ color: '#F4D03F' }}>
                  910 548 550
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#F4D03F' }} />
                <span style={{ color: '#F4D03F' }}>Avenida Rafael Alberti 16, local 18, 28038 Madrid, España</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Instagram className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#F4D03F' }} />
                <a href="https://www.instagram.com/Celebrando.conjesus" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" style={{ color: '#F4D03F' }}>
                  @Celebrando.conjesus
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: '#F4D03F' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm" style={{ color: '#F4D03F' }}>
              © {new Date().getFullYear()} EL GRAN YO SOY. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gold transition-colors text-sm" style={{ color: '#F4D03F' }}>
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-gold transition-colors text-sm" style={{ color: '#F4D03F' }}>
                Términos de Uso
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4 border-t" style={{ borderColor: '#F4D03F' }}>
            <div className="flex items-center gap-4">
              <span className="text-sm" style={{ color: '#F4D03F' }}>Diseñado por</span>
              <a
                href="mailto:luminaweb.design@gmail.com"
                className="relative w-48 h-16 block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(244,208,63,0.6)] cursor-pointer group"
              >
                <Image
                  src="/image0(20).jpeg"
                  alt="Lumina Web"
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-125"
                />
              </a>
              <a
                href="https://www.instagram.com/luminaweb.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" style={{ color: '#F4D03F' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
