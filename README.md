# GRS – Gestión de Recursos Sustentables

Landing page corporativa para GRS, desarrollada con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- **Responsive Design**: Optimizado para móvil, tablet y desktop
- **Accesibilidad**: Cumple estándares WCAG AA
- **SEO Optimizado**: Meta tags y estructura semántica
- **Identidad Visual**: Colores y tipografía oficiales de GRS
- **Formulario de Contacto**: API funcional para envío de mensajes
- **Navegación Suave**: Scroll automático entre secciones

## 🎨 Identidad Visual

### Paleta de Colores
- **Gris**: #595959 (texto principal)
- **Azul**: #00089E (acento y confianza)
- **Verde**: #1D622E (sostenibilidad y CTAs)
- **Amarillo**: #E5BB06 (informativo)
- **Naranja**: #E15701 (advertencias)

### Tipografía
- **Familia**: Century Gothic
- **Fallback**: "Century Gothic", "URW Gothic", Avantgarde, "TeX Gyre Adventor", Arial, Verdana, sans-serif

## 🛠️ Tecnologías

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **ESLint**: Linting de código

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🚀 Deploy en Vercel

### Opción 1: Deploy automático desde GitHub

1. Sube el código a un repositorio de GitHub
2. Conecta tu cuenta de Vercel con GitHub
3. Importa el proyecto en Vercel
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configura las variables de entorno si es necesario
6. Haz clic en "Deploy"

### Opción 2: Deploy manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── api/contact/route.ts    # API para formulario de contacto
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página principal
├── components/
│   ├── Header.tsx            # Header con navegación
│   ├── Hero.tsx             # Sección principal
│   ├── Nosotros.tsx         # Sección nosotros
│   ├── Servicios.tsx        # Sección servicios
│   ├── CTA.tsx              # Call to action
│   ├── Contacto.tsx        # Formulario de contacto
│   └── Footer.tsx           # Footer
└── tailwind.config.ts       # Configuración de Tailwind
```

## 🎯 Secciones

1. **Header**: Navegación fija con logo
2. **Hero**: Título principal y botones CTA
3. **Nosotros**: Descripción institucional y métricas
4. **Servicios**: 4 bloques de servicios especializados
5. **CTA**: Llamada a la acción destacada
6. **Contacto**: Formulario funcional
7. **Footer**: Enlaces y información legal

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuración Adicional

### Variables de Entorno (Opcional)

Para configurar el envío de emails, crea un archivo `.env.local`:

```env
# Para SendGrid
SENDGRID_API_KEY=tu_api_key
SENDGRID_FROM_EMAIL=info@grs.com.ar

# Para Resend
RESEND_API_KEY=tu_api_key
```

### Personalización

- **Colores**: Modifica `tailwind.config.ts`
- **Tipografía**: Actualiza las fuentes en `globals.css`
- **Contenido**: Edita los componentes en `src/components/`

## 📞 Soporte

Para cualquier consulta sobre el desarrollo o deploy, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ para un futuro sostenible**