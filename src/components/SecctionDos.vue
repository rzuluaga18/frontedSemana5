<template>
  <v-container>
    <v-sheet min-height="70vh" rounded="lg" id="sheet">
      <!-- <div class="col-md-6">
        <div id="left-ctn">
          <div class="box">
            <header>Hello World!</header>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus provident ad fuga optio nisi ipsa, vitae dolor error
              voluptates amet dolores beatae asperiores cum dicta eum quae.
              Perspiciatis, eius beatae.
            </p>
            <button type="button" class="btn" id="btn-two">Learn more</button>
          </div>
        </div>
      </div> -->
      <div class="container text-center my-3" id="carousel-ctn">
        <header>Servicios</header>
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
                  <div class="col-md-4">

                    <div class="card card-body"
                    
                    >
                      <img
                        class="img-fluid"
                        src="http://placehold.it/380?text=1"
                      />
                       <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary" id="btn">Go somewhere</a>
                      
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
  opacity: 0.97;
}
#carousel-ctn header {
  color:#57048A;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  }

#btn{
    background-color: #57048A;
  color: white;
  font-size: 19px;
  padding: 7px 14px;
  border-radius: 5px;
  border-bottom: 4px solid #1b032b;
}
</style>