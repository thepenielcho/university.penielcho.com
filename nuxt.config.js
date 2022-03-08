export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TIL Univeristy',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Today I Learned at University: 매일매일 대학에서 배운 것을 기록하는 공간. 매일매일은 아닐 수도ㅎ by Peniel Cho' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 't-type',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'TIL University' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://university.penielcho.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TIL University'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Today I Learned at University: 매일매일 대학에서 배운 것을 기록하는 공간. 매일매일은 아닐 수도ㅎ by Peniel Cho'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/thepenielcho/university.penielcho.com/main/static/og_image.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://raw.githubusercontent.com/thepenielcho/university.penielcho.com/main/static/og_image.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'TIL University Main Image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-infinite-loading.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //https://github.com/dword-design/nuxt-content-git
    'nuxt-content-git',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
