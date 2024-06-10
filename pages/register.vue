<script setup>
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const agreed = ref(false);
</script>



<template>
  <div class="isolate px-6 bg-fixed-custom  py-14 mx-auto mt-20 mb-24">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div class="" />
    </div>



    <div class="flex flex-col justify-center items-center  bg-gray-100 mx-auto mt-5 max-w-7xl ">
      

      <form
        method="POST"
        class="sm:w-2/3"
        @submit="register"
        id="register-form"
      >

      <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Crea una cuenta
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Es importante crear una cuenta para la compra de productos!
      </p><br><hr><br>
    </div>

        <div class="" id="error-alert"></div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="sm:col-span-2 px-1">
            <label for="name">Nombres*</label>
            <input
              type="text"
              name="name"
              id="name"
              ref="name"
              required
              placeholder="Ingresa tu nombre completo"
              class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              @focus="hideAlert"
            />
          </div>
          <div class="sm:col-span-2">
            <div class="px-1">
              <label for="email">Correo electrónico*</label>
              <input
                type="email"
                name="email"
                ref="email"
                id="email"
                required
                placeholder="Ingresa tu correo electrónico"
                autocomplete="email"
                class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                @focus="hideAlert"
              />
            </div>
          </div>
          <div class="sm:col-span-2 mt-2">
            <div class="px-1">
              <label for="password">Clave*</label>
              <input
                type="password"
                name="password"
                id="password"
                ref="password"
                placeholder="******"
                required
                class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                @focus="hideAlert"
              />
            </div>
          </div>
          <div class="sm:col-span-2 mt-2">
            <div class="px-1">
              <label for="phone-number">Número de telefono*</label>
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                ref="phone"
                placeholder="Ingresa tu numero de telefono"
                required
                class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                @focus="hideAlert"
              />
            </div>
          </div>
        </div>
        <div class="mt-2">
          <hr>
          <button
            type="submit"
            class="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline"
          >
            Enviar
          </button>
        </div><br><hr>
        Ya tienes una cuenta?
        <NuxtLink to="/login" class="text-blue-400 hover:text-gray-400">
          ¡Inicia sesion!
        </NuxtLink>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    hideAlert() {
      document.getElementById("error-alert").innerHTML = "";
    },
    register() {
      event.preventDefault();
      let name = this.$refs.name.value;
      let email = this.$refs.email.value;
      let phone = this.$refs.phone.value;
      let clave = this.$refs.password.value;

      if (!name || !email || !phone || !clave) {
        document.getElementById("error-alert").innerHTML =
          '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Error:</strong><span class="block sm:inline"> Todos los campos son requeridos.</span></div>';
        return;
      }

      // regex for numher like 71266734 or 7234-1234, can onl start with 7 or 6
      let regex = new RegExp("^[7|6]{1}[0-9]{7}$");

      if (!regex.test(phone)) {
        document.getElementById("error-alert").innerHTML =
          '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Error:</strong><span class="block sm:inline"> El número de teléfono no es válido.</span></div>';
        return;
      }

      this.hideAlert();
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("phone", phone);
      formdata.append("password", clave);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://34.29.72.14:1323/register", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let response = JSON.parse(result);
          if (response.status == "success") {
            document.getElementById("error-alert").innerHTML =
              '<div class="bg-green-100 border border-green-400 text-green-700 px-4 mb-6 py-3 rounded relative" role="alert"><strong class="font-bold">Éxito:</strong><span class="block sm:inline"> Usuario registrado correctamente.</span></div>';
            document.getElementById("register-form").reset();
          } else {
            switch (response.error) {
              case "user_exists":
                document.getElementById("error-alert").innerHTML =
                  '<div class="bg-red-100 border border-red-400 text-red-700 px-4 mb-6 py-3 rounded relative" role="alert"><strong class="font-bold">Error:</strong><span class="block sm:inline"> El correo electrónico ya existe.</span></div>';
                break;
              case "missing_fields":
                document.getElementById("error-alert").innerHTML =
                  '<div class="bg-red-100 border border-red-400 text-red-700 px-4 mb-6 py-3 rounded relative" role="alert"><strong class="font-bold">Error:</strong><span class="block sm:inline"> Todos los campos son requeridos.</span></div>';
                break;
              default:
                document.getElementById("error-alert").innerHTML =
                  '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded relative" role="alert"><strong class="font-bold">Error:</strong><span class="block sm:inline"> Ha ocurrido un error inesperado.</span></div>';
                break;
            }
          }
        });
    },
  },
};
</script>
