<template>
  <nav class="bg-black text-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white bg-black"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1864/1864887.png"
          class="h-8"
          alt="Threads Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Threads</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="hidden w-full md:block md:w-auto bg-black"
        id="navbar-dropdown"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              class="flex items-center w-full py-2 px-3 text-white bg-black text-white"
              aria-current="page"
            >
              <i class="fa-solid fa-house-user mr-2"></i>Home
            </NuxtLink>
          </li>
          <!-- Iniciar -->

          <!-- Categorias -->
          <!-- Si deseo cambiar agregar uno mas, debo cambiar el nombre del id del boton, el data-dropdown-toggle y el id del Dropdown menu-->

          <li>
            <button
              id="multiLevelDropdownButton"
              data-dropdown-toggle="multi-dropdown"
              class="flex items-center w-full py-2 px-3 text-white bg-black"
              type="button"
            >
              <i class="fa-solid fa-list mr-2"></i> Categorías
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="multi-dropdown"
              class="z-10 hidden bg-black divide-y divide-gray-100 border-white hover:border-white rounded-lg shadow w-44 dark:bg-black"
            >
              <ul
                class="py-2 text-sm text-white rounded-lg dark:text-gray-200 border-white hover:border-gray-300"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li v-for="category in config.categories" :key="category.ID">
                  <a
                    :href="'category?category_id=' + category.ID"
                    class="block px-4 py-2 hover:bg-black dark:hover:bg-black rounded-lg dark:hover:text-white border border-transparent hover:border-gray-300"
                    >{{ category.Name }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="flex items-center w-full py-2 px-3 text-white bg-black"
              aria-current="page"
            >
              <i class="fa-solid fa-circle-info mr-2"></i>Contacto
            </NuxtLink>
          </li>
          <li v-if="config.isLogged" class="py-2">
            {{ config.username }}
          </li>
          <li v-if="!config.isLogged">
            <button
              id="dropdownNavbarLinkIniciar"
              data-dropdown-toggle="dropdownNavbarIniciar"
              class="flex items-center w-full py-2 px-3 text-white bg-black"
            >
              <i class="fa-solid fa-door-open mr-2"></i>Iniciar
              <svg
                class="w-2.5 h-2.5 ms-2.5 rounded-lg"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbarIniciar"
              class="z-10 hidden font-normal bg-black rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-white dark:text-gray-400 rounded-lg bg-black"
                aria-labelledby="dropdownLargeButton"
              >
                <NuxtLink
                  to="/register"
                  class="block px-4 py-2 hover:bg-black dark:hover:bg-black dark:hover:text-white border rounded-lg border-transparent hover:border-gray-300"
                >
                  Crear Cuenta
                </NuxtLink>
              </ul>

              <ul
                class="py-2 text-sm text-white dark:text-gray-400 rounded-lg bg-black"
                aria-labelledby="dropdownLargeButton"
              >
                <NuxtLink
                  to="/login"
                  class="block px-4 py-2 hover:bg-black dark:hover:bg-black rounded-lg dark:hover:text-white border border-transparent hover:border-gray-300"
                >
                  Iniciar sesión
                </NuxtLink>
              </ul>
            </div>
          </li>
          <!-- Carrito -->
          <li>
            <NuxtLink
              to="/cart"
              class="flex items-center w-full py-2 mt-1 px-3 text-white bg-black"
              ><i class="fa-solid fa-cart-plus mr-2"></i
            ></NuxtLink>

            <Icon name="uil:github" color="black" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    categories: Object,
    isLogged: Boolean,
    username: String,
  },
  setup() {
    const config = ref({
      categories: [],
      isLogged: false,
    });
    onMounted(() => {
      getCategories(config.value);
      getIsLogged(config.value);
    });

    return { config, getIsLogged, getCategories };
  },
  created() {},
};

function getCategories(config) {
  fetch("http://34.29.72.14:1323/categories")
    .then((response) => response.json())
    .then((response) => {
      config.categories = response;
      console.log("categorias");
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getIsLogged(config) {
  let cookie_string = document.cookie;
  let isl = cookie_string.includes("token");
  console.log(isl);
  let cookies = document.cookie.split(";");
  let username = "";
  if (isl) {
    config.isLogged = true;

    let cookie = document.cookie.split(";");
    console.log(cookie);
    for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].includes("user")) {
        username = cookie[i].split("=")[1];
        config.username = username;
        console.log(username);
      }
    }
  }
}
</script>
