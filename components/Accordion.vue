<script setup lang="ts"></script>

<template>
  <div class="carousel w-full h-96 overflow-hidden relative bg-white">
    <div
      id="slide1"
      class="carousel-item relative w-full h-full transition-transform duration-700 ease-in-out"
    >
      <img
        src="/assets/photos/test1400-500.jpg"
        class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        alt="Slide 1"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a
          href="#slide4"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❮</a
        >
        <a
          href="#slide2"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❯</a
        >
      </div>
    </div>

    <div
      id="slide2"
      class="carousel-item relative w-full h-full transition-transform duration-700 ease-in-out bg-white"
    >
      <img
        src="/assets/photos/doggy.png"
        class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        alt="Slide 2"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a
          href="#slide1"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❮</a
        >
        <a
          href="#slide3"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❯</a
        >
      </div>
    </div>

    <div
      id="slide3"
      class="carousel-item relative w-full h-full transition-transform duration-700 ease-in-out"
    >
      <img
        src="/assets/photos/pet-store.png"
        class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        alt="Slide 3"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a
          href="#slide2"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❮</a
        >
        <a
          href="#slide4"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❯</a
        >
        <!--        <nuxt-link to="/" class="text-sm font-semibold leading-6 text-gray-900">-->
        <!--          Accueil-->
        <!--        </nuxt-link>-->
      </div>
    </div>

    <div
      id="slide4"
      class="carousel-item relative w-full h-full transition-transform duration-700 ease-in-out"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        alt="Slide 4"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a
          href="#slide3"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❮</a
        >
        <a
          href="#slide1"
          class="btn btn-circle transition-transform duration-300 ease-in-out"
          >❯</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
