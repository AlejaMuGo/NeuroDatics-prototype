# NeuroDatics - Vista de Reportes

## 🎯 Descripción

Plataforma profesional para el análisis de bioseñales en neuromarketing. Incluye landing page completa y módulo de Reportes para generar reportes en PDF de proyectos con datos de sensores.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build
```

Abrir en navegador: `http://localhost:5173`

## 🏗 Stack Tecnológico

- **React 19** + **Vite 8**
- **TypeScript 5.9** (modo estricto)
- **TailwindCSS v3** + PostCSS
- **React Router DOM v7**
- **Fuente:** Poppins

## 📁 Estructura

```
src/
├── app/
│   ├── router/        # React Router
│   └── styles/        # Estilos globales + Tailwind
├── pages/
│   ├── home/          # Landing Page ⭐
│   └── reports/       # Vista de Reportes ⭐
└── widgets/
    ├── home/          # Componentes de landing
    └── shared/ui/     # Componentes compartidos
        ├── atoms/     # Componentes básicos
        ├── molecules/ # Componentes compuestos
        └── organisms/ # Componentes complejos
```

## 🎨 Componentes

### Landing Page (5 secciones)
HeroSection, FeaturesSection, HowItWorksSection, CTASection, Footer

### Atoms (7)
Icon, Button, Card, SelectTrigger, SelectOption, SensorBadge, Label

### Molecules (3)
ProjectSelect, EmptyState, RadioGroup

### Organisms (10)
Header, ProjectSelectionCard, ReportsEmptyContainer, SelectedProjectInfo, ReportConfigurationCard, ReportContentCard, ReportPreview, ExportOptionsCard

### Pages (4)
HomePage (landing completa) ⭐, ReportsPage (completa) ⭐, ProjectsPage, DashboardPage

## 🎯 Rutas

- `/` - **Landing Page** ✅
- `/proyectos` - Proyectos
- `/dashboard` - Dashboard
- `/reportes` - **Reportes** ✅

## 🎨 Sistema de Diseño

### Colores
- Grises: `bg-gray-50` a `gray-900`

### Tipografía
- Fuente: Poppins
- Título: `text-4xl font-semibold tracking-tight`
- Texto: `text-lg leading-relaxed`

### Efectos
- Bordes: `rounded-xl`
- Sombras: `shadow-sm`, `shadow-md`, `shadow-lg`
- Animaciones: `duration-200` - `duration-500`

## 🔧 Configuración Importante

### TailwindCSS
El proyecto usa **Tailwind v3** con PostCSS. Archivos clave:
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - PostCSS con Tailwind y Autoprefixer
- `src/app/styles/index.css` - Estilos globales

### Path Aliases
Configurado `@/` para imports desde `src/`:
```typescript
import { Header } from '@/widgets/shared/ui/organisms/Header';
```

## 📊 Características

### Landing Page
✅ Hero section con logo y video tutorial
✅ Sección de características (3 sensores)
✅ Sección "¿Cómo funciona?" (4 pasos)
✅ CTA final con botón de acción
✅ Footer minimalista

### Módulo de Reportes
✅ Selección de proyectos con sensores
✅ Configuración dinámica de reportes
✅ Selección de contenido con preview
✅ Opciones de exportación
✅ Generación de reportes PDF

### Arquitectura
✅ Atomic Design + Feature-Sliced
✅ TypeScript estricto
✅ Animaciones suaves
✅ Diseño responsive
✅ Paleta de grises elegante

## 🔄 Próximos Pasos

1. Implementar vista de Proyectos
2. Implementar vista de Dashboard
3. Integrar generación de PDF real
4. Conectar con backend
5. Agregar autenticación

## 📝 Notas

- **Sin Backend**: Funcionalidad frontend con datos mock
- **Datos Mock**: 3 proyectos de ejemplo
- **Build Time**: ~370ms
- **Bundle**: 13.52 kB CSS (3.50 kB gzipped)

---

**NeuroDatics** - Plataforma de análisis de bioseñales
