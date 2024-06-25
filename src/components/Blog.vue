<template>
    <div class="blog-page">
      <div class="container">
        <h2>Recetas de Cocina</h2>
        <hr>
        <div class="row">
          <!-- recetas -->
          <div class="col-md-6 mb-4 " v-for="recipe in recipes" :key="recipe.id">
            <div class="card">
              <img :src="recipe.image" class="card-img-top" alt="Imagen de la receta">
              <div class="card-body">
                <h5 class="card-title">{{ recipe.title }}</h5>
                <p class="card-text">{{ recipe.description }}</p>
                <div class="d-flex justify-content-center align-items-center">
                <router-link :to="'/blog/' + recipe.id" class="btn btn-primary fw-bold col-6 mt-3">Ver Receta</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

import { recipes } from '../data/recipes';

  export default {
    name: 'BlogPage',
    data() {
      return {
          recipes: recipes
      };
    }
  };
</script>
  
<style scoped>
  .blog-page {
    background-color: #E4C59E;
  }

  .btn {
  background-color: #803D3B;
  border-color: #803D3B
  }

</style>
  


  