import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: (route) => {
      return {
        nombre: "Almuerzo",
        descripcion: "Papas fritas con pollo asado",
        precio: 4600,
        cantidad: "Para 2 personas"
      };
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue'),
    props: (route) => {
      return {
      nombre: "Olivia Watsson",
      email: "OaWat28@gmail.com"
    }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
