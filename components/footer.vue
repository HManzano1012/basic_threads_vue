<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
<template>
    <footer class="bg-black text-white">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 text-white">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 text-white">
          <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1864/1864887.png" class="mr-6 h-10 sm:h-20" alt="logo" />
          <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Threads</span>
            <p class="max-w-xs mt-10 text-sm text-white font-bold">
                ENCUENTRA  LA  MODA  QUE  AMAS,  JUSTO  A  UN  CLICK  DE  DISTANCIA
            </p>
            <p class="max-w-xs mt-10 text-sm text-white font-bold">
                Encuentranos en:
            </p>
            <div class="flex mt-8 space-x-6 text-white">
                <NuxtLink to="/test" class="n-link-base hover:opacity-75" target="_blank" rel="noreferrer">
                  <span class="sr-only text-white"> Facebook </span>
                  <svg class="w-10 h-10 text-white" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </NuxtLink>
                <NuxtLink to="/test" class="n-link-base hover:opacity-75" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Instagram </span>
                  <svg class="w-10 h-10" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </NuxtLink>

            </div>
          </div>
          <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p class="font-medium font-bold">
                CATEGORIAS
              </p>
              <nav class="flex flex-col mt-8 space-y-5 text-sm text-white">
                <NuxtLink to="/Home" class="n-link-base hover:opacity-75"> > Temporadas
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Ropa Hombre
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Ropa Mujer
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Hoddies
                </NuxtLink>
              </nav>
            </div>
            <div>
              <p class="font-medium font-bold">
                SOBRE NOSOTROS
              </p>
              <nav class="flex flex-col mt-8 space-y-5 text-sm text-white">
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Historia
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Termino y condiciones
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Vision
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Mision
                </NuxtLink>
                <NuxtLink to="/" class="n-link-base hover:opacity-75"> > Contactanos
                </NuxtLink>
              </nav>
            </div>
            <div>
                
              <p class="font-medium font-bold">
                FORMAS DE PAGO
              </p>
              <nav class="flex flex-col mt-8 space-y-5 text-sm text-white">
                <NuxtLink to="/test" class="n-link-base hover:opacity-75" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Tarjeta </span>
                  <svg class="w-10 h-10" fill="white" viewBox="0 0 384 512" aria-hidden="true">
                    <path fillRule="evenodd" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" clip-rule="evenodd" />
                  </svg>
                </NuxtLink>    
                <NuxtLink to="/test" class="n-link-base hover:opacity-75" target="_blank" rel="noreferrer">
                  <span class="sr-only"> Credito</span>
                  <svg class="w-10 h-10" fill="white" viewBox="0 0 576 512" aria-hidden="true">
                   <path fillRule="evenodd" d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" clipRule="evenodd" />
                  </svg>
                </NuxtLink>          
              </nav>
            </div>
    
    
          </div>
        </div>
        <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4 mt- font-bold">
          © 2024 BASIC-THREADS 
        </p>
      </div>
    </footer>
    </template>