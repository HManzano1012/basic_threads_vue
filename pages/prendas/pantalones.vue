<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">PANTALONES</h2>
      <h1 style="text-align: center">PANTALONES DE CABALLEROS</h1>
      <br />
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="pantalones in config.pantalones"
          :key="pantalones.id"
          :href="pantalones.href"
          class="group"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="'/img/' + pantalones.Image"
              :alt="pantalones.Image"
              class="h-64 w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ pantalones.Name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ pantalones.Price }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    pantalones: Object,
  },
  setup() {
    const config = ref({
      pantalones: [],
    });
    onMounted(() => {
      getPantalones(config.value);
    });

    return { config, getPantalones };
  },
  created() {},
};

function getPantalones(config) {
  fetch("http://34.29.72.14:1323/products")
    .then((response) => response.json())
    .then((response) => {
      config.pantalones = response;
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let pantalones = [
    {
      ID: 1,
      Name: "Pantalon blanco",
      Price: 20.99,
      Description: "Pantalon blanco",
      Image: "pantalon1.jpg",
    },
    {
      ID: 2,
      Name: "Pantalon de vestir",
      Price: 19.96,
      Description: "Pantalon de vestir",
      Image: "pantalon2.jpg",
    },
    {
      ID: 3,
      Name: "Short nike",
      Price: 35.66,
      Description: "Short nike",
      Image: "pantalon3.jpg",
    },
    {
      ID: 4,
      Name: "Jogger ",
      Price: 30.89,
      Description: "Jogger",
      Image: "pantalon4.jpg",
    },
    {
      ID: 5,
      Name: "Pantalon cafe ",
      Price: 30.89,
      Description: "Pantalon cafe",
      Image: "pantalon5.jpg",
    },
    {
      ID: 6,
      Name: "Pants ",
      Price: 30.89,
      Description: "Pants",
      Image: "pantalon6.jpg",
    },
    {
      ID: 7,
      Name: "Pants blanco",
      Price: 30.89,
      Description: "Pants blanco",
      Image: "pantalon7.jpg",
    },
    {
      ID: 8,
      Name: "Pants gris",
      Price: 30.89,
      Description: "Pants gris",
      Image: "pantalon8.jpg",
    },
    {
      ID: 9,
      Name: "Pantalon socado",
      Price: 30.89,
      Description: "Pantalon socado",
      Image: "pantalon9.jpg",
    },
    {
      ID: 10,
      Name: "Jogger negro",
      Price: 30.89,
      Description: "Jogger",
      Image: "pantalon10.jpg",
    },
    {
      ID: 11,
      Name: "Jogger sol",
      Price: 30.89,
      Description: "Jogger",
      Image: "pantalon11.jpg",
    },
    {
      ID: 12,
      Name: "short",
      Price: 30.89,
      Description: "Jogger",
      Image: "pantalon12.jpg",
    },
  ];

  config.pantalones = pantalones;
}
</script>
