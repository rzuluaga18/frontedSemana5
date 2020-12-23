<template>
  <v-app id="inspire">
  
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Ciclo 3</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
      icon
      class="mr-5"
      @click="salir()"
      >
      <v-icon>mdi-logout</v-icon>
      <span>Salir</span>

      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item 
        :to="{name:'Home'}"
        link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

        <v-list-group
        prepend-icon="mdi-book-open-page-variant"
        >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Landing Page</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, ruta], i) in admins"
            :key="i"
            :to="{name: ruta}"
        
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group v-if="this.$store.state.user.rol === 'Administrador'"
        prepend-icon="mdi-account-circle"
        >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, router], i) in cruds"
            :key="i"
            :to="{name: router}"
            
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
     
    </v-list>
  </v-card>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
       <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'ZonaPrivada',

  

  components: {
  },

  data: () => ({
    drawer: null,
    admins: [
        ['Categoria', 'mdi-clipboard-list-outline', 'Categoria'],
        ['Servicios', 'mdi-briefcase-check', 'Articulo'],
      ],
      cruds: [
        ['Permisos', 'mdi-account-multiple-outline', 'Usuario'],
        // ['Read', 'mdi-file-outline'],
        // ['Update', 'mdi-update'],
        // ['Delete', 'mdi-delete'],
      ],
    
    //
  }),
  created(){
    this.$store.dispatch('autoLogin');
  },
  methods:{
    salir(){
      this.$store.dispatch('salir');
    }
  }


};
</script>
