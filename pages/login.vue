<template>


<br><br><br><br>

<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">



    <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
   
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">Inicio de Sesión</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-black">Correo electrónico</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div><br>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-black">Contraseña</label>
            
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div><br>

        <button type="submit" class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-transform hover:scale-105  ">
            Enviar
        </button>
        <hr><br>
      </form>

      <NuxtLink to="/Form_login" class="n-link-base flex items-center justify-center transition-transform hover:scale-105 ">
        No tienes una cuenta? ¡Ingresa aquí!
      </NuxtLink>

    </div>
  </div>
  

  
  <br><br><br><br><br><br><br><br>


</template>


