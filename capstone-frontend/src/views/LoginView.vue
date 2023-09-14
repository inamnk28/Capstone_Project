<template>
    <div class="container">
        <div class="form-container">
                <p class="title">Login</p>
                <form class="form" @submit.prevent="userLogin">
                    <div class="input-group">
                        <label for="email" class="fs-5 text-white">Email:</label>
			            <input type="email" name="email" id="email" placeholder="" v-model="form.emailAdd" required>
                    </div>
                    <div class="input-group mt-2">
                        <label for="password" class="fs-5 text-white">Password:</label>
			            <input type="password" name="password" id="password" placeholder=""  v-model="form.userPass" required>
                       
                    </div>
                    <button class="submit mt-4 fs-4" type="submit">Log in</button>
                    <p class="signin mt-4">Don't have an account ? <router-link to="/user" class="fs-4">Register</router-link> </p>
                </form>
            </div>
    </div>
</template>
<script>
import router from '../router/index'
import Swal from "sweetalert2";
    export default{
      data() {
    return {
      form:{
        emailAdd: "",
        userPass: "",
      }
    };
  },
 
  methods: {
  async userLogin() {
  console.log("Reached");
  try {
    const payload = {
      emailAdd: this.form.emailAdd,
      userPass: this.form.userPass,
    };
    const respond = await this.$store.dispatch("loginUser", payload);
    console.log(payload);
    console.log(respond);
    if (respond.status === 200 && respond.data.token && respond.data.result) {
      await Swal.fire({
        icon: "success",
        title: "Logged in Successfully",
        text: "You are now logged in!",
      });
      router.push("/");
    } else {
      const errMsg = respond.data.message || "Unexpected error";
      await Swal.fire({
        icon: "error",
        title: "Login failed",
        text: errMsg,
      });
    }
  } catch (err) {
    console.error("Error while logging in: ", err);
  }
},


    }
  }
</script>