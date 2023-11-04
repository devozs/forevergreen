// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      templateParams: {
        separator: '•'
        // other common separators: '·', '—', '•'
      }
    }
  },
  site: {
    url: 'https://forevergreen.devozs.com',
    name: 'Forever Green',
    description: 'Green Memorial',
    defaultLocale: 'en',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/apollo',
    'nuxt-og-image',
    '@nuxtseo/module',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  // routeRules: {
  //   "/": { redirect: "/en" },
  // },
  i18n: {
    locales: [
      {
          code: 'he',
          iso: 'he-IL',
          name: 'Hebrew',
          file: 'he-IL.ts',
          dir: 'rtl',
      },
      {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          file: 'en-US.ts',
          dir: 'ltr',
      },
  ],
  langDir: "lang",
  // strategy: "prefix",
  defaultLocale: "he",
  defaultDirection: 'auto',
  detectBrowserLanguage: false,

  // vueI18n: "./i18n.config.ts",
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','java','json','bash','vue']
    }
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs']
  },
  imports: {
    dirs: ['./stores/**', './models'],
    // imports: [
    //   {from: 'pinia', name: 'defineStore'}
    // ]
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  }
})
