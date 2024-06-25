import './assets/main.css';

import { createApp } from 'vue'; // createApp crea la instancia de la aplicación Vue.
import App from './App.vue'; 
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; // importa el JavaScript de bootstrap 

createApp(App).use(router).mount('#app'); 





