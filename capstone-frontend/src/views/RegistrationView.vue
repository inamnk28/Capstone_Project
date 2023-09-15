<template>
  <div class="cont mt-3 p-2">
    <div class="d-flex justify-content-center">
    <div>
        <p class="title fw-bold fs-5">Register</p>
    <p class="message text-black fw-bold fs-3">Sign up now and get full access to our app.</p>
    <form class="form" @submit.prevent="registerUser">
      <div class="input-group d-flex justify-content-between">
        <label class="names my-2">
          <input required placeholder="First Name" type="text" class="bg-transparent marg2 input names" v-model="firstName">
        </label>
        
        <label class="names my-2">
          <input required placeholder="Last Name" type="text" class="bg-transparent marg input names" v-model="lastName">
        </label>
      </div>
      
      <div class="input-group">
        <label class="input-width my-2">
          <input required placeholder="Gender" type="text" class="bg-transparent input input-width" v-model="gender">
        </label>
        
        <label class="input-width my-2">
          <input required placeholder="Date of Birth" type="text" class="bg-transparent input input-width" v-model="userDOB">
        </label>
      </div>
      
      <label class="input-width my-2">
        <input required placeholder="Profile URL" type="text" class="bg-transparent input input-width" v-model="profileUrl">
      </label>
      
      <label class="input-width my-2">
        <input required placeholder="Email" type="email" class="bg-transparent input input-width" v-model="emailAdd">
      </label>
      
      <label class="input-width my-2">
        <input required placeholder="Password" type="password" class="bg-transparent input input-width" v-model="userPass">
      </label>
      
      <label class="input-width my-2">
        <input required placeholder="Role" type="text" class="bg-transparent input input-width" v-model="Role">
      </label>
      
      <button class="fw-bold border-0 bg-black text-white submit fs-4">Submit</button>
      <p class="signin text-white fs-5 fw-bold">Already have an account? <router-link class="fs-4" to="/login">Sign in</router-link></p>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
  .form {
    width: 100%;
    max-width: 710px;
  }
  .cont {
    font-family: montserrat !important;
    background-image: url(https://i.postimg.cc/xdM1k6c5/register-form.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  input {
    height: 70px !important;
    border-radius: 0;
    border-color: black;
  }
  ::placeholder {
    color: black;
    font-weight: bold;
  }
  .input-width {
    width: 100%;
  }
  .input-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .names {
    width: 345px !important; /* Adjust as needed for spacing between inputs */
  }
  button {
    width: 100%;
    max-width: 150px;
    height: 50px;
  }
   @media (max-width: 768px) {
    .names {
      width: 100% !important;
    }
    .input-group {
      flex-direction: column;
    }
  }
</style>