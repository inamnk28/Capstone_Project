<template>
  <!-- <SpinnerComp v-if="isLoading" /> -->
  <div class="prods ">
    <div>
    <button @click="filterProducts(0)">All Products</button>
    <button @click="filterProducts(2)">T-Shirts</button>
    <button @click="filterProducts(1)">Sneakers</button>
    <button @click="filterProducts(3)">Sweaters & Jackets</button>
  </div>
  <ProductComp :products="products" />
  </div>
</template>
<script>
import ProductComp from "@/components/ProductComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: { ProductComp, SpinnerComp },
  computed: {
    products() {
      return this.$store.state.products;
      // return this.$store.state.filteredProducts || this.$store.state.products;
    },
    filteredProducts() {
    return this.$store.state.filteredProducts;
  },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },

  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    filterProducts(categoryId) {
      // Call the action to filter products by category
      this.$store.dispatch("getFilteredProducts", categoryId);
    },
}
}
</script>
<style scoped>
/* .prods {
  padding-inline: auto;
} */
</style>
