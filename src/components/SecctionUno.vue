<template>
    <v-container id="secction-uno">
        <v-sheet min-height="70vh" rounded="lg" id="sheet">
          <!-- <v-row >
              <v-col id="lef-ctn">
               <header> Hello World!</header>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus provident ad fuga optio nisi ipsa, vitae dolor error voluptates amet dolores beatae asperiores cum dicta eum quae. Perspiciatis, eius beatae.
                    </p>
                     
              </v-col> -->
              <!-- <v-col id="right-ctn">
                  <img src="@/assets/fondo.png" alt="fondo neuro">
              </v-col>
               -->
          
              <div class="col-md-6">
            <div id="left-ctn">
                <div class="box">
                    <header> Hello World!</header>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus provident ad fuga optio nisi ipsa, vitae dolor error voluptates amet dolores beatae asperiores cum dicta eum quae. Perspiciatis, eius beatae.
                    </p>
                    <button type="button" class="btn" id="btn-two">
                        Learn more

                    </button>

                </div>
                
            </div>

        </div>

        
          
          
        </v-sheet>
        
      
        </v-container>
</template>
<script>
export default {
  name: "SecctionUno",
};
</script>
<style scoped>
#secction-uno {
  background: url("") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

#sheet {
  opacity: 0.97;
}

#left-ctn{
   position: relative;
    background-color: white;
    border-radius: 25px;
    height: 100%;
    padding: 25px;
    padding-left: 50px;
    opacity: .97;
}
#left-ctn header{
    color:#57048A;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
}
</style>