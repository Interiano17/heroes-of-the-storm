<template>
    <div class="hero">
        <v-main>
            <v-container>
                <h1 class="text-center">Bienvenido(a) {{ currentUser.email }}</h1>

                <v-table
  class="centeredTable"
  fixed-header
  height="300px"
  >
    <thead>
      <tr>
        <th class="text-center">
          Héroe 
        </th> 
        <th class="text-center">
          Nombre 
        </th> 
        <th class="text-center">
          Función 
        </th> 
        <th class="text-center">
          Título 
        </th> 
        <th class="text-center">
          Ataque 
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(hero, key, index) in heroes"
        :key="index"
      >
        <img id="image" class="rounded-circle" alt="poster" width="260" height="200" :src="hero.img">
        <td class="text-center">{{ hero.name }}</td> 
        <td class="text-center">{{ hero.function }}</td> 
        <td class="text-center">{{ hero.title }}</td> 
        <td class="text-center">{{ hero.attack }}</td>
      </tr>
    </tbody>
  </v-table>
            </v-container>
        </v-main>
    </div>
    
    </template>
    
    <script>
    import {mapState, mapActions} from 'vuex'
      export default {
        name: 'HeroPage',
        data: () => ({
          email: "",
        password: "",
        showPassword: false,
        }),
        methods:{
          ...mapActions(['setHeroes'])
        },
        computed: {
            ...mapState(['heroes', 'currentUser']),
          },
        created(){
          this.setHeroes();
        }
      }
    </script>
    
    <style scoped>
   h1{
    color: white;
   }
   th, td{
  width: 300px;
  color: white;
}
  .hero{
    background-color: rgba(0, 0, 0, 0.788);
    width: 1000px;
    margin-top: 50px;
    margin-left: 350px;
  }
    </style>