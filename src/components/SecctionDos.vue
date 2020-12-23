<template>
  <v-container>
    <v-sheet min-height="70vh" rounded="lg" id="sheet">
      

      <div class="container text-center my-3" id="carousel-ctn">
        <v-sheet id="info-ctn" rounded="lg" class="align-center">
        <header>Servicios</header>
          </v-sheet>
        
        <div class="row mx-auto my-auto">
          <div
            id="recipeCarousel"
            class="carousel slide w-100"
            data-ride="carousel"
          >
            <div class="carousel-inner w-100" role="listbox">
              <div class="carousel-item active"
                            
              >
                <div class="row">

                  <!-- Primerc Carrusel -->
                  <div class="col-md-4"
                  v-for="item in this.$store.state.datosServicios" 
                  >

                    <div class="card card-body"
                    
                    >
                      <img
                        class="img-fluid"
                        src="http://placehold.it/380?text=1"
                      />
                       <h5 class="card-title">{{item.nombre}}</h5>
                        <p class="card-text">
                          {{item.descripcion}}
                        </p>
                        <a href="#" class="btn btn-primary" id="btn">Ver más..</a>
                      
                    </div>

                  </div>
                  <!-- Fin carrusel -->

              

                  
                </div>
              </div>
                         
            </div>
            <a
              class="carousel-control-prev w-auto"
              href="#recipeCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next w-auto"
              href="#recipeCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-dark border border-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  name: "SecctionDos",
  data: {
    servicios: [
      'Servicio 1',
      'Servicio 2',
      'Servicio 3'

    ]
  }
};
</script>



<style scoped>
#sheet {
  opacity: 0.9;
  background: url('https://i.pinimg.com/564x/c4/13/5f/c4135fa75b6a0f990413a9f0b8c5e14c.jpg');
}
#carousel-ctn header {
  color: #57048A;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  align-content: flex-start ;
  }

#btn{
    background-color: #57048A;
  color: white;
  font-size: 19px;
  padding: 7px 14px;
  border-radius: 5px;
  border-bottom: 4px solid #1b032b;
}
#info-ctn{
    opacity: 0.9;
}
</style>