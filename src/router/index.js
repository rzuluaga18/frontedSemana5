import Vue from 'vue'
import VueRouter from 'vue-router'
// import { nextTick } from 'vue/types/umd'
import Home from '../views/Home.vue'
import store from '../store'
// import swal from 'sweetalert'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      public: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      public: true
    }
  },

    {
      path: '/servicios',
      name: 'Servicios',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue'),
      meta:{
        public: true
      }
  },

  {
    path: '/privado',
    name: 'Privado',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "privado" */ '../views/Privado.vue'),
    meta:{
      // auth: true,
      Administrador: true,
      Vendedor: true
    },
    children: [

      {
        path: 'categorias',
        name: 'Categoria',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Categoria.vue'),
        meta:{
          // auth: true,
          Administrador: true,
          Vendedor: true
        }
      },
    
      {
        path: 'usuarios',
        name: 'Usuario',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue'),
        meta:{
          // auth: true,
          Administrador: true,
        }
      },
    
      {
        path: 'articulos',
        name: 'Articulo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue'),
        meta:{
          // auth: true,
          Administrador: true,
          Vendedor: true
        }
      }
      
    ]
  }

  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  //Verifica si la ruta que va a acceder es pública
  if(to.matched.some(record => record.meta.public)){
    next(); //si es correcto siga a donde necesite
    //Sino verificar si esa ruta es privada (auth)
  }else if(to.matched.some(record => record.meta.Administrador)){
    //Este if verifica si esta autenticado, verificando que exista un usuario
        if(store.state.user){
            next();
        }else{ //sino, lo regresa al login
          next({name: 'Login'});
        } 
      
  // }else if(to.matched.some(record => record.meta.Vendedor)){
  //     if(store.state.user.rol === 'Vendedor'){
  //     next();
  //     }else{ //sino, lo regresa al login
  //     next({name: 'Login'});
  // } 
  }else{
    next();//siga a donde necesite
  }
})

export default router
