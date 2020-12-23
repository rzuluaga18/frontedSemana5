<template>
  <div>

<!-- <fan-page></fan-page> -->
<secction-uno></secction-uno>
<secction-dos> </secction-dos>
<secction-tres> </secction-tres>

  </div>



</template>

<script>
// @ is an alias to /src
// import FanPage from '@/components/FanPage.vue'
import SecctionUno from '../components/SecctionUno.vue'
import SecctionDos from '@/components/SecctionDos.vue'
import SecctionTres from '@/components/SecctionTres.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    SecctionUno, 
    SecctionDos, 
    SecctionTres    
  },

  data:() => ({

    articulos: [],

  }),

  created(){
    this.list()
  },

  methods: {
    
    list(){
      let item = [];
      this.$store.state.datosServicio = item;
      this.$store.dispatch('boorar');
   
      axios.get('http://localhost:3000/api/articulo/list')
      .then(response =>{
        this.articulos = response.data;
        this.cargando = false;  
        //agregado para capturar servicios con e estado 1
        for(item of response.data){
          if(item.estado === 1){
            this.$store.state.datosServicio = item;
            this.$store.dispatch('saveServicios');
            
          }
        }  
        console.log(this.$store.state.datosServicios);  
        // console.log(response.data);   
      }, {
        headers: {
          token: this.$store.state.token
        }
        })
      .catch(error =>{
        console.log(error);
      })
    }

  }
      

  
}
</script>
