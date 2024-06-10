<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Hoodies</h2>
  
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a v-for="hoodies in hoodies" :key="hoodies.id" :href="hoodies.href" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img :src="'/img/' +  hoodies.image" class="h-64 w-full object-cover object-center" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ hoodies.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{{ hoodies.price }}</p>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const hoodies = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      image: "hoodie1.jpg",
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      image: 'hoodie2.jpg',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      image: 'hoodie3.jpg',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie4.jpg',
    },
    {
      id: 5,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie5.jpg',
    },
    {
      id: 6,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie6.jpg',
    },
    {
      id: 7,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie7.jpg',
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie8.jpg',
    },
    {
      id: 9,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie9.jpg',
    },
    {
      id: 10,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie10.jpg',
    },
    {
      id: 11,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie11.jpg',
    },
    {
      id: 12,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie12.jpg',
    },
    {
      id: 13,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie13.jpg',
    },
    {
      id: 14,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie14.jpg',
    },
    {
      id: 15,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie15.jpg',
    },
    {
      id: 16,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie16.jpg',
    },
    {
      id: 17,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie17.jpg',
    },
    {
      id: 18,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie18.jpg',
    },
    {
      id: 19,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie19.jpg',
    },
    {
      id: 20,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      image: 'hoodie20.jpg',
    },
  ]
  </script>