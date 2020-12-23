<template>

    <div class="card text-white border-0 shadow " style="background-color: #003365;">
        <div class="d-flex justify-content-center p-2">
        <img :src="member.image" class="card-image-top" height="200" alt="Foto del Integrante">
        </div>
        <div class="card-body text-center">
          <h5 class="card-title"> {{member.nombre}}</h5>
          <p class="card-text">   {{member.descripcion}} </p>
          <h5 class="card-text">   {{member.rol}} </h5>
          <h5 class="card-text text-secondary">  {{ member.codigo }}</h5>
         </div>
        <div class="card-footer">
          <small class="text-muted">Grupo 192</small>
        </div>
      </div>

</template>

<script>
export default {
    name: 'TeamCard',
    props: ["member"],
}
</script>

<style scoped>

</style>
