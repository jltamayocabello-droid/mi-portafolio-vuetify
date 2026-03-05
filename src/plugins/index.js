/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

import { createPinia } from 'pinia'
import router from '../router'
// Plugins
import vuetify from './vuetify'

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(createPinia())
  app.use(router)
}
