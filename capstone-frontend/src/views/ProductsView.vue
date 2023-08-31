<template>
  <!-- <SpinnerComp v-if="isLoading" /> -->
  <ProductComp :products="products" />
</template>
<script>
import ProductComp from "@/components/ProductComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: { ProductComp, SpinnerComp },
  computed: {
    products() {
      return this.$store.state.products;
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
};
</script>
