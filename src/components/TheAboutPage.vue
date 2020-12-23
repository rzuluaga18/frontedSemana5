<template>
  <v-container id="secction-uno">
    <v-sheet min-height="70vh" rounded="lg" id="sheet">
      
      <div class="col-md-12 tex-center" id="f-container">
        <div >
            <v-sheet id="info-ctn" rounded="lg" class="align-center">
                <header class="text-center">Conoce a nuestro equipo</header>
       
          <!-- <button type="button" class="btn " id="btn">
            Contáctanos
          </button>
          -->
            </v-sheet>
          
        </div>
      </div>
       <div class="container">
      <div class="row">
        <div
          class="col-xl-3 col-md-6 mb-4"
          v-for="(item, index) of team"
          :key="index"
        >
          <team-card v-bind:member="item" id="team-card"></team-card>
        </div>
      </div>
    </div>
    </v-sheet>
    
        <nuestros-clientes></nuestros-clientes>

  </v-container>
 
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'
import NuestrosClientes from './NuestrosClientes.vue';


export default {
  name: "TheAboutPage",
  components:{
      TeamCard,
    NuestrosClientes,
   

  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "Luis Carlos Arrieta Sierra",
          descripcion:
            "Estudiante de Ingeniería de sistemas en la Universidad Nacional, 31 años. Pasatiempo es jugar tenis. ",
          rol: "Analista de Software y Backend",
          image:
            "https://lh3.googleusercontent.com/-xzP3h9cTaL0/WeOwvJ1_eaI/AAAAAAAAAxQ/zz6xnDsZPrASd19sZWLswGh5TFHO2nnygCEwYBhgLKtMDAL1Ocqz-Moo9m9KKmwuaZF2YKW93IzhwK1FS4bNRbGBIRfdLU26qDU1tlm5l2E_v8F0rONYtcFsoakothwyr3VP59Sbx5PxvPLnRbKU8K6ByVt78eEBOyMhezVNlXvOEd5r15OXAoYBzynLlB6lObxgJoqkPc0XwM_pzghYpgZ1X5tg6IcLcdQCQ89QvHQPaWEWG1WTUgx5o7QqvTUSqekjRV5reM9464-kJZuZc3ExwSOfGx-GQGtpp60ATzdfZirp4UaRNYd7id3wCGFB81XhAcy28xstTnIboNEqt1pOEUy9HrPZijr3R-mGDRnoZ9DWykOUvQvSvLeQ3a1gEQ04lS-s1AMmqHL1IbSG-tUAjpro5D-WswxU6A1nEkWaIT1uIs2Gwg61qoM0TUem_UJorIS96RBDabHFSy2isolSriX62Nr297QVPbWfN_c4UmQHsZmToG-i_H_KPAN1fxzYRe6jpY7588TfOOi6uScRaaYA4e7usizJFRGPlvYUw-OAi8Me3ZMVP5WnR-blx4ya60rQhw8GYIz-kNPyJOicl1ihGB-NoTczP_Exp0llFPe6t-VYpd5qOGsIH31TKIOYUr6JGwE5ZSwlrCBPDY5eQ-0IwmOuw_gU/w140-h140-p/ppee.png",
        },
        {
          codigo: 2,
          nombre: "Angie Sofía Benito González",
          descripcion:
            "Estudiante de matemáticas en la Universidad Distrital, 22 años. Pasatiempo es ver series y/o películas.",
          rol: "Frontend y Tester",
          image: require("@/assets/Angie.jpg"),
        },
        {
          codigo: 3,
          nombre: "Ramiro Andrés Zuluaga Parra",
          descripcion:
            "Ingenierío electrónico de la Universidad del Quindio, 35 años. Pasatiempo es jugar fútbol.",
          rol: "Arquitecto de Software y Frontend",
          image: require("@/assets/Ramiro.jpg"),
        },
        {
          codigo: 4,
          nombre: "Cristiam David Bustos Fuentes",
          descripcion:
            "Estudiante de Ingeniería Industrial en la Universidad Del Norte, 21 años. Pasatiempo, jugar videojuegos y leer.",
          rol: "Backend",
          image: require("@/assets/Cristiam.jpeg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#btn {
  background-color: #57048a;
  color: white;
  font-size: 19px;
  padding: 7px 14px;
  border-radius: 5px;
  border-bottom: 4px solid #1b032b;

  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#f-container header {
  color: #57048a;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
}
#sheet{
    opacity: 0.9;
    background: url('https://i.pinimg.com/564x/c4/13/5f/c4135fa75b6a0f990413a9f0b8c5e14c.jpg');
}
#info-ctn{
    opacity: 0.9;
}
</style>