<template>
  <div class="container mb-3">
    <div v-if="product" class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <input v-model="product_data.prodName" :placeholder="product.product_name" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="product_data.quantity" :placeholder="product.quantity" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="product_data.amount" :placeholder="product.price" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="product_data.category_id" :placeholder="product.category_id" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="product_data.description" :placeholder="product.description" class="form-control" />
          </div>
          <div class="mb-3">
            <input v-model="product_data.prodUrl" :placeholder="product.prodUrl" class="form-control" />
          </div>
          <button @click="updateProduct" class="border-0 bg-black fw-bold text-white">Update Product</button>
        </form>
      </div>
    </div>
    <!-- <div v-else>
      <Spinner />
    </div> -->
  </div>
</template>
<script>
import Spinner from './SpinnerComp.vue';
export default {
    components: { Spinner },
    data() {
        return {
            product_data: {
                // product_id: this.$route.params.id,
                product_name: '',
                quantity: '',
                price: '',
                category_id: '',
                primary_image_url: '',
            }
        };
    },
    props: ["id"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    methods: {
        updateProduct() {
            const componentContext = this;
            this.$store.dispatch("updateProduct", this.product_data)
                .then(() => {
                    componentContext.$router.push('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        const product_id = this.$route.params.id
        this.$store.dispatch("getProduct", product_id);
    },
};
</script>
<style scoped>
  .container {
    font-family: montserrat;
    height: 700px;
 }
</style>