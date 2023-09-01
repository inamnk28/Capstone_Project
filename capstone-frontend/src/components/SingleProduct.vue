<template>
    <div  v-if="product" class="single-view row justify-content-center my-5 w-100">
        <div class="product col-lg-6 col-md-6 col-12 d-flex justify-content-center mb-5" >
            <img class="img-fluid" :src="product.primary_image_url" alt="">
        </div>
        <div class="description col-lg-6 col-md-6 col-12 d-flex justify-content-center px-5">
           <div class="fixing">
            <h2 class="mb-3 text-center fw-bolder">{{ product.product_name }}</h2>
           <p class="fs-6 lead text-center fw-bold text-wrap">{{ product.description }}</p>
           <p class="h4 mb-4 text-center fw-bold">R {{ product.price }}</p>
           <p class="text-center">
              <button class="border-0 bg-black text-white fw-bold px-1">Add To Bag</button>
           </p>
           </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    const product_id = this.$route.params.product_id;
    this.$store.dispatch("getProductById", product_id);
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.single-view {
  font-family: montserrat;
}
.product {
  width: 500px;
}
/* .description {
  background-color: blue;
} */
.fixing {
  margin-block: auto;
}
</style>
