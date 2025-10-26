'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '/nosotros', label: t('nav.about') },
    { href: '/suscripciones', label: t('nav.subscriptions') },
    { href: '/pilotos-de-formato', label: t('nav.pilots') },
    { href: '/celebrando-con-jesus', label: t('nav.celebrating') },
    { href: '/contacto', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group -ml-4">
            <div className="relative h-16 flex-shrink-0" style={{ width: '400px' }}>
              <Image
                src="/Captura de pantalla 2025-10-25 154517.png"
                alt="EL GRAN YO SOY"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 ml-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-xs font-semibold tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? ''
                      : 'hover:opacity-70'
                  }`}
                  style={{ color: '#1e4f8f' }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder=""
                  className="w-48 h-9 pl-3 pr-10 rounded-full border-gray-300 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <X className="h-4 w-4" />
                </button>
                <button className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setLanguage('EN')}
                className={`text-xs font-semibold ${
                  language === 'EN' ? '' : 'opacity-40'
                }`}
                style={{ color: '#1e4f8f' }}
              >
                EN
              </button>
              <span style={{ color: '#1e4f8f', opacity: 0.4 }}>|</span>
              <button
                onClick={() => setLanguage('ES')}
                className={`text-xs font-semibold ${
                  language === 'ES' ? '' : 'opacity-40'
                }`}
                style={{ color: '#1e4f8f' }}
              >
                ES
              </button>
            </div>

            <Link href="/mi-cuenta" className="hidden lg:flex items-center gap-2 hover:opacity-70 transition-colors" style={{ color: '#1e4f8f' }}>
              <User className="h-5 w-5" />
              <span className="text-xs font-semibold">{t('nav.myAccount')}</span>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menú"
                  className="touch-manipulation min-h-[44px] min-w-[44px] h-11 w-11 md:h-10 md:w-10 rounded-lg hover:bg-navy/10 active:bg-navy/15 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                  style={{ color: '#1e4f8f' }}
                >
                  <Menu className="h-6 w-6 md:h-5 md:w-5" strokeWidth={2.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`px-4 py-3 text-base font-medium transition-colors rounded-xl ${
                          isActive
                            ? 'text-gold bg-navy/5'
                            : 'text-navy hover:text-gold hover:bg-navy/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="border-t pt-4 mt-4">
                    <Link href="/mi-cuenta" className="flex items-center gap-2 px-4 py-3 text-navy hover:bg-navy/5 rounded-xl" onClick={() => setIsOpen(false)}>
                      <User className="h-5 w-5" />
                      <span className="text-base font-medium">{t('nav.myAccount')}</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
