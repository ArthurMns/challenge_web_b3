<script setup lang="ts">
import { ref } from "vue";

const currentSlide = ref(1);

const goToSlide = (slideNumber: number) => {
  currentSlide.value = slideNumber;
};
</script>

<template>
  <div class="flex justify-center">
    <div
      class="carousel h-96 w-3/4 overflow-hidden relative bg-white rounded-lg"
    >
      <div
        v-show="currentSlide === 1"
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
          <button
            @click="goToSlide(4)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❮
          </button>
          <button
            @click="goToSlide(2)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❯
          </button>
        </div>
      </div>

      <div
        v-show="currentSlide === 2"
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
          <button
            @click="goToSlide(1)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❮
          </button>
          <button
            @click="goToSlide(3)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❯
          </button>
        </div>
      </div>

      <div
        v-show="currentSlide === 3"
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
          <button
            @click="goToSlide(2)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❮
          </button>
          <button
            @click="goToSlide(4)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❯
          </button>
        </div>
      </div>

      <div
        v-show="currentSlide === 4"
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
          <button
            @click="goToSlide(3)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❮
          </button>
          <button
            @click="goToSlide(1)"
            class="btn btn-circle transition-transform duration-300 ease-in-out"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
