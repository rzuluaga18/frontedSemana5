<template>
  <v-container>
    <v-sheet min-height="70vh" rounded="lg" id="sheet" class="text-center">
        <header> Nuestros Clientes</header>
      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" >
          
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-container>
</template>



<script>
export default {
  name: "NuestrosClientes",
  data() {
    return {
      
      items: [
        {
          src: 'https://lh3.googleusercontent.com/proxy/AhJSzhInTA_mVOatIHw0PreNJ5FLm7gEPuqWEG2f_Nyi-lq7mPgPK-gVsQL825xEMb_lHkeExp94VYziRckvCOQ4JHrRZlaBXVpAPZEt6Jmc_SWmb0jb2FGAx_7Y',
        },
        {
          src: 'https://www.seoclerk.com/pics/000/801/867/6ef1747763ef639670ded699f7e7a076.jpg',
        },
        {
          src: 'https://www.smallbusinesslogodesign.com/logo-design-samples.jpg',
        },
        {
          src: 'https://5933cf15-a-9579df86-s-sites.googlegroups.com/a/my.westminster.ac.uk/business-development-consultant-service/business-portfolio-examples-1/business-logo.png?attachauth=ANoY7cpWSXfmBqQJrDtHhxvqnayN79o0bDZNaNjS9ezkBX-6BtvTbIHCD4s4QNg5xZeEDjIy5zDSzFyV2QvBDgt5yDZxzFkgT8eX0LDYvn4Fb8nfAUbJbXEZsvh-1LRJhH102HJDRo-ENFiKRFqKxrvUtkMceCafY4F_JD60pJls46JjoKGyq8QJL4bgRa10VZO6I6Ef48fpx3YigFxSZJzH9tgDjvl7k5BupBe4HlfdedM6BAphDZh0DDPim8buEP8lftBUvC86cjGq1AsljDfrqHxz0yXp5jAlVVYijVLTdsJK9a2BzUI%3D&attredirects=0',
        },
      ],
    };
  },
};
</script>
<style scoped>
#sheet header{
     color:#57048A;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;

}
</style>