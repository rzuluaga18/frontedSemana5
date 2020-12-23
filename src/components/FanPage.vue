<template>
   <div>

   <v-carousel 
   v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> 

  <br>
  <h1

  >Prueba</h1>
  <br>
  

  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
      
    >
      <v-btn
        v-for="([link, ruta]) in links"
        :key="link"
        :to="{name: ruta}"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
   
</div>
</template>


<script>

export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      links: [
        ['Home', 'Home'],
        // 'About Us',
        // 'Team',
        // 'Services',
        ['Login', 'Login'],
        // 'Contact Us',
      ],
    }),
}
</script>