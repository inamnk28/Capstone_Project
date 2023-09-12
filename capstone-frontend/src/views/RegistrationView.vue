<template>
  <section class="reg">

    <div class="container mt-5 p-2">
        <form class="form bg-black" @submit.prevent="registerUser">
                    <p class="title">Register </p>
                    <p class="message text-white fs-4">Signup now and get full access to our app. </p>
                    <div class="flex">
                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="firstName">
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="lastName">
                            <span>Lastname</span>
                        </label>
                    </div>  
                    <label>
                            <input required="" placeholder="" type="text" class="input" v-model="gender">
                            <span>Gender</span>
                        </label>
                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="userDOB">
                            <span>Date of Birth</span>
                        </label>
                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="profileUrl">
                            <span>ProfileUrl</span>
                        </label>
                   
                    <label>
                        <input required="" placeholder="" type="email" class="input" v-model="emailAdd">
                        <span>Email</span>
                    </label> 
                        
                    <label>
                        <input required="" placeholder="" type="password" class="input" v-model="userPass">
                        <span>Password</span>
                    </label>
                    <label>
                        <input required="" placeholder="" type="text" class="input" v-model="Role">
                        <span>Role</span>
                    </label>
                    <button class="submit fs-4">Submit</button>
                    <p class="signin text-white fs-5">Already have an account ? <a href="/user/login" class="fs-4">Signin</a> </p>
</form>

    </div>
    <div class="mt-5">
      <Footer/>
    </div>
  </section>
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