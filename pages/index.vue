<template>
  <!-- Cincha de inicio -->

  <div
    class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <div
      class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] opacity-50"
        style="
          clip-path: polygon(
            74.8% 41.9%,
            97.2% 73.2%,
            100% 34.9%,
            92.5% 0.4%,
            87.5% 0%,
            75% 28.6%,
            58.5% 54.6%,
            50.1% 56.8%,
            46.9% 44%,
            48.3% 17.4%,
            24.7% 53.9%,
            0% 27.9%,
            11.9% 74.2%,
            24.9% 54.1%,
            68.6% 100%,
            74.8% 41.9%
          );
        "
      />
    </div>
    <div
      class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] opacity-50"
        style="
          clip-path: polygon(
            74.8% 41.9%,
            97.2% 73.2%,
            100% 34.9%,
            92.5% 0.4%,
            87.5% 0%,
            75% 28.6%,
            58.5% 54.6%,
            50.1% 56.8%,
            46.9% 44%,
            48.3% 17.4%,
            24.7% 53.9%,
            0% 27.9%,
            11.9% 74.2%,
            24.9% 54.1%,
            68.6% 100%,
            74.8% 41.9%
          );
        "
      />
    </div>
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p class="text-sm leading-6 text-gray-900">
        <strong class="font-semibold">Basic Threads - Venta de Prendas</strong
        ><svg
          viewBox="0 0 2 2"
          class="mx-2 inline h-0.5 w-0.5 fill-current"
          aria-hidden="true"
        >
          <circle cx="1" cy="1" r="1" /></svg
        >Descubre nuestra nueva colección primavera/verano.
      </p>
      <a
        href="#"
        class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >Ver ahora <span aria-hidden="true">&rarr;</span></a
      >
    </div>
    <div class="flex flex-1 justify-end">
      <button
        type="button"
        class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
      >
        <span class="sr-only">Descartar</span>
        <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
    </div>
  </div>

  <!-- Header del principio -->

  <header>
    <div
      class="relative h-[425px] overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <img src="/public/img/f4.jpg" class="w-full h-full object-cover" alt="" />
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed"
      >
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1 class="mb-10 text-5xl font-bold">Basic Threads</h1>
            <button
              type="button"
              class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <NuxtLink to="/prendas/pantalones" class="" aria-current="page">
                Productos
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Contenedor de diseño para redireccionar a contacto -->

  <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32 text-center md:text-left">
      <div
        class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div class="flex flex-wrap items-center">
          <div
            class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex"
          >
            <img
              src="/public/img/f4.jpg"
              alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
            />
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="mb-6 text-3xl font-bold">
                <span class="text-danger dark:text-danger-500"
                  >Tienda de ropa</span
                >
                Basic Threads
              </h2>
              <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                Somos una tienda de ropa muy reconocida a nivel nacional e
                internacional por la calidad de nuetros artículos de prendas y
                accesorios.
              </p>
              <button
                type="button"
                class="inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-dark hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-black focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <NuxtLink
                  to="/contact"
                  class="flex items-center w-full py-2 px-3 text-gray-900 bg-gray-50"
                  aria-current="page"
                >
                  Conocer más
                </NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Cards -->
  <div class="container mx-auto px-4 py-12 mt-12">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 my-10">
      <div
        v-for="product in config.products"
        :key="product.ID"
        class="bg-white rounded-lg overflow-hidden border border-black shadow-md hover:shadow-lg transition-transform hover:scale-105"
      >
        <NuxtLink :to="{ path: 'show', query: { item_id: product.ID } }">
          <img
            :src="'/img/' + product.Image"
            :alt="product.Name"
            class="h-60 w-full object-cover object-center cursor-pointer"
          />
        </NuxtLink>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-black">{{ product.Name }}</h3>
          <p class="text-sm text-black">${{ product.Price }}</p>
          <hr />
          <div class="mt-4 flex justify-between">
            <button class="bg-black text-white px-4 py-2 rounded-md">
              <NuxtLink
                :to="{ path: 'show', query: { item_id: product.ID } }"
                class="n-link-base flex items-center justify-center transition-transform hover:scale-105"
              >
                Comprar
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <!-- Recomendaciones -->
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
          <h2 class="text-2xl font-bold text-gray-900">Recomendaciones</h2>

          <div
            class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
          >
            <div
              v-for="recomendaciones in config.recomendaciones"
              :key="recomendaciones.id"
              class="bg-white rounded-lg overflow-hidden border border-gray shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              <div class="p-4">
                <h3 class="text-lg font-semibold text-black">
                  {{ recomendaciones.Name }}
                </h3>
                <hr />
              </div>
              <img
                :src="'/img/' + recomendaciones.Image"
                :alt="recomendaciones.Name"
                class="h-48 w-full object-cover object-center"
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#card1 {
  border-color: black;
}
</style>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    products: Object,
    recomendaciones: Object,
  },
  setup() {
    const config = ref({
      products: [],
      recomendaciones: [],
    });
    onMounted(() => {
      getProducts(config.value);
      getRecomendaciones(config.value);
    });

    return { config, getProducts };
  },
};

function getProducts(config) {
  fetch("http://34.29.72.14:1323/products")
    .then((response) => response.json())
    .then((response) => {
      config.products = response;
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getRecomendaciones(config) {
  // fetch("http://:1323/products")
  //   .then((response) => response.json())
  //   .then((response) => {
  //     config.products = response;
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  let recomendaciones = [
    {
      ID: 1,
      Name: "Hoodies Collections",
      Image: "hoodiesC.jpg",
    },
    {
      ID: 2,
      Name: "Camisas Collections",
      Image: "camisasC.jpg",
    },
    {
      ID: 3,
      Name: "Pantalones Collections",
      Image: "pantalonesC.jpg",
    },
  ];

  config.recomendaciones = recomendaciones;
}

import { XMarkIcon } from "@heroicons/vue/20/solid";
</script>
