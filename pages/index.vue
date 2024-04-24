<template>
  <div
    class="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <div
      class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
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
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
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
      <p class="text-sm leading-6 text-white">
        <strong class="font-semibold">Basic Threads 2024</strong
        ><svg
          viewBox="0 0 2 2"
          class="mx-2 inline h-0.5 w-0.5 fill-current"
          aria-hidden="true"
        >
          <circle cx="1" cy="1" r="1" /></svg
        >La mejor tienda de ropa en el país – te estamos esperando!
      </p>
    </div>
    <div class="flex flex-1 justify-end"></div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <div
        v-for="product in config.products"
        :key="product.id"
        class="bg-white rounded-lg overflow-hidden border border-black shadow-md hover:shadow-lg transition-transform hover:scale-105"
      >
        <img
          :src="'/img/' + product.Image"
          :alt="product.Name"
          class="h-48 w-full object-cover object-center"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-black">{{ product.Name }}</h3>
          <p class="text-sm text-black">${{ product.Price }}</p>
          <hr />
          <div class="mt-4 flex justify-between">
            <button class="bg-black text-white px-4 py-2 rounded-md">
              <NuxtLink
                to="/Form_login"
                class="n-link-base flex items-center justify-center transition-transform hover:scale-105"
              >
                Añadir
              </NuxtLink>
            </button>
            <button class="bg-black text-white px-4 py-2 rounded-md">
              <NuxtLink
                to="/Form_login"
                class="n-link-base flex items-center justify-center transition-transform hover:scale-105"
              >
                Comprar
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <hr />
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Recomendaciones</h2>

          <div
            class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
          >
            <!-- Card 1 -->
            <div class="group relative">
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
              >
                <img
                  src="../assets/css/img/H1.jpg"
                  alt="Placeholder"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">Collection</a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Hoddie negro mujer
              </p>
            </div>

            <!-- Card 2 -->
            <div class="group relative">
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
              >
                <img
                  src="../assets/css/img/H2.jpg"
                  alt="Placeholder"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">Collection</a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Hoddie blanco hombre
              </p>
            </div>

            <!-- Card 3 -->
            <div class="group relative">
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
              >
                <img
                  src="../assets/css/img/H3.jpg"
                  alt="Placeholder"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">Collection </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Hoddie negro hombre
              </p>
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
  },
  setup() {
    const config = ref({
      products: [],
    });
    onMounted(() => {
      getProducts(config.value);
    });

    return { config, getProducts };
  },
  created() {},
};

function getProducts(config) {
  // fetch("http://localhost:1323/products")
  //   .then((response) => response.json())
  //   .then((response) => {
  //     config.products = response;
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  let products = [
    {
      ID: 1,
      Name: "Camisa polo negra",
      Price: 20.99,
      Description: "Camisa polo",
      Image: "blackpolo.jpg",
    },
    {
      ID: 2,
      Name: "Camisa polo blanca",
      Price: 19.96,
      Description: "Camisa polo",
      Image: "whitepolo.jpg",
    },
    {
      ID: 3,
      Name: "Camiseta azul TOMMy",
      Price: 35.66,
      Description: "Camiseta azul TOMMy",
      Image: "blueshirttommy.jpg",
    },
    {
      ID: 4,
      Name: "Blusa Blanca Tommy",
      Price: 30.89,
      Description: "Blusa Blanca Tommy",
      Image: "whiteshirttommy.jpg",
    },
  ];

  config.products = products;
}
</script>
