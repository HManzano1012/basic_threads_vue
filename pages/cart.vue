<template>
  <div class="max-w-5xl mx-auto p-4 mt-10">
    <div class="bg-gray flex rounded-lg overflow-hidden p-4 mt-4 mb-12">
      <div class="items-center align-middle py-9 mx-auto w-full">
        <div class="w-full rounded-lg cursor-pointer bg-white">
          <div
            class="my-5 text-xl flex items-end w-full border border-white   text-gray-500 font-semibold"
          >
            <span>Mi carrito </span>
          </div><hr><br><br>
          <div v-if="config.cart_products.length > 0">
            <div
              v-for="product in config.cart_products"
              :key="product.item.ID"
              class="bg-white rounded-lg overflow-hidden border shadow-md hover:shadow-lg h-48 transition-transform my-1"
            >
              <div class="p-3 flex">
                <img
                  :src="'/img/' + product.item.Image"
                  :alt="product.item.Name"
                  class="h-40 w-40 object-cover rounded-lg"
                />
                <div class="mx-5">
                  <h3 class="text-lg font-semibold text-black">
                    {{ product.item.Name }}
                  </h3>
                  <p class="text-sm text-black mt-1">
                    {{ product.item.Description }}
                  </p>
                  <p class="text-sm text-black mt-4">
                    ${{ product.item.Price }}
                  </p>
                  <p class="text-lg font-semibold text-gray-500 my-7">
                    Cantidad en el carrito: {{ product.quantity }}
                  </p>
                </div>
              </div>
            </div><br><br><hr>
            <div
              class="my-5 text-xl text-right w-full text-6x1 border border-white  text-black font-semibold "
            >
              Total a pagar: ${{ config.cart_total }}
            </div>

            <NuxtLink
            to="/buy"
            class="flex items-center w-full py-2 px-3 text-gray-900"
            aria-current="page"
          >
            <div class=" w-full">
              <button class="w-full bg-white text-black font-bold py-8 px-16 text-2xl rounded-lg shadow-lg " >
                Realizar Compra
              </button>
            </div>
          </NuxtLink>


           


          </div>
          <div v-else class="text-center">No hay nada que mostrar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const config = ref({
      cart_products: [],
      cart_total: 0,
    });

    onMounted(() => {
      getCart(config.value);
    });

    return {
      config,
      getCart,
      getProduct,
    };
  },
};
function getCart(config) {
  let current_cart = JSON.parse(localStorage.getItem("cart")) || [];
  current_cart.map((item) => {
    getProduct(item.product_id, item.quantity, config);
  });
}

function updateProduct(config, quantity, product) {
  let cart_products = config.cart_products;

  let dataproduct = {
    item: product,
    quantity: quantity,
  };

  config.cart_total += parseFloat(
    parseInt(quantity) * parseFloat(product.Price),
  );

  cart_products.push(dataproduct);
}

async function getProduct(id_item, quantity, config) {
  fetch("http://34.29.72.14:1323/product/" + id_item)
    .then((response) => response.json())
    .then((response) => {
      updateProduct(config, quantity, response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
</script>
