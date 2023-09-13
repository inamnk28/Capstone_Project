<template>
  <div class="container mt-3 p-2">
    <div class="d-flex justify-content-center">
    <div>
        <p class="title">Register</p>
    <p class="message text-black fs-4">Sign up now and get full access to our app.</p>
    <form class="form" @submit.prevent="registerUser">
      <div class="input-group d-flex justify-content-between">
        <label class="names">
          <input required placeholder="First Name" type="text" class="marg2 input names" v-model="firstName">
        </label>
        
        <label class="names">
          <input required placeholder="Last Name" type="text" class="marg input names" v-model="lastName">
        </label>
      </div>
      
      <div class="input-group">
        <label class="input-width my-2">
          <input required placeholder="Gender" type="text" class="input input-width" v-model="gender">
        </label>
        
        <label class="input-width my-2">
          <input required placeholder="Date of Birth" type="text" class="input input-width" v-model="userDOB">
        </label>
      </div>
      
      <label class="input-width my-2">
        <input required placeholder="Profile URL" type="text" class="input input-width" v-model="profileUrl">
      </label>
      
      <label class="input-width my-2">
        <input required placeholder="Email" type="email" class="input input-width" v-model="emailAdd">
      </label>
      
      <label class="input-width my-2">
        <input required placeholder="Password" type="password" class="input input-width" v-model="userPass">
      </label>
      
      <label class="input-width my-2">
        <input required placeholder="Role" type="text" class="input input-width" v-model="Role">
      </label>
      
      <button class="submit fs-4">Submit</button>
      <p class="signin text-black fs-5">Already have an account? <router-link class="fs-4" to="/login">Sign in</router-link></p>
    </form>
    </div>
    </div>
  </div>
</template>
<script>
import router from '../router/index'
import Swal from 'sweetalert2';

export default{
     data() {
        return {
            firstName: "",
            lastName: "",
            gender: "",
            userDOB: "",
            userRole: "",
            emailAdd: "",
            userPass: "",
            profileUrl: ""
           
          
     
        };
      },
      methods: {
        async registerUser(){
          
            try{
                const respond = await this.$store.dispatch("registerUser", {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    gender: this.gender,
                    emailAdd: this.emailAdd,
                    userDOB:this.userDOB,
                    userRole: this.userRole,
                    userPass: this.userPass,
                    profileUrl: this.profileUrl,
                });
                
                if(respond && respond.success){
                   await Swal.fire({
                        icon: "success",
                        title: "Registration successful",
                        text: "You are now registered, please log in",
                    })
                    
                    router.push("/user/login");
                    
                } else if (respond && respond.error){
                   await Swal.fire({
                        icon: "error",
                        title: "Registration failed",
                        text: respond.error || "Unexpected error",
                    });
                }
                
            } catch(e){
                console.error("Registration error: ", e);
            }
            
        },
      
   
}
};
</script>
<style scoped>
  .form {
    width: 710px !important;
  }
  input {
    height: 70px !important;
    border-radius: 0;
    border-color: black;
  }
  .input-width {
    width: 100%;
  }
  .names {
    width: 345px;
  }
  button {
    width: 150px;
    height: 50px;
  }
</style>