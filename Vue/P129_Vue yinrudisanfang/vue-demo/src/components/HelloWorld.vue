<template>
  <div class="hello">
    <Swiper :modules="modules" :pagination="{ clickable: true }">
      <SwiperSlide>
        <img src="../assets/1.webp" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/1.webp" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="../assets/1.webp" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";

export default {
  name: 'HelloWorld',
  data() {
    return {
      modules: [Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  }
}
</script>

<style scoped></style>
