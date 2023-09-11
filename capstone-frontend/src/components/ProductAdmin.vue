<template>
    <tbody>
      <tr class="mx-3" v-for="product in products" :key="product.product_id">
        <td><img class="img" :src="product.primary_image_url" alt=""></td>
        <td class="text-center fw-bold">{{ product.product_name }}</td>
        <td class="text-center fw-bold">R {{ product.price }}</td>
        <td class="text-center fw-bold">{{ product.quantity }}</td>
        <td class="button">
            <button class="edit-del my-2 text-white bg-black border-0 fw-bold" @click="deleteProduct(product.product_id)">Delete</button>
            <br>
            <button class="edit-del text-white bg-black border-0 fw-bold"><router-link class="text-white text-decoration-none" :to="{ name: 'updateProd', params: { id: product.product_id } }">Edit</router-link></button>
        </td>
      </tr>
    </tbody>
</template>
    
<script>    
export default {
    props: ["products"],
    methods: {
        async deleteProduct(product_id) {
            const confirmed = confirm("Are you sure you want to delete this product?");
            if (confirmed) {
                try {
                    await this.$store.dispatch("deleteProduct", product_id);
                    console.log("Product deleted successfully");
                } catch (error) {
                    console.error("Error deleting product:", error);
                }
            }
        },
    },
};
</script>
    
<style scoped>
   .img {
    width: 150px;
    /* height: 150px; */
   }
   * {
    font-family: montserrat;
   }
   .edit-del {
    width: 70px;
   }
   @media (max-width: 1025px) {
    thead {
      display: none;
    }
    tbody tr {
      display: block;
      margin-bottom: 20px;
      border: 2px solid black;
    }

    tbody td {
      display: block;
      text-align: center;
    }
    button {
      margin-bottom: 5px;
    }
  }
</style>