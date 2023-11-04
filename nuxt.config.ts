// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://forevergreen.devozs.com',
    name: 'Forever Green',
    description: 'Green Memorial',
    defaultLocale: 'he-IL',
    trailingSlash: true,
    identity: {
      type: 'Person'
    },
    twitter: '@DevOzs',

  },
  app: {
    head: {
      titleTemplate: '%s %separator Forever Green', // WA due to bug in SEO-KIT (to be removed once upgraded)
      templateParams: {
        separator: '•'
        // other common separators: '·', '—', '•'
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxtseo/module',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  // routeRules: {
  //   "/en": { redirect: "/" },
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
