import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#121212', // Negro profundo estilo Craftivo
          surface: '#1E1E1E', // Gris oscuro para tarjetas
          primary: '#4FC08D', // Verde Vue
          secondary: '#ffe162', // Amarillo Pinia
          error: '#f44336',
        },
      },
    },
  },
})
