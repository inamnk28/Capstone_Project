<template>
  <div >
    <div>
      <h1>Shopping Cart</h1>
    </div>
    <div v-if="cartItems">
      <div class="modal-inner" v-for="item in cartItems" :key="item.cart_id">
        <div class="modal-img">
          <img :src="item.primary_image_url" :alt="item.product_name" />
        </div>
        <div class="modal-info">
          <div class="name">
            <h1>{{ item.product_name }}</h1>
            <h1>$ {{ item.price }}</h1>
          </div>
          <div class="actions">
            <div class="input">
              <button @click="decreaseQuantity(item)">
                <i class="fas fa-minus"></i>
              </button>
              <input v-model="item.quantity" type="number" min="1" />
              <button @click="increaseQuantity(item)">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="del-btn">
              <i class="uil uil-trash-alt" @click="deleteItem(item.cartID)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Getting cart items</div>
  </div>
</template>
<script>
export default {
    props: ["cartItems"],
    mounted() {
        console.log("Cart comp: ");
        // const {Target} = this.cartItems
        console.log(this.cartItems);
    },
}
</script>
<style scoped>
.modal {
    height: 100% !important;
    width: 100%;
}
</style>
