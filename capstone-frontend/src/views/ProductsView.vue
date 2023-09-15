<template>
  <!-- <SpinnerComp v-if="isLoading" /> -->
  <div class="prods ">
    <div class="filter-sort-search d-flex justify-content-center flex-wrap">
    <!-- <div class="price-filter">
        <div class="inputs">
          <input type="number" v-model="minPrice" id="minPrice" class="minPrice" placeholder="0.00">
          <p><i class="uil uil-minus"></i></p>
          <input type="number" v-model="maxPrice" id="maxPrice" class="maxPrice" placeholder="600.00">
        </div>
        <button @click="applyPriceFilter">Save</button>
      </div> -->
      <div class="search box">
        <button class="btn-search"><i class="fas fa-search"></i></button>
        <input type="text" v-model="searchQuery"  class="input-search" placeholder="Type to Search...">
      </div>
      <div class="category-filter d-flex mx-3">
        <p class="mx-2 fw-bold fs-6" @click="filterProducts(0)">All Products</p>
        <p class="mx-2 fw-bold fs-6" @click="filterProducts(2)">T-Shirts</p>
        <p class="mx-2 fw-bold fs-6" @click="filterProducts(1)">Sneakers</p>
        <p class="mx-2 fw-bold fs-6" @click="filterProducts(3)">Sweaters & Jackets</p>
      </div>
      <div>
        <label for="sortOrder">Sort By:</label>
        <select v-model="selectedSortOrder" id="sortOrder">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
  </div>
  <ProductComp :products="filteredProducts" />
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
      return this.$store.state.products || [];
    },
    filteredProducts() {
      let productView = this.products;
      if(this.selectedCategory !== 0) {
        productView = productView.filter(product => product.category_id === this.selectedCategory)
      }
      if(this.shouldApplyPriceFilter && this.minPrice !== null && this.maxPrice !== null) {
        productView = productView.filter(product => 
          product.price >= this.minPrice && product.price <= this.maxPrice
        );
         this.shouldApplyPriceFilter = false;
      }
      if (this.selectedSortOrder === 'ascending') {
        productView.sort((a, b) => a.price - b.price);
      } else if (this.selectedSortOrder === 'descending') {
        productView.sort((a, b) => b.price - a.price);
      }
      if (this.searchQuery) {
        productView = productView.filter(product => 
          product.product_name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

       return productView;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  data() {
    return {
      selectedCategory: 0,
      isLoading: true,
      minPrice: null,
      maxPrice: null,
      shouldApplyPriceFilter: false,
      selectedSortOrder: 'ascending',
      searchQuery: '',
    };
    }, 
  methods: {
    filterProducts(category_id) {
      // Call the new action to fetch all products
      this.selectedCategory = category_id;
      // this.$store.dispatch("getAllProducts");
    },
    products() {
      return this.$store.state.products;
      // return this.$store.state.filteredProducts || this.$store.state.products;
    },

}}

</script>
<style scoped>
.prods {
  font-family: montserrat;
}
.search-box{
  width: fit-content;
  height: fit-content;
  /* position: relative; */
}
.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: white;
  padding-right: 40px;
  color:#fff;
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  /* position: absolute; */
  right: 0px;
  color:#ffffff ;
  background-color:black;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search{
  width: 300px;
  border-radius: 0px;
  background-color: black;
  border-bottom:1px solid black;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 300px;
  border-radius: 0px;
  background-color: black;
  border-bottom:1px solid black;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

</style>
