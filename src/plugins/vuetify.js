/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
/*export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3F51B5',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})*/

import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'dark',
    colors: {
      primary: '#3F51B5',
      secondary: '#1E88E5',
    },
  }
})