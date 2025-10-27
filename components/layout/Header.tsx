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
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 md:h-24 items-center justify-between gap-3 md:gap-4">
          <Link href="/" className="flex items-center group flex-shrink-0 min-w-0">
            <div className="relative h-14 md:h-16 lg:h-18 w-48 sm:w-56 md:w-64 lg:w-72">
              <Image
                src="/Captura de pantalla 2025-10-25 154517.png"
                alt="EL GRAN YO SOY"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink min-w-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm xl:text-base font-semibold tracking-wide transition-colors whitespace-nowrap px-2 py-2 rounded-md ${
                    isActive
                      ? 'bg-[rgba(30,79,143,0.1)]'
                      : 'hover:opacity-70 hover:bg-[rgba(30,79,143,0.05)]'
                  }`}
                  style={{ color: '#1e4f8f' }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 xl:gap-4 flex-shrink-0">
            <div className="hidden xl:flex items-center gap-2">
              <div className="relative">
                <Input
                  type="search"
                  placeholder=""
                  className="w-32 h-9 pl-3 pr-10 rounded-full border-gray-300 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <X className="h-4 w-4" />
                </button>
                <button className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
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

            <Link href="/mi-cuenta" className="hidden lg:flex items-center gap-2 hover:opacity-70 transition-colors flex-shrink-0 px-4 py-3 rounded-lg" style={{ color: '#1e4f8f', backgroundColor: 'rgba(30, 79, 143, 0.05)' }}>
              <User className="h-5 w-5" />
              <span className="text-sm xl:text-base font-semibold whitespace-nowrap">MI CUENTA</span>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menú"
                  className="touch-manipulation min-h-[44px] min-w-[44px] h-11 w-11 rounded-lg hover:bg-navy/10 active:bg-navy/15 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                  style={{ color: '#1e4f8f' }}
                >
                  <Menu className="h-6 w-6" strokeWidth={2.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className="px-6 py-4 text-lg font-semibold transition-colors rounded-xl touch-manipulation hover:bg-gray-100"
                        style={{
                          color: '#1e4f8f',
                          backgroundColor: isActive ? 'rgba(30, 79, 143, 0.1)' : 'transparent'
                        }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="border-t pt-6 mt-4" style={{ borderColor: '#1e4f8f33' }}>
                    <Link
                      href="/mi-cuenta"
                      className="flex items-center gap-3 px-6 py-4 rounded-xl touch-manipulation hover:bg-gray-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                      style={{ color: '#1e4f8f' }}
                    >
                      <User className="h-6 w-6" />
                      <span className="text-lg font-semibold">{t('nav.myAccount')}</span>
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-4 mt-4">
                      <button
                        onClick={() => {
                          setLanguage('ES');
                          setIsOpen(false);
                        }}
                        className="text-lg font-semibold px-4 py-2 rounded-lg touch-manipulation hover:bg-gray-100 transition-colors"
                        style={{
                          color: '#1e4f8f',
                          backgroundColor: language === 'ES' ? 'rgba(30, 79, 143, 0.1)' : 'transparent',
                          opacity: language === 'ES' ? 1 : 0.5
                        }}
                      >
                        ES
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('EN');
                          setIsOpen(false);
                        }}
                        className="text-lg font-semibold px-4 py-2 rounded-lg touch-manipulation hover:bg-gray-100 transition-colors"
                        style={{
                          color: '#1e4f8f',
                          backgroundColor: language === 'EN' ? 'rgba(30, 79, 143, 0.1)' : 'transparent',
                          opacity: language === 'EN' ? 1 : 0.5
                        }}
                      >
                        EN
                      </button>
                    </div>
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
