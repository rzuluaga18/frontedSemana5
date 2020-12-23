<template>
    <v-container >
    <v-sheet min-height="70vh" rounded="lg" id="sheet">
        

        
        <v-sheet id="sheet-in" rounded="lg" class="align-center" >
        

            <header> Preguntas más frecuentes</header>
        </v-sheet>
            <div class="row">

      

            
        <div class="col-md-6" >
            <div class="box" id="box-left">
        <v-expansion-panels > 
            
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i" id="panel"
      >
        <v-expansion-panel-header>
          Item
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
            </div>
        </div>
        <div class="col-md-6" >
            <div class="box" id="box-right">
        <v-expansion-panels > 
            
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i" id="panel"
      >
        <v-expansion-panel-header>
          Item
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
            </div>
        </div>
   
   </div>
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
    opacity: 0.9;
    background: url('https://i.pinimg.com/564x/c4/13/5f/c4135fa75b6a0f990413a9f0b8c5e14c.jpg');
}
#sheet-in{
    opacity: 0.9;
}
#sheet-in header{
    color:#57048A;
  font-size: 40px;
  font-weight: 700;
   margin-bottom: 20px;
  align-content: flex-start ;
}
#panel{
    background-color: #003365;
    color: white;
    padding-left: 10px;
}

#box-left{
    padding-left: 10px;
}
#box-right{
    padding-right: 10px;
}

</style>