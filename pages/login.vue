<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="my-5 py-5 mb-56">
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1864/1864887.png"
        class="mx-auto w-40"
        alt=""
      />
      <br />
    </div>
    <div class="mt-1 mx-auto w-full max-w-sm">
      <form @submit.prevent="login">
        <div id="error-alert"></div>
        <div class="mb-3">
          <label for="email" class="mt-64">Correo electrónico</label>
          <div class="mt-3">
            <input
              id="email"
              ref="email"
              j
              name="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              required="true"
              class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              @focus="hideAlert"
            />
          </div>
        </div>
        <div>
          <label for="password" class="mt-3">Contraseña</label>
          <div class="mt-3">
            <input
              id="password"
              name="password"
              ref="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              required="true"
              class="shadow appearance-non border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              @focus="hideAlert"
            />
          </div>
        </div>

        <button
          type="submit"
          class="w-full rounded-md bg-black px-5 py-2.5 my-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
        >
          Enviar
        </button>
      </form>
      No tienes una cuenta?
      <NuxtLink to="/register" class="text-blue-400 hover:text-gray-400">
        ¡Registrate aquí!
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideAlert() {
      document.getElementById("error-alert").innerHTML = "";
    },
    login() {
      let email = this.$refs.email.value;
      let password = this.$refs.password.value;

      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://34.29.72.14:1323/login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let response = JSON.parse(result);
          if (response.status == "success") {
            document.cookie = `token=${response.token}`;
            fetch("http://34.29.72.14:1323/getuser", {
              method: "POST",
              body: formdata,
              redirect: "follow",
            })
              .then((response) => response.json())
              .then((response) => {
                document.cookie = `user=${response}`;
                console.log(document.cookie);
              });
            window.location.href = "/";
          } else {
            let alert =
              '<div class="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" role="alert">\
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>\
  <p>Credenciales Invalidas</p>\
</div>';

            document.getElementById("error-alert").innerHTML = alert;
          }
        });
    },
  },
};
</script>
