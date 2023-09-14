<template>
  <div>
    <CartComp :cartItems="cartItems"/>
  </div>
</template>
<script>
import CartComp from "@/components/CartComp.vue";
export default {
  components: { CartComp },
  computed: {
    cartItems() {
      return JSON.parse(localStorage.getItem('cart'));
    },
  },
  methods: {
   
    // async updateQuantity(item) {
    //   await this.$store.dispatch("updateCartItemQuantity", item);
    // },
    // async updateQuantity(cartId, newQuantity) {
    //   await this.$store.dispatch("updateCartQuantity", {
    //     cartId,
    //     quantity: newQuantity,
    //   });
    // },
    // decreaseQuantity(item) {
    //   if (item.quantity > 1) {
    //     item.quantity--;
    //     this.updateQuantity(item.cartId, item.quantity);
    //   }
    // },
    // increaseQuantity(item) {
    //   item.quantity++;
    //   this.updateQuantity(item.cartId, item.quantity);
    // },
    // async addToCart(productID, quantity) {
    //   await this.$store.dispatch("addToCart", { productID, quantity });
    // },
    // async removeFromCart(cartID) {
    //   await this.$store.dispatch("removeFromCart", cartID);
    // },
    deleteItem(cartID) {
      console.log("Deleting item with cartID:", cartID);
      this.$store.dispatch("removeFromCart", cartID);
    },
  },
  created() {
    const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData?.result?.userID) {
        const userID = userData.result.userID;
        console.log("view - userID: ", userID);
         this.$store.dispatch("getCartItems", userID);
      } else {
        console.error("User data or userId not found in local storage");
      }
    
  },
};
</script>
