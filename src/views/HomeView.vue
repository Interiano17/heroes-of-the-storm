<template>
  <div>
    <v-col color="white" variant="outlined" class="text-center container" cols="12">
      <h1 class="text">Desafía las expectativas de los MOBA</h1>
      <h3 class="text">Épicos héroes y acción sin cesar en múltiples campos de batalla</h3>
      <v-btn to="/heroes" color="btn orange darken-3" >Ver Héroes</v-btn>    
    </v-col>
    
    <div class="description bg-purple-darken-1 text-center">
      <h4 class="text">¡Te damos la bienvenida al Nexo! ¡En este reino entre reinos, todo es posible! Elige entre decenas de héroes legendarios de todo el panteón de Blizzard, personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el género. ¡Esto no es un MOBA promedio, esto es Heroes of the Storm!</h4>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'HomeView',

    components: {
      
    },
  }
</script>

<style scoped>
  div{
    margin-top: 6em;
  }
  .text, .btn{
    margin-top: 0.5em;
  }
  .text, .btn{
    color:white;
  }
  .container{
    width: 700px;
    border: 2px solid white;
  }
  .description{
    padding-top: 1em;
    padding-bottom: 1em;
    background: rgba(255, 0, 242, 0.4);
  }
</style>
