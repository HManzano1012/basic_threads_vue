<template>
    <div class="max-w-5xl mx-auto p-4 mt-24 ">

      <div class="bg-black shadow-lg rounded-lg overflow-hidden flex space-x-5 mb-3">

        <div class="w-1/2 p-6 ">
          <img src="" class="w-full rounded-lg p-4" alt="">
        </div>

      </div><hr>
  

      <div class="bg-gray shadow-lg rounded-lg overflow-hidden p-4 mt-4 mb-12">
        <h2 class="text-xl font-semibold mb-2">{{ selectedItem.name }}</h2>
        <p class="text-gray-700 mb-4">{{ selectedItem.description }}</p>
        <div class="flex justify-between">
          <div>
            <p class="text-gray-600">Talla: {{ selectedItem.size }}</p>
            <p class="text-gray-600">Color: {{ selectedItem.color }}</p>
          </div>
          <p class="text-gray-800 font-semibold">{{ selectedItem.price }}</p>
        </div>

        <div class="mt-5  space-x-20">
            <button class="bg-black  text-white text-sm px-6 py-2 rounded-lg"><NuxtLink to="/Form_login" class="n-link-base flex items-center justify-center transition-transform hover:scale-105 ">
          Añadir 
        </NuxtLink></button>
            <button class="bg-black text-white text-sm px-6 py-2 rounded-lg"><NuxtLink to="/Form_login" class="n-link-base flex items-center justify-center transition-transform hover:scale-105 ">
          Comprar
        </NuxtLink></button>
      </div>
      </div>


      


    </div>

  </template>
  
  
  <script>
  export default {
    data() {
      return {
        selectedItem: {
          name: "Nombre de la prenda",
          description: "Descripción detallada de la prenda...",
          size: "M",
          color: "Azul",
          price: "$49.99",
          image: "/assets/css/img/CH1.jpg" 
        }
      };
    }
  };
  </script>
  
  <style>
  


  </style>