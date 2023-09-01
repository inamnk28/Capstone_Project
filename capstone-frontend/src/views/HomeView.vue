<template>
  <div class="just">
     <div class="container landing overflow-x-hidden">
    <p class="fw-bold mt-3 text-uppercase fs-3 text-center">final reductions</p>
    <p class="fw-bold fs-6 text-center">Limited Stock Available</p>
    <div class="text-center"><button class="border-0 text-white fw-bold bg-black px-1">Shop All</button></div>
    <div class="row justify-content-center mx-auto mt-5">
      <div class="mx-3 img-box col-lg-4 col-md-4 col-12">
        <div class="img1"></div>
        <div class="little-desc">
          <p class="fw-bold">JR Men Footwear 1812 A <br><span class="mt-0 text-decoration-line-through">R6,960.00</span><span class="fw-bolder"> R4,683.00</span></p>
        </div>
      </div>
      <div class="mx-3 img-box col-lg-4 col-md-4 col-12">
        <div class="img2"></div>
        <div class="little-desc">
          <p class="fw-bold">Dsquared2 Mens T-Shirt<br><span class="mt-0 text-decoration-line-through">R5,960.00</span><span class="fw-bolder"> R2,713.00</span></p>
        </div>
      </div>
      <div class="mx-3 img-box col-lg-4 col-md-4 col-12">
        <div class="img3"></div>
        <div class="little-desc">
          <p class="fw-bold">Antony Morato Sneaker<br><span class="mt-0 text-decoration-line-through">R4,460.00</span><span class="fw-bolder"> R2,750.00</span></p>
        </div>
      </div>
    </div>
   </div>
   <div class="row overflow-x-hidden">
    <div class="shoe1 col-lg-6 col-md-6 col-12"></div>
    <div class="desc col-lg-6 col-md-6 col-12 bg bg-light text-center">
      <p class="fs-3 text-center">Final Reductions</p>
      <p class="fs-1 fw-bold text-center">Axel Arigato</p>
      <p class="fs-1 fw-bold text-center text-uppercase">now r4900</p>
      <p class="fs-4 fw-bold text-center text-uppercase">clean 180 bee bird black</p>
      <p class="fs-4 fw-bold text-center text-uppercase">was r7090</p>
      <div class="text-center"><button class="border-0 text-white fw-bold bg-black px-1">Shop Now</button></div>
    </div>
   </div>
   <div class="row overflow-x-hidden mb-5">
    <div class="desc col-lg-6 col-md-6 col-12 bg bg-light text-center">
      <p class="fs-3 text-center">Final Reductions</p>
      <p class="fs-1 fw-bold text-center">Axel Arigato</p>
      <p class="fs-1 fw-bold text-center text-uppercase">now r4900</p>
      <p class="fs-4 fw-bold text-center text-uppercase">clean 180 bee bird black</p>
      <p class="fs-4 fw-bold text-center text-uppercase">was r7090</p>
      <div class="text-center"><button class="border-0 text-white fw-bold bg-black px-1">Shop Now</button></div>
    </div>
    <div class="shoe2 col-lg-6 col-md-6 col-12"></div>
   </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'; 

export default {
  components: { SpinnerComp},
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
  .landing {
    font-family: montserrat;
  }
  .row {
    font-family: montserrat;
  }
  .bg {
    /* background-color: lightgrey; */
    padding-block: 5rem;
  }
  .img1 {
    background-image: url(https://i.postimg.cc/pTS9ThSx/JR-Mens-Footwear-18132-A.jpg);
    background-position: center;
    width: 100%;
    height: 350px;
    background-size: cover;
  }
  .img2 {
    background-image: url(https://i.postimg.cc/0NcnVnzf/Dsquared2-Mens-T-Shirt-S71-GD1273-S23009-100.jpg);
    background-position: center;
    width: 100%;
    height: 350px;
    background-size: cover;
    
  } 
  .img3 {
    background-image: url(https://i.postimg.cc/zBTn9kB6/ANTONY-MORATO-SNEAKER-STAGE-IN-TUMBLED-FAUX-MMFW01504-LE500156-1000.jpg);
    background-position: center;
    width: 100%;
    height: 350px;
    background-size: cover;
  }
  .img-box {
    width: 400px;
  } 
  .shoe1 {
    background-image: url(https://i.postimg.cc/ZYg8LSt7/axel-arigato2.jpg);
    background-position: center;
    width: 50%;
    height: 550px;
    background-size: cover;
  } 
  .shoe2 {
    background-image: url(https://i.postimg.cc/zG332LCT/axel-arigato.jpg);
    background-position: center;
    width: 50%;
    height: 550px;
    background-size: cover;
  } 
  @media screen and (max-width:768px) {
    .shoe1 {
      width: 100%;
    }
    .shoe2 {
      width: 100%;
    }
    .desc {
      width: 100%;
    }
  }
</style>
