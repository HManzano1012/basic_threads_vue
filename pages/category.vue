<template>
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
            <h1 class="mb-10 text-3xl font-bold">{{ config.category }}</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

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
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
    const id_category = route.query.category_id;
    const config = ref({
      products: [],
      category: "",
    });

    onMounted(() => {
      getProducts(config.value, id_category);
      getCategory(config.value, id_category);
    });

    return {
      config,
      getProducts,
      getCategory,
    };
  },
  methods: {},
};

function getProducts(config, id_category) {
  fetch("http://34.29.72.14:1323/products/" + id_category)
    .then((response) => response.json())
    .then((response) => {
      config.products = response;
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getCategory(config, id_category) {
  fetch("http://34.29.72.14:1323/categories/" + id_category)
    .then((response) => response.json())
    .then((response) => {
      config.category = response;
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
</script>
