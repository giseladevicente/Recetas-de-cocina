<template>
  <div class="welcome-container d-flex justify-content-center align-items-center vh-100">
    <div class="text-center">
      <h1 class="my-5">Bienvenido a Recetas de Cocina</h1>

      <div id="carouselExampleAutoplaying" class="carousel slide m-auto w-75" data-bs-ride="carousel">
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/src/assets/imgs/Caesar_salad.jpg" class="d-block w-100 carousel-img" alt="Ensalada Caesar">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/imgs/Espaguetis_Boloñesa.jpg" class="d-block w-100 carousel-img" alt="Espaguetis boloñesa">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/imgs/Panqueques.jpg" class="d-block w-100 carousel-img" alt="Panqueques">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/imgs/Panecillos-de-queso.jpg" class="d-block w-100 carousel-img" alt="Pan de queso">
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <p class="mt-4 fs-3">Explora nuestras deliciosas recetas y disfruta cocinando.</p>
      <router-link to="/blog" class="btn btn-primary text-light fw-bold col-4 mt-3 mb-5" >Ir al Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
};
</script>


<style scoped>
.welcome-container {
  background-color: #E4C59E;
}

.btn {
  background-color: #803D3B;
  border-color: #803D3B
}

.carousel-img {
  height: 400px;
  object-fit: cover;
}

</style>



