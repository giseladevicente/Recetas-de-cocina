<template>
  <div class="app-container">
    <AppHeader /> 
      <router-view></router-view> <!-- WelcomePage.vue -->
    <AppFooter /> 
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; 
import Welcome from './components/Welcome.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  components: {
    AppHeader,
    Welcome,
    AppFooter
  }
};
</script>

<style>
.app-container {
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, contenido principal, footer */
  min-height: 100vh; 
}

.main-content {
  grid-area: main; 
  padding: 20px; 
}
</style>




