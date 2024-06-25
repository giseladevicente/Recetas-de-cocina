<template>
  <div class="about-page py-5">
    <div class="container">
      <h2 class="my-4 text-center">Quiénes Somos</h2>
      <p class="text-center">Bienvenidos a nuestra página de recetas de cocina. Somos un equipo apasionado por la gastronomía y dedicados a compartir las mejores recetas con ustedes.</p>
      <h3 class="my-4 text-center">Nuestro Equipo</h3>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-4 mb-4" v-for="member in team" :key="member.id">
          <div class="card h-100 text-center">
            <div class="card-img-container">
              <img :src="member.image" :alt="member.name" class="card-img-top team-member-img">
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ member.name }}</h4>
              <h6 class="card-subtitle mb-2 text-muted">{{ member.role }}</h6>
              <p class="card-text">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import teamMember1 from '../assets/imgs/JuanPerez.jpg';  
  import teamMember2 from '../assets/imgs/mariaGomez.webp';  
  
  export default {
    name: 'AboutPage',
    data() {
      return {
        team: [
          {
            id: 1,
            name: 'Juan Pérez',
            role: 'Chef Principal',
            bio: 'Juan es un chef con más de 20 años de experiencia en la cocina internacional.',
            image: teamMember1
          },
          {
            id: 2,
            name: 'María Gómez',
            role: 'SubChef',
            bio: 'María es una apasionada de la repostería y la cocina saludable.',
            image: teamMember2
          }
        ]
      };
    }
  };
  </script>
  
<style scoped>
  .about-page {
    background-color: #E4C59E;;
  }

.card-img-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.team-member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  </style>
  
  