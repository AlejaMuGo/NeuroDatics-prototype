# NeuroDatics - Vista de Reportes

## 🎯 Descripción

Vista del módulo de Reportes para generar reportes en PDF de proyectos con datos de bioseñales.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build
```

Abrir en navegador: `http://localhost:5173/reportes`

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
│   └── reports/       # Vista de Reportes ⭐
└── widgets/shared/ui/
    ├── atoms/         # Componentes básicos
    ├── molecules/     # Componentes compuestos
    └── organisms/     # Componentes complejos
```

## 🎨 Componentes

### Atoms (5)
Icon, Button, Card, SelectTrigger, SelectOption

### Molecules (2)
ProjectSelect, EmptyState

### Organisms (3)
Header, ProjectSelectionCard, ReportsEmptyContainer

### Pages (4)
ReportsPage (completa), HomePage, ProjectsPage, DashboardPage

## 🎯 Rutas

- `/` - Inicio
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

✅ Diseño moderno y profesional
✅ Selección de proyectos con dropdown
✅ Estado vacío cuando no hay selección
✅ Arquitectura Atomic Design
✅ Feature-Sliced Design
✅ TypeScript estricto
✅ Animaciones suaves
✅ Logo NeuroDatics en header

## 🔄 Próximos Pasos

1. Implementar formulario de configuración del reporte
2. Integrar generación de PDF
3. Conectar con backend
4. Agregar validaciones
5. Implementar historial de reportes

## 📝 Notas

- **Sin Backend**: Funcionalidad frontend con datos mock
- **Datos Mock**: 3 proyectos de ejemplo
- **Build Time**: ~370ms
- **Bundle**: 13.52 kB CSS (3.50 kB gzipped)

---

**NeuroDatics** - Plataforma de análisis de bioseñales
