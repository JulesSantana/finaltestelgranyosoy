import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EL GRAN YO SOY — Productora de Contenido TV',
  description: 'Productora de contenido televisivo con reconocimiento internacional. Formatos innovadores y producción audiovisual de excelencia.',
  keywords: 'producción audiovisual, contenido televisivo, formatos internacionales, productora TV',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
