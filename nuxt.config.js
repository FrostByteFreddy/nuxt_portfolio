export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        // Font Awesome stylesheet
        {
          rel: "stylesheet",
          href: "https://kit.fontawesome.com/7a8dc7b97f.css",
          crossorigin: "anonymous",
        },
        // Favicon links
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
    },
  },

  // Enable auto-importing of components
  components: true,
});
