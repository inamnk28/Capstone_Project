import { createStore } from 'vuex'
import axios from 'axios';
import Swal from 'sweetalert2'

const dbConnection = "http://localhost:5000/";

export default createStore({
  state: {
    products: null,
    product: null,
    deleteProduct: null,
    users: null,
    user: null,
    deleteUser: null,
    filteredProducts: null,
    token: null,
    items: []
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setDelete: (state, deleteProduct) => {
      state.deleteProduct = deleteProduct;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setDeleteUser: (state, deleteUser) => {
      state.deleteUser = deleteUser;
    },
    setFilteredProducts: (state, filteredProducts) => {
      state.filteredProducts = filteredProducts;
    },
    setToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    async getProducts(context) {
      try {
        const response = await fetch(`${dbConnection}products`);
        
        if(!response.ok) {
          throw Error("Failed to fetch products");
        } else {
          const data = await response.json();
          const products = data;
          context.commit("setProducts", products);
        }
      } catch (err) {
        context.commit("setProducts", null); // or an empty array to clear the products on error
        console.log("Failed to get products", err.message);
      }
    },
    // async getAllProducts(context) {
    //   try {
    //     const response = await fetch(`${dbConnection}products/all`);
        
    //     if (!response.ok) {
    //       throw Error("Failed to fetch all products");
    //     } else {
    //       const data = await response.json();
    //       const products = data;
    //       context.commit("setProducts", products);
    //     }
    //   } catch (err) {
    //     context.commit("setProducts", null);
    //     console.error("Failed to get all products", err.message);
    //   }
    // },
    async getProductById(context, product_id) {
      try {
        const response = await fetch(`${dbConnection}products/${product_id}`);
        if(!response.ok) {
          throw Error("Failed to fetch product");
        } else {
          const data = await response.json();
          console.log(data);
          const product = data
          context.commit("setProduct", product);
          console.log(product)
        }
      } catch (err) {
        context.commit("Failed to get product", err.message);
        console.log("Failed to get product", err.message);
      }
    },
    async searchProducts({ commit }, searchQuery) {
      try {
        const response = await fetch(`${dbConnection}products/search?query=${searchQuery}`);
        
        if (!response.ok) {
          // Handle non-successful responses, e.g., with an error message or throw an error.
          throw new Error(`Request failed with status ${response.status}`);
        }
    
        const data = await response.json();
        
        if (data) {
          commit("setProducts", data);
        } else {
          // Handle empty responses here, e.g., by setting an empty product list.
          commit("setProducts", []);
        }
      } catch (error) {
        console.error("Failed to search products", error);
      }
    },
    // async getAllProducts(context) {
    //   try {
    //     const response = await fetch(`${dbConnection}products/all`);
        
    //     if (!response.ok) {
    //       throw Error("Failed to fetch all products");
    //     } else {
    //       const data = await response.json();
    //       const products = data;
    //       context.commit("setProducts", products);
    //     }
    //   } catch (err) {
    //     context.commit("setProducts", null);
    //     console.error("Failed to get all products", err.message);
    //   }
    // async searchProducts({ commit }, searchQuery) {
    //   try {
    //     const response = await fetch(`${dbConnection}products/search?query=${searchQuery}`);
    //     const data = await response.json();
    //     commit("setProducts", data);
    //   } catch (error) {
    //     console.error("Failed to search products", error);
    //   }
    // },
    async addProduct(context, newProductData) {
      try {
        const response = await fetch(`${dbConnection}products`, {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProductData),
        });
        if (!response.ok) {
          throw new Error(`Failed to add product. Status: ${response.status}`);
        } 
        await context.dispatch("getProducts");
        console.log("Product added successfully!")
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    async getFilteredProducts({ commit }, categoryId) {
      try {
        const response = await fetch(`${dbConnection}products/category/${categoryId}`);
        if (!response.ok) {
          throw Error("Failed to fetch filtered products");
        }
        const data = await response.json();
        commit("setFilteredProducts", data);
      } catch (error) {
        console.error("Failed to get filtered products", error);
      }
    },
    
    async deleteProduct(context, product_id) {
      try {
        context.commit("setDelete", null);
        const response = await fetch(`${dbConnection}products/${product_id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`failed to delete product. Status: ${response.status}`);
        }
        context.commit("deleteProduct", product_id);
        context.commit("setDelete", "success");
      } catch (error) {
        console.log("error deleting product:", error)
        context.commit("setDelete", "error")
      }
    },
    async updateProduct(context, product) {
      try {
        const response = await fetch(`${dbConnection}products`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product_name: product.product_name,
            quantity: product.quantity,
            price: product.price,
            description: product.description,
            category_id: product.category_id,
            primary_image_url: product.primary_image_url
          }),
         }
        );
        if (!response.ok) {
          throw new Error(`failed to update product : ${response.status}`);
        }
        this.product_name = '';
        this.quantity = '';
        this.price = '';
        this.category = '';
        this.prodUrl = '';

        context.dispatch('getProducts');
        this.$router.push('/admin'); 
      } catch (error) {
        alert(error);
      }
    },

/*===================================================  USERS ACTIONS  =============================================================*/
async getUsers(context) {
  try {
    const response = await fetch(`${dbConnection}Users`);
    
    if(!response.ok) {
      throw Error("Failed to fetch users");
    } else {
      const data = await response.json();
      const users = data;
      context.commit("setUsers", users);
    }
  } catch (err) {
    context.commit("setUsers", null); // or an empty array to clear the users on error
    console.log("Failed to get users", err.message);
  }
},
async registerUser(context, payload) {
  console.log("Reached");
  try {
    const response = await axios.post(`${dbConnection}register`, payload);
  //  console.log("Res: ", res)
    const user = response.data;
    context.commit("setUser", user);
    if (response.status === 200) {
      await Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered.",
      });
      // router.push("/us");
    } else {
      await Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "An error occurred during registration.",
      });
    }
  } catch (e) {
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: e.message,
    });
  }
},
async loginUser(context, payload) {
  try {
    const response = await axios.post(`${dbConnection}login`, payload);
    if (response.status === 200) {
      const { token, user } = response.data;
      console.log(response.data);
      
      context.commit("setToken", token);
      console.log(token);
      context.commit("setUser", user);
      // Store user data in local storage
      localStorage.setItem("userToken", token);
      localStorage.setItem("userData", JSON.stringify(response.data));
      // return response;
      // window.location.reload();
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during login.",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
},
// async getUser(context, userID) {
//   try {
//     const response = await fetch(`${dbConnection}users/${userID}`);
//     if(!response.ok) {
//       throw Error("Failed to fetch user");
//     } else {
//       const data = await response.json();
//       const user = data.result[0];
//       context.commit("setUser", user);
//       console.log(user)
//     }
//   } catch (err) {
//     context.commit("Failed to get user", err.message);
//     console.log("Failed to get user", err.message);
//   }
// },
async addUser(context, newUserData) {
  try {
    const response = await fetch(`${dbConnection}register`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
    if (!response.ok) {
      throw new Error(`Failed to add user. Status: ${response.status}`);
    } 
    await context.dispatch("getUsers");
    console.log("User added successfully!")
  } catch (error) {
    console.error("Error adding user:", error);
  }
},
// async deleteUser(context, userID) {
//   try {
//     context.commit("setDeleteUser", null);
//     const response = await fetch(`${dbConnection}users/${userID}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error(`failed to delete user. Status: ${response.status}`);
//     }
//     context.commit("removeUser", userID);
//     context.commit("setDeleteUser", "success");
//   } catch (error) {
//     console.log("error deleting user:", error)
//     context.commit("setDeleteUser", "error")
//   }
// },
// async updateUser(context, user) {
//   try {
//     const response = await fetch(`https://full-stack-eomp-7rin.onrender.com/users/${user.userID}`,
//     {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         userAge: user.userAge,
//         Gender: user.Gender,
//         userRole: user.userRole,
//         emailAdd: user.emailAdd,
//         userPass: user.userPass,
//         userProfile: user.userProfile,
//       }),
//      }
//     );
//     if (!response.ok) {
//       throw new Error(`failed to update user : ${response.status}`);
//     }
//     this.firstName = "",
//     this.lastName = "",
//     this.userAge = "",
//     this.Gender = "",
//     this.userRole = "",
//     this.emailAdd = "",
//     this.userPass = "",
//     this.userProfile = "",

//     context.dispatch('getUsers');
//     this.$router.push('/admin'); 
//   } catch (error) {
//     alert(error);
//   }
// },
  },
  modules: {
  }
})
