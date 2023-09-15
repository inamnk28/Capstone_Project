<template>
    <div class="header w-100">
        <div class="routerlinks">
            <nav class="navbar navbar-expand-lg bg-white w-100">
                <div class="container-fluid">
                   <router-link class="navbar-brand links text-black fw-bold" to="/">RefinedGentBoutique</router-link>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                         <li class="nav-item ">
                            <router-link class="nav-link links text-black fw-bold fs-6 text-uppercase" to="/">Home</router-link>
                         </li>
                         <li class="nav-item ">
                            <router-link class="nav-link links text-black fw-bold fs-6 text-uppercase" to="/products">Products</router-link>
                         </li>
                         <li class="nav-item ">
                            <router-link class="nav-link links text-black fw-bold fs-6 text-uppercase" to="/about">About</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links text-black fw-bold fs-6 text-uppercase" to="/contact">Contact</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links text-black fw-bold fs-6 text-uppercase" to="/AdminView">Admin</router-link>
                         </li>
                         <li class="nav-item pt-2 mx-1">
                            <router-link class="bag nav-link links text-black fw-bold fs-6 text-uppercase" to="/cart"></router-link>
                         </li>
                         <!-- <li class="nav-item mx-1">
                            <router-link class="search nav-link links text-black fw-bold fs-6 text-uppercase" to="/search"></router-link>
                         </li> -->
                         <li class="nav-item mx-2 my-2">
                            <router-link class="user nav-link links text-black fw-bold fs-6 text-uppercase" to="/user"></router-link>
                         </li>
                      </ul>
                   </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.header {
    font-family: montserrat;
}
.navbar-nav {
    float: left;
}
.navbar-nav {
    margin-left: 25% !important;
}
.nav-link {
  display: inline-block;
  margin-right: 20px;
  color: #000;
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1.3;
  text-decoration: none;
  border-bottom: 1px solid rgba(190, 121, 13, 0.3);
  -moz-transition: ease 0.3s;
  -o-transition: ease 0.3s;
  -webkit-transition: ease 0.3s;
  transition: ease 0.3s;
}
.nav-link:hover, .nav-link:focus {
  color: #be790d;
  border-bottom: 10px solid rgba(190, 121, 13, 0.3);
}
.nav-link:active {
  border-bottom: 20px solid rgba(190, 121, 13, 0.3);
}
.bag {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url(https://i.postimg.cc/P5q6Wcy2/bag.jpg);
    background-position: center;
    background-size: cover;
}
 @media screen and (max-width: 991px) {
      .navbar-nav {
         margin-left: 0 !important;
      }
   }
.search {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(https://i.postimg.cc/63dLxJtV/small-search-icon-213735.png);
    background-position: center;
    background-size: cover;
}
.user {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-image: url(https://i.postimg.cc/Y08fBtVg/flaticon.png);
    background-position: center;
    background-size: cover;
}
</style>