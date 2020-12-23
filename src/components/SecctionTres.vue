<template>
    <v-container >
    <v-sheet min-height="70vh" rounded="lg" id="sheet">
     
      <!-- <div class="col-md-6"
      v-for="item in this.$store.state.datosServicios"  
      >
        <h1                      
        >
          {{item.nombre}}
        </h1>

        <pre>
          {{item.descripcion}}
        </pre>
        
      </div> -->
    </v-sheet>
  </v-container>
</template>

<script>
export default {
    name: "SecctionTres"
}
</script>

<style scoped>
#sheet{
    opacity: 0.97;
}

</style>