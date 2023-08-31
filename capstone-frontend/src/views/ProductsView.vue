<template>
  <!-- <SpinnerComp v-if="isLoading" /> -->
  <ProductComp :products="products" />
</template>
<script>
import ProductComp from '@/components/ProductComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    components: { ProductComp, SpinnerComp },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts").then(() => {
            setTimeout(() => {
                this.isLoading = false;
            }, 3000); 
        });
    },
    data() {
      return {
        isLoading: true,
      }
    }
}
</script>