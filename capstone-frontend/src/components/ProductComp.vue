<template>
  <div class="row justify-content-center">
    <div class="product-card" v-for="product in products" :key="product.product_id">
      <div class="img">
        <img class="img-fluid" :src="product.primary_image_url" :alt="product.product_name">
      </div>
      <div class="name-price">
        <p class="fs-6"><span class="fw-bold">{{ product.product_name }}</span><br>R {{ product.price }}</p>
        <!-- <p class="fs-5">{{ product.price }}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ["products"],
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.product-card {
  width: 400px;
  font-family: montserrat;
}

</style>