<template>
<!-- Recomendaciones -->
<div class="max-w-5xl mx-auto p-4 mt-10">
    <div class="bg-gray-100 flex rounded-lg overflow-hidden p-4 mt-4 ">
      <div class="items-center align-middle py-9 mx-auto w-full">
        <div class="w-full rounded-lg cursor-pointer bg-white">
          <div class=" text-xl flex items-end w-full  font-semibold">
            <span>Registro de Compras</span>
          </div>
          <br><hr><br>
          <div v-if="config.cart_products.length > 0">
            <div class="overflow-x-auto">
              <table class="table-auto  w-full">
                <thead>
                  <tr>
                    <th class="px-4 py-2 text-left border-t border-x text-black">Producto</th>
                    <th class="px-4 py-2 text-left border-t border-x text-black">Descripción</th>
                    <th class="px-4 py-2 text-left border-t border-x text-black">Precio</th>
                    <th class="px-4 py-2 text-left border-t border-x text-black">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in config.cart_products" :key="product.item.ID">
                    <td class="border px-4 py-2">{{ product.item.Name }}</td>
                    <td class="border px-4 py-2">{{ product.item.Description }}</td>
                    <td class="border px-4 py-2">${{ product.item.Price }}</td>
                    <td class="border px-4 py-2">{{ product.quantity }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br /><br />
            <div class=" text-xl text-left w-full  text-5xl   text-black font-semibold">
              Total a pagar: ${{ config.cart_total }}
            </div><br><hr><br><br>

            <form @submit.prevent="handlePurchase" class="mt-8 space-y-4 ">
                <div class="border-b border-gray-900/10 pb-12">
  <h2 class="text-base font-semibold leading-7 text-gray-900">Datos de Compra</h2>
  <p class="mt-1 text-sm leading-6 text-gray-600">Ingresa tus datos para procesar la compra.</p>

  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div class="sm:col-span-3">
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombres</label>
      <div class="mt-2">
        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required pattern="[A-Za-záéíóúÁÉÍÓÚ\s]+" title="Ingresa un nombre válido" />
      </div>
    </div>

    <div class="sm:col-span-3">
      <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
      <div class="mt-2">
        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required pattern="[A-Za-záéíóúÁÉÍÓÚ\s]+" title="Ingresa un apellido válido" />
      </div>
    </div>

    <div class="sm:col-span-3">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
      <div class="mt-2">
        <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-4x1 sm:leading-6" required />
      </div>
    </div>

    <div class="sm:col-span-3">
      <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Departamento</label>
      <div class="mt-2">
        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
          <option value="" disabled selected>Seleccione un departamento</option>
          <option value="Ahuachapán">Ahuachapán</option>
          <option value="Cabañas">Cabañas</option>
          <option value="Chalatenango">Chalatenango</option>
          <option value="Cuscatlán">Cuscatlán</option>
          <option value="La Libertad">La Libertad</option>
          <option value="La Paz">La Paz</option>
          <option value="La Unión">La Unión</option>
          <option value="Morazán">Morazán</option>
          <option value="San Miguel">San Miguel</option>
          <option value="San Salvador">San Salvador</option>
          <option value="San Vicente">San Vicente</option>
          <option value="Santa Ana">Santa Ana</option>
          <option value="Sonsonate">Sonsonate</option>
          <option value="Usulután">Usulután</option>
        </select>
      </div>
    </div>

    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Dirección de Residencia</label>
      <div class="mt-2">
        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
      </div>
    </div>
  </div>
</div>


  <div class="sm:col-span-2">
    <label class="block text-gray-700 text-3x1 font-bold mb-4">Método de Pago</label>
    <div class="flex items-center space-x-4 mb-10">
      <!-- Opciones de método de pago -->
      <input type="radio" id="paypal" name="paymentMethod" value="paypal" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
      <label for="paypal" class="text-gray-700">PayPal</label>

      <input type="radio" id="visa" name="paymentMethod" value="visa" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
      <label for="visa" class="text-gray-700">Visa</label>

      <input type="radio" id="mastercard" name="paymentMethod" value="mastercard" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
      <label for="mastercard" class="text-gray-700">Mastercard</label>
      
      <!-- Agrega más opciones de pago si es necesario -->
    </div>
  </div>

  <!-- Botón de compra -->
  <button
    type="submit"
    class="w-full bg-white text-black font-bold py-8 px-16 text-2xl rounded-lg shadow-lg  mt-10"
  >
    Realizar Compra
  </button>
</form>

          </div>
          <div v-else class="text-center">No hay nada que mostrar</div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const config = ref({
        cart_products: [],
        cart_total: 0,
      });
  
      const purchaseForm = ref({
        name: '',
        email: '',
        address: '',
      });
  
      onMounted(() => {
        getCart(config.value);
        // Load PayPal script
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID';
        script.addEventListener('load', () => {
          window.paypal.Buttons({
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: config.value.cart_total.toString(),
                  },
                }],
              });
            },
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                // You can add further processing here
              });
            },
          }).render('#paypal-button-container');
        });
        document.body.appendChild(script);
      });
  
      function handlePurchase() {
        // Add your form submission logic here
        console.log('Compra realizada', purchaseForm.value);
      }
  
      return {
        config,
        purchaseForm,
        getCart,
        getProduct,
        handlePurchase,
      };
    },
  };
  
  function getCart(config) {
    let current_cart = JSON.parse(localStorage.getItem('cart')) || [];
    current_cart.forEach(item => {
      getProduct(item.product_id, item.quantity, config);
    });
  }
  
  function updateProduct(config, quantity, product) {
    let cart_products = config.cart_products;
    let dataproduct = {
      item: product,
      quantity: quantity,
    };
  
    config.cart_total += parseFloat(quantity) * parseFloat(product.Price);
    cart_products.push(dataproduct);
  }
  
  async function getProduct(id_item, quantity, config) {
    fetch('http://34.29.72.14:1323/product/' + id_item)
      .then(response => response.json())
      .then(response => {
        updateProduct(config, quantity, response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  