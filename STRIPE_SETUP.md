# Stripe Subscription System - Setup Guide

## Sistema de Suscripciones con Stripe Checkout

Esta aplicación implementa un sistema completo de suscripciones mensuales usando Stripe Checkout, Next.js 13 (App Router) y Supabase.

## Características Implementadas

### Backend (Next.js API Routes)
- ✅ Endpoint `/api/create-checkout-session` - Crea sesiones de pago con Stripe
- ✅ Endpoint `/api/webhook` - Procesa eventos de Stripe (webhooks)
- ✅ Validación de datos del formulario
- ✅ Hashing de contraseñas con bcryptjs
- ✅ Integración con base de datos Supabase

### Base de Datos (Supabase)
- ✅ Tabla `subscription_users` - Almacena usuarios y estado de suscripción
- ✅ Tabla `subscription_payments` - Registra pagos y transacciones
- ✅ Row Level Security (RLS) configurado
- ✅ Políticas de seguridad implementadas

### Frontend
- ✅ Formulario de suscripción completo con validación
- ✅ Campos: nombres, apellidos, documento, país, edad, teléfono, dirección, email, contraseña, monto
- ✅ Página de éxito (`/suscripciones/success`)
- ✅ Página de cancelación (`/suscripciones/cancel`)
- ✅ Manejo de errores y estados de carga

## Variables de Entorno

Las siguientes variables ya están configuradas en `.env`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://zuisikodcviqmjrgmffe.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe
STRIPE_SECRET_KEY=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
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51SK0tdIUlX2ykqnUUJWuOpuiDpTLRlzdU2PH7cYVE5wsmi8XYb0hm9ZcaNXckK0LAbMjg3DAwLxs1V9dYg1MrsCB00SaIXEFky
STRIPE_WEBHOOK_SECRET=whsec_SP2oWIe4JKjPuKsA83a6dAKxnxmDkRdq
```

## Estructura de Archivos

```
/
├── app/
│   ├── api/
│   │   ├── create-checkout-session/
│   │   │   └── route.ts          # Crea sesiones de Stripe Checkout
│   │   └── webhook/
│   │       └── route.ts          # Procesa webhooks de Stripe
│   └── suscripciones/
│       ├── page.tsx              # Formulario de suscripción
│       ├── success/
│       │   └── page.tsx          # Página de éxito
│       └── cancel/
│           └── page.tsx          # Página de cancelación
├── lib/
│   └── supabase.ts               # Cliente de Supabase
├── supabase/
│   └── migrations/
│       └── create_subscription_tables.sql  # Esquema de base de datos
└── .env                          # Variables de entorno
```

## Flujo de Suscripción

1. **Usuario completa el formulario** en `/suscripciones`
   - Nombres, apellidos, documento, país, edad, teléfono, dirección
   - Email y contraseña (mínimo 8 caracteres)
   - Monto de suscripción mensual ($1 - $1000 USD)

2. **Se crea el usuario en Supabase**
   - Contraseña hasheada con bcryptjs
   - Estado inicial: `pending`

3. **Se crea la sesión de Stripe Checkout**
   - Suscripción mensual con precio dinámico
   - Metadata incluye toda la información del usuario

4. **Usuario completa el pago en Stripe**
   - Redirigido a checkout.stripe.com
   - Ingresa información de tarjeta

5. **Webhook de Stripe notifica el pago**
   - Evento `checkout.session.completed`
   - Actualiza estado del usuario a `active`
   - Registra el pago en la base de datos

6. **Usuario redirigido a página de éxito**
   - Confirmación visual del pago
   - Información sobre renovación mensual

## Configuración de Webhooks en Stripe

Para que los webhooks funcionen en producción:

1. Ve a [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
2. Haz clic en "Add endpoint"
3. URL del endpoint: `https://tu-dominio.com/api/webhook`
4. Selecciona estos eventos:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copia el "Signing secret" y actualiza `STRIPE_WEBHOOK_SECRET` en `.env`

## Pruebas Locales

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 3. Probar webhooks localmente con Stripe CLI

Instala Stripe CLI:
```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows/Linux
# Descarga desde https://stripe.com/docs/stripe-cli
```

Inicia sesión:
```bash
stripe login
```

Reenvía eventos a tu servidor local:
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copia el webhook signing secret que te muestra y actualízalo en `.env`:
```env
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 4. Probar el flujo completo

1. Ve a `http://localhost:3000/suscripciones`
2. Completa el formulario
3. Usa una tarjeta de prueba: `4242 4242 4242 4242`
4. Fecha: cualquier fecha futura
5. CVC: cualquier 3 dígitos

## Base de Datos - Esquema

### Tabla: subscription_users
- `id` - UUID primary key
- `name` - Nombre completo
- `email` - Email único
- `password_hash` - Contraseña hasheada
- `subscription_amount` - Monto en centavos ($1 = 100)
- `stripe_customer_id` - ID del cliente en Stripe
- `subscription_status` - pending, active, canceled, incomplete
- `created_at` - Fecha de creación
- `updated_at` - Última actualización

### Tabla: subscription_payments
- `id` - UUID primary key
- `user_id` - Referencia a subscription_users
- `stripe_session_id` - ID de sesión de Stripe
- `stripe_subscription_id` - ID de suscripción en Stripe
- `amount` - Monto en centavos
- `currency` - Moneda (usd)
- `status` - pending, completed, failed, refunded
- `created_at` - Fecha de creación

## Seguridad

✅ **Implementado:**
- Hashing de contraseñas con bcryptjs
- Row Level Security en Supabase
- Verificación de firma de webhooks
- Validación de datos en frontend y backend
- Montos limitados ($1 - $1000 USD)
- Políticas RLS restrictivas

## Gestión de Suscripciones

Los usuarios pueden gestionar sus suscripciones:
- Ver historial de pagos en Supabase
- Stripe maneja renovaciones automáticas
- Webhooks actualizan el estado en tiempo real
- Notificaciones de pago fallido vía Stripe

## Soporte

Para consultas sobre Stripe:
- [Documentación de Stripe](https://stripe.com/docs)
- [API de Stripe](https://stripe.com/docs/api)
- [Webhooks de Stripe](https://stripe.com/docs/webhooks)

Para consultas sobre Supabase:
- [Documentación de Supabase](https://supabase.com/docs)
- [RLS en Supabase](https://supabase.com/docs/guides/auth/row-level-security)
