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

export default {
  name: 'Home',
  components: {
    SecctionUno, 
    SecctionDos, 
    SecctionTres    
  }
}
</script>
