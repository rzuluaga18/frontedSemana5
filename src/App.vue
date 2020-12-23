<template>
  <v-app id="app">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        
        <v-col>
          <a class="navbar-brand">
            <img
              :src="require('@/assets/logo_neuro.png')"
              height="45"
              alt="logo"
            />
          </a>
        </v-col>

        <v-btn 
        v-for="([link, ruta]) in links"
        :key="link" 
        text id="buttons"
        :to="{name: ruta}"
        color="black"
        
        rounded
        >
        {{ link }}
        
          <!-- {{ link.text }} -->

          <!-- <router-link > {{ link.text }}</router-link> -->
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <!-- <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field> -->
          <v-btn v-for="auth in authentication" :key="auth" text id="buttons">
            <router-link :to="auth.ruta"> {{ auth.text }}</router-link>
          </v-btn>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main id="main">
      <router-view></router-view>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",

  components: {
    Home,
    TheFooter,
  },

  data: () => ({
    links: [
      [ "Inicio", "Home" ],
      [  "Nosotros",  "About" ],
      [  "Servicios",  "Servicios" ],
    ],
    authentication: [
      { text: "Login", ruta: "Login" },
      { text: "Sign In", ruta: "SignIn" },
    ],
  }),
};
</script>
<style>
#main {
  background: url("assets/fondoprincipal.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
#buttons { 
  color: white;
}
</style>
