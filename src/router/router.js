import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../components/Welcome.vue';
import BlogPage from '../components/Blog.vue';
import Post from '../components/Post.vue';
import AboutUs from '../components/About.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/blog', component: BlogPage },
  { path: '/blog/:id', component: Post },
  { path: '/about', component: AboutUs}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

