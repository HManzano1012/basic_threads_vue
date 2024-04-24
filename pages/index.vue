<template>


  <div
    class="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <div
      class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl "
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
<!-- Cards -->
  <div class="container mx-auto px-4 py-12 mt-12">
      
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="product in config.products"
            :key="product.id"
            class="bg-white rounded-lg overflow-hidden border border-black shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
          <NuxtLink to="show">
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
                    to="login"
                    class="n-link-base flex items-center justify-center transition-transform hover:scale-105"
                  >
                    Añadir
                  </NuxtLink>
                </button>
                <button class="bg-black text-white px-4 py-2 rounded-md">
                  <NuxtLink
                    to="/pages/show"
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
      <!-- Recomendaciones -->
      <div class="bg-gray-100">
        
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5">
              <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
                  <h2 class="text-2xl font-bold text-gray-900">Recomendaciones</h2>

                  <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <div v-for="recomendaciones in config.recomendaciones" :key="recomendaciones.id" class="bg-white rounded-lg overflow-hidden border border-gray shadow-md hover:shadow-lg transition-transform hover:scale-105">
                      <div class="p-4">
                        <h3 class="text-lg font-semibold text-black">{{ recomendaciones.Name }}</h3>
                        <hr/>

                      </div>
                      <img
                        :src="'/img/' + recomendaciones.Image"
                        :alt="recomendaciones.Name"
                        class="h-48 w-full object-cover object-center"
                      />
                      <br>
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
    {
      ID: 5,
      Name: "Camisa Vestir Rayas",
      Price: 15.99,
      Image: "camisa1.jpg",
    },
    {
      ID: 6,
      Name: "Camisa de Playa",
      Price: 10.99,
      Image: "camisa2.jpg",
    },
    {
      ID: 7,
      Name: "Camisa Vestir  Negra",
      Price: 15.89,
      Image: "camisa3.jpg",
    },
    {
      ID: 8,
      Name: "Camisa Negra",
      Price: 30.89,
      Image: "camisa4.jpg",
    },
    {
      ID: 9,
      Name: "Camisa Manga Larga ",
      Price: 30.89,
      Image: "camisa5.jpg",
    },
    {
      ID: 10,
      Name: "Camisa Vestir Old",
      Price: 30.89,
      Image: "camisa6.jpg",
    },
    {
      ID: 11,
      Name: "Camisa Warning",
      Price: 30.89,
      Image: "CH1.jpg",
    },
    {
      ID: 12,
      Name: "Blusa Blanca",
      Price: 15.89,
      Image: "CH2.jpg",
    },
    {
      ID: 13,
      Name: "Hoodie Spiderman",
      Price: 30.89,
      Image: "hoodie1.jpg",
    },
    {
      ID: 14,
      Name: "Pantalon Blanco",
      Price: 30.89,
      Image: "pantalon1.jpg",
    },
    {
      ID: 15,
      Name: "Pantalon Vestir",
      Price: 30.89,
      Image: "pantalon2.jpg",
    },

  ];

  config.products = products;
}
function getRecomendaciones(config) {
  // fetch("http://localhost:1323/products")
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

</script>
