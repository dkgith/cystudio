export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: '炽晔工作室_软件定制_PCB板设计',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '物联网 3D模型 智能家居'
      },
      {
        hid: 'description',
        name: 'description',
        content: '炽晔工作室致力于电力监控网站、物联网以及其他行业智能平台的定制研发。平台采用阿里云服务器，前后端分离的应用架构，方便扩展维护。通道可采用GPRS模块（包括2G/3G/4G/5G以及未来将实现的通讯模块）、网关、WiFi、LoRa、zigbee等，灵活方便配合设备通讯。并可使用手机APP，随时随地了解设备运行状态，调整相关参数，及时掌控现场情况，做到了然于胸，沉着应对。承接范围：前后端软件定制开发、手机APP开发、微信小程序开发、公司网站制作，PCB电路设计和制作、小批量电路板焊接，智能家居设计方案，3D产品模型效果图设计。'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  router:{
    base:'/cystudio'
  },
  generate: {
    dir: 'docs',
    subFolders:false
  }
}
