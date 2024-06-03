<template>
  <div class="max-w-5xl mx-auto p-4 mt-24">
    <div class="bg-gray flex rounded-lg overflow-hidden p-4 mt-4 mb-12">
      <div class="w-1/2 p-6">
        <img
          :src="'/img/' + config.product.Image"
          :alt="config.product.Name"
          class="w-full max-w-5xl rounded-lg object-cover object-center"
        />
      </div>
      <div class="items-center align-middle py-9 mx-auto">
        <h2 class="text-xl font-semibold text-gray-600">
          {{ config.product.Name }}
        </h2>
        <p class="text-gray-700 mb-4">{{ config.product.Description }}</p>
        <div>
          <div>
            <!-- <p class="text-gray-600">Talla: {{ selectedItem.size }}</p> -->
            <!-- <p class="text-gray-600">Color: {{ selectedItem.color }}</p> -->
          </div>
          <p class="text-gray-800 font-semibold">
            Precio:
            <span class="text-gray-600"> ${{ config.product.Price }}</span>
          </p>

          <span
            v-for="category in String(config.product.Categories).split(',')"
            :key="category"
            class="text-gray-600 border border-gray-300 rounded-full px-2 py-1 text-xs mr-2 mt-2"
          >
            {{ category }}
          </span>
        </div>

        <div class="box mt-3">
          <div class="quantity">
            <span
              class="quantity-add quantity-button"
              @click="config.product_quantity++"
            ></span>
            <input
              type="number"
              step="1"
              min="1"
              :value="config.product_quantity"
              id="product_quantity"
            />
            <span
              class="quantity-remove quantity-button"
              @click="
                config.product_quantity > 1
                  ? config.product_quantity--
                  : (config.product_quantity = 1)
              "
            ></span>
          </div>
        </div>
        <div class="mt-1 space-x-20 w-100">
          <button
            class="bg-black text-white text-sm px-6 py-3 rounded-lg w-full text-md"
            @click="addToCart(config.product.ID, config.product_quantity)"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
    const id_item = route.query.item_id;
    const product_quantity = 1;
    const config = ref({
      product: {},
      id_item: id_item,
      product_quantity: product_quantity,
    });

    onMounted(() => {
      getProduct(config.value);
    });

    return {
      config,
      getProduct,
      addToCart,
    };
  },
  methods: {},
};

function getProduct(config) {
  fetch("http://34.29.72.14:1323/product/" + config.id_item)
    .then((response) => response.json())
    .then((response) => {
      config.product = response;
      console.log(config.product);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function addToCart(product_id, product_quantity_val) {
  let product_quantity = document.getElementById("product_quantity").value;
  let current_cart = JSON.parse(localStorage.getItem("cart")) || [];
  let found_item = false;

  current_cart.map((item) => {
    if (item.product_id == product_id) {
      item.quantity = parseInt(item.quantity) + parseInt(product_quantity);
      found_item = true;
    }
  });
  if (!found_item) {
    current_cart.push({ product_id: product_id, quantity: product_quantity });
  }

  localStorage.setItem("cart", JSON.stringify(current_cart));
  alert("Tus items se agregaron");
}
</script>
<style scoped>
.box {
  width: 100%;
  padding: 2em;
  text-align: center;
}

.quantity {
  position: relative;
  display: inline-block;
  color: #7f7f7f;

  input[type="number"] {
    transition:
      border 0.3s ease-in-out,
      color 0.3s ease-in-out;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    box-shadow: none;
    outline: none;
    width: 42px;
    height: 34px;
    text-align: center;
    float: right;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    color: #342f2f;

    &:focus {
      border-color: #57b8f6 !important;
    }

    &:hover {
      border-color: #a5a5a5;
    }
  }

  &-button {
    width: 39px;
    height: 34px;
    display: inline-block;
    float: right;
    position: relative;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      top: calc(50% - 1px);
      left: calc(50% - 7px);
      content: "";
      width: 14px;
      height: 2px;
      background-color: currentColor;
      display: block;
    }
  }

  &-remove {
    &::after {
      display: none;
    }
  }

  &-add {
    &::after {
      transform: rotate(90deg);
    }
  }
}
</style>
