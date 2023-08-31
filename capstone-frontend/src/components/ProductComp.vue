<template>
  <div>
    <div class="product-card" v-for="product in products" :key="product.product_id">
      <div class="img">
        <img class="img-fluid" :src="product.primary_image_url" :alt="product.product_name">
      </div>
      <div class="name-price">
        <p class="fs-5">{{ product.product_name }}</p>
        <p class="fs-5">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
