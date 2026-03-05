import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark', // 🌙 Esto activa el modo oscuro por defecto
    themes: {
      dark: {
        colors: {
          background: '#121212', // Negro profundo estilo Craftivo
          surface: '#1E1E1E', // Gris oscuro para tarjetas
          primary: '#4FC08D', // Verde Vue
          secondary: '#ffe162', // Amarillo Pinia
        },
      },
    },
  },
})
