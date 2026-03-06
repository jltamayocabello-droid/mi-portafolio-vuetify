<div align="center">

# 🚀 JT.DEV — Portafolio Web

### Jorge Tamayo — Desarrollador Front-End

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vuetify](https://img.shields.io/badge/Vuetify-3.x-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)
[![Pinia](https://img.shields.io/badge/Pinia-latest-FFE162?style=for-the-badge&logo=pinia&logoColor=black)](https://pinia.vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

🚀 [Portafolio](https://mi-portafolio-vuetify.vercel.app/) &nbsp;|&nbsp; 📂 [Repositorio](https://github.com/jltamayocabello-droid/mi-portafolio-vuetify) &nbsp;|&nbsp; 💼 [LinkedIn](https://www.linkedin.com/in/jorge-tamayo-c/)

</div>

<div align="center">

![Portfolio Preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ6dWF5dDZtdmRtbzZqeHJyNjZ5MXc3cWN5bHM2NzEydW95bGI0aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif)

</div>

---

## 📋 Concepto: The Digital Product

Este proyecto es una **Single Page Application (SPA)** diseñada bajo principios de **Sobriedad Digital**, optimizada para ofrecer una experiencia de usuario fluida y eficiente, sirviendo como prueba técnica de mis capacidades en el ecosistema **Vue 3**.

Cada decisión de diseño, arquitectura de componentes y elección tecnológica fue tomada con un objetivo concreto: **rendimiento, claridad y escalabilidad**.

---

## 🏗️ Arquitectura de Proyectos

### 🚀 Product Showcase SPA

**El Desafío:**
Se requería construir una interfaz rápida y escalable para mostrar un catálogo de productos obteniendo datos en tiempo real de una API externa, asegurando que la experiencia del usuario no se viera interrumpida por tiempos de carga.

**Decisiones Técnicas:**

| Tecnología                  | Por qué                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vue 3 (Composition API)** | Implementé Composables para encapsular la lógica de llamadas a la API, logrando módulos reutilizables y desacoplados de la vista.                       |
| **Pinia (vs. Vuex)**        | Opté por Pinia por su integración nativa con Composition API. Eliminé mutaciones innecesarias, resultando en un flujo de datos más limpio y predecible. |
| **Axios**                   | Utilicé interceptores para el manejo global de errores HTTP, evitando código repetitivo en cada llamada.                                                |
| **Performance**             | Implementé Lazy Loading de rutas y optimización de assets, reduciendo el bundle inicial.                                                                |

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](#)
[![Pinia](https://img.shields.io/badge/Pinia-store-FFE162?style=flat-square&logoColor=black)](#)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](#)
[![Vuetify](https://img.shields.io/badge/Vuetify-3.x-1867C0?style=flat-square&logo=vuetify&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](#)

<br>

🚀 [Demo en Vivo](#) &nbsp;|&nbsp; 💻 [Ver Código](https://github.com/jltamayocabello-droid)

---

### 📚 Booklist SPA

**El Desafío:**
Se requería construir una interfaz rápida y escalable para gestionar un catálogo bibliográfico dinámico, permitiendo a los usuarios buscar, filtrar y registrar libros en tiempo real, asegurando una experiencia fluida sin interrupciones.

**Decisiones Técnicas:**

| Tecnología                  | Por qué                                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Vue 3 (Composition API)** | Manejé la lógica compleja de filtrado y búsqueda mediante Composables, separando completamente la vista de la lógica de negocio. |
| **Pinia**                   | Centralicé el listado de libros en un store único, lo que facilitó la reactividad entre múltiples componentes sin prop drilling. |
| **Performance**             | Optimicé el rendimiento evitando renderizados innecesarios en el DOM mediante `v-memo` y watchers controlados.                   |

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](#)
[![Pinia](https://img.shields.io/badge/Pinia-store-FFE162?style=flat-square&logoColor=black)](#)
[![Vue Router](https://img.shields.io/badge/Vue_Router-4-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](#)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)](#)

<br>

🚀 [Demo en Vivo](#) &nbsp;|&nbsp; 💻 [Ver Código](https://github.com/jltamayocabello-droid)

---

### 💰 SmartBudget

**El Desafío:**
Se requería construir una interfaz rápida, escalable y visualmente atractiva para visualizar finanzas personales, asegurando que la UX fuera impecable en cualquier dispositivo (Mobile First) y sin tiempos de carga pesados.

**Decisiones Técnicas:**

| Tecnología      | Por qué                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **SASS + BEM**  | Implementé una arquitectura CSS modular y semántica. La metodología BEM permitió crear bloques de componentes altamente reutilizables y sin colisiones de estilos. |
| **Bootstrap 5** | Utilicé el sistema de grillas estratégicamente para acelerar el desarrollo responsivo y asegurar compatibilidad entre navegadores.                                 |
| **Performance** | Comprimí estilos y eliminé renderizados innecesarios, reduciendo drásticamente el consumo de recursos en dispositivos móviles.                                     |

[![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)](#)
[![BEM](https://img.shields.io/badge/BEM-Methodology-000000?style=flat-square)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](#)
[![CSS Grid](https://img.shields.io/badge/CSS_Grid-Layout-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![Flexbox](https://img.shields.io/badge/Flexbox-Layout-1572B6?style=flat-square&logo=css3&logoColor=white)](#)

<br>

🚀 [Demo en Vivo](#) &nbsp;|&nbsp; 💻 [Ver Código](https://github.com/jltamayocabello-droid)

---

## 🛠️ Stack Tecnológico

```
Frontend Core
├── JavaScript ES6+
└── Vue 3 (Composition API + <script setup>)

State Management
└── Pinia (store modular y reactivo)

UI Framework
└── Vuetify 3 (Material Design, Dark Theme)

Tooling
├── Vite (bundler, HMR ultrarrápido)
└── ESLint (calidad y coherencia de código)

Estilos
├── SASS (variables, mixins, anidado)
└── BEM (metodología de nomenclatura)

Routing
└── Vue Router 4 (SPA navigation)
```

---

## 🚀 Deployment & DevOps

### Plataforma de Despliegue

El proyecto está configurado para desplegarse en **[Vercel](https://vercel.com/)**, aprovechando su integración nativa con repositorios de GitHub para CI/CD automático en cada push a `main`.

> ⚙️ _Enlace al deployment en vivo próximamente disponible._

---

## 📁 Estructura del Proyecto

```
mi-portafolio-vuetify/
├── src/
│   ├── components/         # Componentes reutilizables (ProjectCard, etc.)
│   ├── layouts/            # Layout principal (navbar + footer)
│   ├── pages/              # Vistas de la SPA
│   │   └── index.vue       # Hero + About + Projects
│   ├── plugins/            # Registro de plugins (Vuetify, Pinia, Router)
│   ├── router/             # Configuración de rutas
│   ├── stores/             # Stores de Pinia
│   └── styles/             # SASS global y variables
├── index.html
├── vite.config.js
└── package.json
```

---

## 📝 Licencia

© 2026 Jorge Tamayo

[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)
