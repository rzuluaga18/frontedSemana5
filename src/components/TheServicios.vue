<template>
  <v-app id="inspire">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      
    </v-navigation-drawer> -->

    <v-main id="main">
      <v-container>
        <v-row>
          <template v-for="n in 3" id="categoria">
            <v-col :key="n" class="mt-2" cols="12">
              <header id="header">Categoría {{ n }}</header>
            </v-col>

            <v-col v-for="j in 3" :key="`${n}${j}`" cols="6" md="4">
              <v-sheet :elevation="elevation" height="241">
                <v-card class="mx-auto" max-width="644" >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">OVERLINE</div>
                      <v-list-item-title class="headline mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="150"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text id="btn"> Learn more </v-btn>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "TheServicios",

  data: () => ({ show: false }),
};
</script>
<style scoped>
#header {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
#btn{
    background-color: #57048A;
  color: white;
  font-size: 13px;
  padding: 7px 14px;
  border-radius: 5px;
  border-bottom: 4px solid #1b032b;
}
</style>