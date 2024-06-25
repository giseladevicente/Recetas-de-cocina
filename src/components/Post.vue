
  <template>
    <div class="post-page">
      <div class="container">
        <div class="card" v-if="recipe">
          <div class="d-flex justify-content-between align-items-center">
            <div class="text-center m-auto leyenda-card fw-bold">
            <h2 class="mb-4">{{ recipe.title }}</h2>
            <p>{{ recipe.description }}</p>
            </div>
            <img :src="recipe.image" class="card-img-top w-50" alt="Imagen de la receta">
        </div>
          <div class="card-body">
            <h4>Ingredientes:</h4>
            <ul>
                <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
              </ul>
            <h4>Instrucciones:</h4>
            <ol>
                <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
            </ol>
            <div class="d-flex justify-content-center align-items-center">
            <router-link to="/blog" class="btn btn-primary fw-bold col-4 mt-3">Volver a Recetas</router-link>
          </div>
          </div>
        </div>
        <div v-else>
          <p>Receta no encontrada.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { recipes } from '../data/recipes';  // Importación de recetas
  
  export default {
    name: 'Post',
    data() {
      return {
        recipe: null  
      };
    },
    created() {
      const recipeId = this.$route.params.id;
      this.recipe = recipes.find(recipe => recipe.id == recipeId);
    }
  };
  </script>
  
  <style scoped>
.post-page, .card-body {
  background-color: #E4C59E;
}

  .btn {
    background-color: #803D3B;
    border-color: #803D3B;
  }

  .leyenda-card {
    color: #000;
  }
  </style>
  
  

  
  
  