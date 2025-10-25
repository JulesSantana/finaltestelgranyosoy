'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'ES';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    // Header
    'nav.about': 'ABOUT US',
    'nav.subscriptions': 'SUBSCRIPTIONS',
    'nav.productions': 'PRODUCTIONS',
    'nav.pilots': 'FORMAT PILOTS',
    'nav.celebrating': 'AWARDS',
    'nav.contact': 'CONTACT',
    'nav.myAccount': 'MY ACCOUNT',

    // Hero Section
    'hero.title1': 'EXCELLENCE',
    'hero.title2': 'AUDIOVISUAL, FOR',
    'hero.title3': 'THE GLORY OF GOD',
    'hero.button': 'VIEW SUBSCRIPTIONS',

    // Subscription Section
    'subscription.title': 'Subscription Mode',
    'subscription.intro': 'The content available on this platform can be viewed for free. However, to actively participate in the television format "Celebrating with Jesus" and access the associated exclusive benefits, it will be required to subscribe to the channel by paying a monthly fee of 10 euros.',
    'subscription.policy.title': 'Subscription and Currency Adjustment Policy',
    'subscription.policy.p1': 'The subscription phase will begin on November 10 and will extend until December 12, giving those interested the opportunity to join the innovative television format "Celebrating with Jesus" from its official launch.',
    'subscription.policy.p2': 'The subscription value will be 10 euros per month, according to the currency in force in Spain. However, considering the international scope of the format, the corresponding conversion adjustments will be implemented, according to the exchange rate in force in each country.',
    'subscription.policy.p3': 'In this way, the final amount will be adapted to the local currency, guaranteeing economic equivalence with the value established in the country of origin of the format. This policy aims to ensure transparency, accessibility and economic coherence in all markets, maintaining a fair and competitive price structure globally.',
    'subscription.policy.p4': '"Celebrating with Jesus" thus reaffirms its commitment to international expansion, fostering a community united by faith, inspiration and television excellence.',

    // Company Section
    'company.name': 'THE GREAT I AM',
    'company.subtitle': 'Productora TV de contenido cristiano',
    'company.badge1': 'Audiovisual Production',
    'company.badge2': 'International Formats',
    'company.btn1': 'Discover Our Story',
    'company.btn2': 'View TV Format',

    // Format Section
    'format.title': 'Celebrating with Jesus',
    'format.subtitle': 'International Online Television Format',
    'format.section1.title': 'The Format',
    'format.section1.desc': 'An innovative program that combines celebration, faith and high-quality entertainment. Designed for online platforms with international reach, it offers meaningful content that connects with audiences of all ages.',
    'format.section2.title': 'El Olivar Complex',
    'format.section2.desc': 'Exclusive location that offers the perfect environment for production. A space that combines natural beauty with first-class facilities, creating the ideal setting for exceptional television content.',
    'format.advantages.title': 'Strategic Advantages',
    'format.advantage1.title': 'Versatility',
    'format.advantage1.desc': 'Adaptable spaces for multiple formats',
    'format.advantage2.title': 'Natural Beauty',
    'format.advantage2.desc': 'Visually striking environment',
    'format.advantage3.title': 'Proximity to Madrid',
    'format.advantage3.desc': 'Optimal logistical accessibility',
    'format.advantage4.title': 'World Paradigm',
    'format.advantage4.desc': 'Reference in television production',

    // Pilot Section
    'pilot.title': 'Promotional Pilot Episode',
    'pilot.date': 'Pilot Date',
    'pilot.dateValue': 'Friday, November 7',
    'pilot.location': 'Location',
    'pilot.locationValue': 'El Olivar Complex',
    'pilot.p1': 'The Christian production company The Great I Am presents its new television format "Celebrating with Jesus"!',
    'pilot.p2': 'We are looking for subscribers who want to participate and benefit from free celebrations at weddings, birthdays or other special occasions.',
    'pilot.p3': 'The winner will be selected starting November 7, and we will begin recording their story or supporting them in what they need, corroborated by the production company\'s production team and approved by the audience, so that their experience becomes manifest on December 12.',
    'pilot.p4': 'Don\'t miss the opportunity to be part of a story that inspires and unites hearts!',
    'pilot.mode': 'Subscription Mode',
    'pilot.footer': 'The pilot episode will showcase the full potential of the format, presenting all the elements that make this program a unique proposition in the international television landscape',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive audiovisual production and television content solutions',
    'service1.title': 'Audiovisual Production',
    'service1.desc': 'Creation of high-quality television content with professional equipment and exceptional creativity.',
    'service1.feat1': 'Complete program production',
    'service1.feat2': 'Creative and technical direction',
    'service1.feat3': 'Advanced post-production',
    'service2.title': 'Television Marketing',
    'service2.desc': 'Comprehensive strategies to maximize the reach and impact of your television content.',
    'service2.feat1': 'Audience analysis',
    'service2.feat2': 'Promotional campaigns',
    'service2.feat3': 'Distribution strategy',
    'service3.title': 'Branded Content',
    'service3.desc': 'Personalized content that connects brands with audiences naturally and effectively.',
    'service3.feat1': 'Organic brand integration',
    'service3.feat2': 'Attractive narratives',
    'service3.feat3': 'Impact measurement',
    'service4.title': 'Television Formats',
    'service4.desc': 'Development of innovative formats with potential for national and international success.',
    'service4.feat1': 'Creation of original concepts',
    'service4.feat2': 'Format adaptation',
    'service4.feat3': 'Creative consulting',
    'service5.title': 'Online Production',
    'service5.desc': 'Content optimized for digital platforms and streaming with global reach.',
    'service5.feat1': 'Web series and digital content',
    'service5.feat2': 'Multi-platform production',
    'service5.feat3': 'Strategic distribution',
    'service6.title': 'Creative Consulting',
    'service6.desc': 'Expert advice to develop and optimize television content projects.',
    'service6.feat1': 'Project development',
    'service6.feat2': 'Format optimization',
    'service6.feat3': 'Content strategy',

    // Strategy Section
    'strategy.title': 'Success Strategy',
    'strategy.p1': 'We combine creativity, international experience and cutting-edge technology to develop content that captures the attention of global audiences. Our proven methodology guarantees exceptional results in every project.',
    'strategy.p2': 'Our success strategy is born from the desire to generate a real impact on the life of the believer. This project seeks to strengthen faith, inspire hope and create Christian content that edifies, transforms and connects hearts.',
    'strategy.p3': 'The promotional pilot episode is an opportunity to sow and evaluate the fruit of our work. Through its dissemination on social networks and its reach in the Christian community, we will be able to confirm that the format responds to the expectations and needs of an audience that longs for messages with purpose, before its official launch.',

    // CTA Section
    'cta.title': 'Ready to create exceptional content?',
    'cta.subtitle': 'Discover how we can transform your vision into television reality',
    'cta.button': 'Contact Us',

    // Login Page
    'login.title': 'Sign In',
    'login.subtitle': 'Access your THE GREAT I AM account',
    'login.email': 'Email',
    'login.emailPlaceholder': 'your@email.com',
    'login.password': 'Password',
    'login.forgot': 'Forgot your password?',
    'login.button': 'Sign In',
    'login.noAccount': "Don't have an account? ",
    'login.register': 'Register',
  },
  ES: {
    // Header
    'nav.about': 'SOBRE NOSOTROS',
    'nav.subscriptions': 'SUSCRIPCIONES',
    'nav.productions': 'PRODUCCIONES',
    'nav.pilots': 'PILOTOS DE FORMATO',
    'nav.celebrating': 'PREMIOS',
    'nav.contact': 'CONTACTO',
    'nav.myAccount': 'MI CUENTA',

    // Hero Section
    'hero.title1': 'EXCELENCIA',
    'hero.title2': 'AUDIOVISUAL, PARA',
    'hero.title3': 'LA GLORIA DE DIOS',
    'hero.button': 'VER SUSCRIPCIONES',

    // Subscription Section
    'subscription.title': 'Modo de Suscripción',
    'subscription.intro': 'Los contenidos disponibles en esta plataforma podrán ser visualizados de manera gratuita. No obstante, para participar activamente en el formato televisivo "Celebrando con Jesús" y acceder a los beneficios exclusivos asociados, será requisito suscribirse al canal mediante el abono de una tarifa mensual de 10 euros.',
    'subscription.policy.title': 'Política de Suscripción y Ajuste de Moneda',
    'subscription.policy.p1': 'La fase de suscripción dará inicio el 10 de noviembre y se extenderá hasta el 12 de diciembre, brindando a los interesados la oportunidad de integrarse al innovador formato televisivo "Celebrando con Jesús" desde su lanzamiento oficial.',
    'subscription.policy.p2': 'El valor de la suscripción será de 10 euros mensuales, conforme a la moneda vigente en España. Sin embargo, considerando el alcance internacional del formato, se implementarán los ajustes de conversión correspondientes, de acuerdo con el tipo de cambio vigente en cada país.',
    'subscription.policy.p3': 'De esta forma, el monto final se adaptará a la moneda local, garantizando la equivalencia económica con el valor establecido en el país de origen del formato. Esta política tiene como objetivo asegurar la transparencia, accesibilidad y coherencia económica en todos los mercados, manteniendo una estructura de precios justa y competitiva a nivel global.',
    'subscription.policy.p4': '"Celebrando con Jesús" reafirma así su compromiso con la expansión internacional, fomentando una comunidad unida por la fe, la inspiración y la excelencia televisiva.',

    // Company Section
    'company.name': 'EL GRAN YO SOY',
    'company.subtitle': 'Productora TV de contenido cristiano',
    'company.badge1': 'Producción Audiovisual',
    'company.badge2': 'Formatos Internacionales',
    'company.btn1': 'Descubre Nuestra Historia',
    'company.btn2': 'Ver Formato TV',

    // Format Section
    'format.title': 'Celebrando con Jesús',
    'format.subtitle': 'Formato Televisivo Online Internacional',
    'format.section1.title': 'El Formato',
    'format.section1.desc': 'Un programa innovador que combina celebración, fe y entretenimiento de alta calidad. Diseñado para plataformas online con alcance internacional, ofrece contenido significativo que conecta con audiencias de todas las edades.',
    'format.section2.title': 'Complejo El Olivar',
    'format.section2.desc': 'Ubicación exclusiva que ofrece el entorno perfecto para la producción. Un espacio que combina belleza natural con instalaciones de primera clase, creando el ambiente ideal para contenido televisivo excepcional.',
    'format.advantages.title': 'Ventajas Estratégicas',
    'format.advantage1.title': 'Versatilidad',
    'format.advantage1.desc': 'Espacios adaptables para múltiples formatos',
    'format.advantage2.title': 'Belleza Natural',
    'format.advantage2.desc': 'Entorno visual impactante',
    'format.advantage3.title': 'Cercanía con Madrid',
    'format.advantage3.desc': 'Accesibilidad logística óptima',
    'format.advantage4.title': 'Paradigma Mundial',
    'format.advantage4.desc': 'Referencia en producción televisiva',

    // Pilot Section
    'pilot.title': 'Episodio Piloto Promocional',
    'pilot.date': 'Fecha del Piloto',
    'pilot.dateValue': 'Viernes 7 de Noviembre',
    'pilot.location': 'Lugar',
    'pilot.locationValue': 'Complejo El Olivar',
    'pilot.p1': '¡La productora cristiana El Gran Yo Soy presenta su nuevo formato televisivo "Celebrando con Jesús"!',
    'pilot.p2': 'Buscamos suscriptores que quieran participar y beneficiarse de celebraciones gratuitas en bodas, cumpleaños u otras ocasiones especiales.',
    'pilot.p3': 'El ganador será seleccionado a partir del 7 de noviembre, y comenzaremos a grabar su historia o apoyarlo en aquello que necesite, corroborado por el equipo de producción de la productora y aprobado por la audiencia, para que su experiencia se haga manifiesta el 12 de diciembre.',
    'pilot.p4': '¡No pierdas la oportunidad de ser parte de una historia que inspira y une corazones!',
    'pilot.mode': 'Modo de Suscripción',
    'pilot.footer': 'El episodio piloto mostrará el potencial completo del formato, presentando todos los elementos que hacen de este programa una propuesta única en el panorama televisivo internacional',

    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales de producción audiovisual y contenido televisivo',
    'service1.title': 'Producción Audiovisual',
    'service1.desc': 'Creación de contenido televisivo de alta calidad con equipos profesionales y creatividad excepcional.',
    'service1.feat1': 'Producción completa de programas',
    'service1.feat2': 'Dirección creativa y técnica',
    'service1.feat3': 'Post-producción avanzada',
    'service2.title': 'Marketing Televisivo',
    'service2.desc': 'Estrategias integrales para maximizar el alcance y el impacto de tu contenido televisivo.',
    'service2.feat1': 'Análisis de audiencias',
    'service2.feat2': 'Campañas de promoción',
    'service2.feat3': 'Estrategia de distribución',
    'service3.title': 'Branded Content',
    'service3.desc': 'Contenido personalizado que conecta marcas con audiencias de forma natural y efectiva.',
    'service3.feat1': 'Integración de marca orgánica',
    'service3.feat2': 'Narrativas atractivas',
    'service3.feat3': 'Medición de impacto',
    'service4.title': 'Formatos Televisivos',
    'service4.desc': 'Desarrollo de formatos innovadores con potencial de éxito nacional e internacional.',
    'service4.feat1': 'Creación de conceptos originales',
    'service4.feat2': 'Adaptación de formatos',
    'service4.feat3': 'Consultoría creativa',
    'service5.title': 'Producción Online',
    'service5.desc': 'Contenido optimizado para plataformas digitales y streaming con alcance global.',
    'service5.feat1': 'Series web y contenido digital',
    'service5.feat2': 'Producción multi-plataforma',
    'service5.feat3': 'Distribución estratégica',
    'service6.title': 'Consultoría Creativa',
    'service6.desc': 'Asesoramiento experto para desarrollar y optimizar proyectos de contenido televisivo.',
    'service6.feat1': 'Desarrollo de proyectos',
    'service6.feat2': 'Optimización de formatos',
    'service6.feat3': 'Estrategia de contenido',

    // Strategy Section
    'strategy.title': 'Estrategia de Éxito',
    'strategy.p1': 'Combinamos creatividad, experiencia internacional y tecnología de vanguardia para desarrollar contenido que captura la atención de audiencias globales. Nuestra metodología probada garantiza resultados excepcionales en cada proyecto.',
    'strategy.p2': 'Nuestra estrategia de éxito nace del deseo de generar un impacto real en la vida del creyente. Este proyecto busca fortalecer la fe, inspirar esperanza y crear contenidos cristianos que edifiquen, transformen y conecten corazones.',
    'strategy.p3': 'El episodio piloto promocional es una oportunidad para sembrar y evaluar el fruto de nuestro trabajo. A través de su difusión en redes sociales y su alcance en la comunidad cristiana, podremos confirmar que el formato responde a las expectativas y necesidades de una audiencia que anhela mensajes con propósito, antes de su lanzamiento oficial.',

    // CTA Section
    'cta.title': '¿Listo para crear contenido excepcional?',
    'cta.subtitle': 'Descubre cómo podemos transformar tu visión en realidad televisiva',
    'cta.button': 'Contacta con Nosotros',

    // Login Page
    'login.title': 'Iniciar Sesión',
    'login.subtitle': 'Accede a tu cuenta de EL GRAN YO SOY',
    'login.email': 'Correo Electrónico',
    'login.emailPlaceholder': 'tu@email.com',
    'login.password': 'Contraseña',
    'login.forgot': '¿Olvidaste tu contraseña?',
    'login.button': 'Iniciar Sesión',
    'login.noAccount': '¿No tienes cuenta? ',
    'login.register': 'Regístrate',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
