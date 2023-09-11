<template>
    <div class="container justify-content-center">
            <hr>
            <h1 class="display-5 fs-4 text-center">Admin</h1>
            <hr>
        <form action="" class="row justify-content-center" id="productForm" @submit.prevent="addToStore">
            <div class="mb-2">
                <input type="text" name="" id="primary_image_url" v-model="newProduct.primary_image_url" placeholder="Image URL..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="product_name" v-model="newProduct.product_name" placeholder="Product Name..." required>
            </div>
            <div class="mb-2">
                <input type="number" id="price" v-model="newProduct.price" placeholder="Product Price..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="category_id" v-model="newProduct.category_id" placeholder="Category Id..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="description" v-model="newProduct.description" placeholder="Description..." required>
            </div>
            <div class="mb-2">
                <input type="number" id="quantity" v-model="newProduct.quantity" placeholder="Enter the quantity..." required>
            </div>
            <div class="mb-2">
                <button class="border-0 bg-black text-white fw-bold" type="submit" id="addToStore">Add to Store</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newProduct: {
                product_name: "",
                quantity: "",
                price: "",
                description: "",
                category_id: "",
                primary_image_url: ""
            }
        };
    },
    methods: {
        async addToStore() {
            try {
                await this.$store.dispatch("addProduct", this.newProduct);
                this.$router.push("/admin");
                this.newProduct = {
                    prodName: "",
                    quantity: "",
                    price: "",
                    description: "",
                    category_id: "",
                    primary_image_url: ""
                };
                console.log("Product added successfully!")
            } catch (error) {
                console.error("Error adding product:", error);
            }
        }
    }
}
</script>
<style scoped>
.container {
  font-family: montserrat;
  text-align: center;
  padding: 20px;
}

#productForm {
  max-width: 500px;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .container {
    padding: 10px; 
  }

  #productForm {
    max-width: 100%;
  }
}
</style>