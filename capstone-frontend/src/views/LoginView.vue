<template>
    <div class="cont overflow-y-hidden">
      <div class="con2">
       <h1 class="title fs-1 text-white fw-bold">Login</h1>
    <div class="card">
        <form class="form" @submit.prevent="userLogin">
            <input type="email" name="email" id="email" placeholder="EMAIL" v-model="form.emailAdd" required>
            <input type="password" name="password" id="password" placeholder="PASSWORD"  v-model="form.userPass" required>
            <div class="buttons">
               <router-link to="/user" class="register-link">Register</router-link>
              <!-- <a href="#" class="register-link">Register</a> -->
              <button class="login-button submit" type="submit">Log in</button>
                <!-- <button type="submit" class="login-button">Login</button> -->
            </div>
        </form>
    </div>
    </div>
        <!-- <div class="form-container">
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
            </div> -->
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
   userLogin() {
  console.log("Reached");
  try {
    const payload = {
      emailAdd: this.form.emailAdd,
      userPass: this.form.userPass,
    };
    this.$store.dispatch("loginUser", payload);
    // console.log(payload);
    // console.log(respond);
    // if (respond.status === 200 && respond.data.token && respond.data.result) {
    //    Swal.fire({
    //     icon: "success",
    //     title: "Logged in Successfully",
    //     text: "You are now logged in!",
    //   });
    //   // router.push({{}});
    // } else {
    //   const errMsg = respond.data.message || "Unexpected error";
    //    Swal.fire({
    //     icon: "error",
    //     title: "Login failed",
    //     text: errMsg,
    //   });
    // }
  } catch (err) {
    console.error("Error while logging in: ", err);
  }
},


    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.cont {
  font-family: montserrat;
  background-image: url(https://i.postimg.cc/SQVn4t0b/login-form.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.con2 {
  overflow-y: hidden;
  margin-block: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.card {
  width: 300px;
  background-color: #1e213a;
  padding: 20px;
  border-radius: 10px;
  border-top: 4px solid #19d4ca;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ccc;
  color: #fff;
  transition: box-shadow 0.3s;
}

input:focus {
  box-shadow: 0 0 10px #19d4ca;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.login-button,
.register-link {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
  text-decoration: none;
}

.login-button {
  background-color: transparent;
  color: #19d4ca;
}

.login-button:hover {
  background-color: #19d4ca;
  color: #fff;
  box-shadow: none;
}

.login-button:active {
  box-shadow: 0 0 10px #19d4ca;
}

.register-link {
  color: #ccc;
  background-color: transparent;
}

.register-link:hover {
  color: #fff;
}

.register-link:active {
  box-shadow: 0 0 10px #ccc;
}

@media (max-width: 480px) {
  .card {
    width: 100%;
    max-width: 300px;
  }
}

</style>