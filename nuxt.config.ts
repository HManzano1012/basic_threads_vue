// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  css: [
    '@fortawesome/fontawesome-free/css/all.css',  // Añade esta línea
    '@/assets/css/tailwind.css'  // Asegúrate de que esta sea la ruta correcta para tu Tailwind CSS
  ],
  
});
