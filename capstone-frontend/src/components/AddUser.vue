<template>
    <div class="container justify-content-center">
            <hr>
            <h1 class="display-5 fs-4 text-center">Admin</h1>
            <hr>
        <form action="" class="row justify-content-center" id="productForm" @submit.prevent="addNewUser">
            <div class="mb-2">
                <input type="text" name="" id="firstName" v-model="newUser.firstName" placeholder="Enter your name..." required>
            </div>
            <div class="mb-2">
                <input type="text" name="" id="lastName" v-model="newUser.lastName" placeholder="Enter your last name..." required>
            </div>
            <div class="mb-2">
                <input type="number" id="userDOB" v-model="newUser.userDOB" placeholder="2004-06-28" required>
            </div>
            <div class="mb-2">
                <input type="text" id="gender" v-model="newUser.gender" placeholder="State your gender..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="userRole" v-model="newUser.userRole" placeholder="userRole..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="emailAdd" v-model="newUser.emailAdd" placeholder="Enter email address..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="userPass" v-model="newUser.userPass" placeholder="Enter password..." required>
            </div>
            <div class="mb-2">
                <input type="text" id="profileUrl" v-model="newUser.profileUrl" placeholder="Enter image URL..." required>
            </div>
            <div class="mb-2">
                <button class="border-0 bg-black text-white fw-bold" type="submit" id="addNewUser">Add to Store</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newUser: {
                firstName: "",
                lastName: "",
                userDOB: "",
                gender: "",
                userRole: "",
                emailAdd: "",
                userPass: "",
                profileUrl: "",
            }
        };
    },
    methods: {
        async addNewUser() {
            try {
                await this.$store.dispatch("addUser", this.newUser);
                this.$router.push("/admin");
                this.newUser = {
                    firstName: "",
                    lastName: "",
                    userDOB: "",
                    gender: "",
                    userRole: "",
                    emailAdd: "",
                    userPass: "",
                    profileUrl: "",
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