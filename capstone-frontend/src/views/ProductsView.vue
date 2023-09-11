<template>
  <!-- <SpinnerComp v-if="isLoading" /> -->
  <div class="prods ">
    <div>
    <button @click="products()">All Products</button>
    <button @click="filterProducts(2)">T-Shirts</button>
    <button @click="filterProducts(1)">Sneakers</button>
    <button @click="filterProducts(3)">Sweaters & Jackets</button>
    <input v-model="searchQuery" placeholder="Search products">
    <button @click="searchProducts">Search</button>
  </div>
  <ProductComp :products="products" />
  <!-- <ProductComp :products="products" /> -->
  </div>
</template>
<script>
import ProductComp from "@/components/ProductComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: { ProductComp, SpinnerComp },
  computed: {
    products() {
      // return this.$store.state.products;
      return this.$store.state.filteredProducts || this.$store.state.products;
    },
  //   filteredProducts() {
  //   return this.$store.state.filteredProducts;
  // },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },

  data() {
    return {
      searchQuery: "",
      isLoading: true,
    };
  },
  methods: {
    filterProducts(categoryId) {
      // Call the action to filter products by category
      this.$store.dispatch("getFilteredProducts", categoryId);
    },
    fetchAllProducts() {
      // Call the new action to fetch all products
      this.$store.dispatch("getAllProducts");
    },
    products() {
      return this.$store.state.products;
      // return this.$store.state.filteredProducts || this.$store.state.products;
    },
    //  searchProducts() {
    //         // Call the action to fetch products with the search query
    //         this.$store.dispatch("searchProducts", this.searchQuery);
    //     },
}}

</script>
<style scoped>
/* .prods {
  padding-inline: auto;
} */
</style>
