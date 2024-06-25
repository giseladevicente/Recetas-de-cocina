
 <template>
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand text-light mr-10">Recetas de Cocina</router-link>
        <div class="collapse navbar-collapse"  id="navbarNav">
          <ul class="navbar-nav mt-2">
            <li class="nav-item">
              <router-link to="/" class="nav-link link-primary text-light">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link link-primary text-light">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link link-primary text-light">¿Quienes somos?</router-link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  </template>
  
  <script >
  export default {
    name: 'AppHeader'
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #AF8260;
  }

  .navbar-collapse {
    flex-grow: 0;
  }

  </style>
  
 