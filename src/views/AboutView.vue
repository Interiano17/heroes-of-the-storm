<template>
<div class="heroesTable">
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
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(hero, key, index) in heroes"
        :key="index"
      >
        <img id="image" class="rounded-circle" alt="poster" width="260" height="200" :src="hero.img">
        <td class="text-center"><v-btn
      color="primary"
      @click="dialog = true; sendID(key)"
    >
      Ver Detalles
    </v-btn></td> 
      </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <!-- <v-btn
      color="primary"
      @click="dialog = true"
    >
      Open Dialog
    </v-btn> -->

    <v-dialog
      v-model="dialog"
      width="auto"
    >
  
    <v-card width="400px" class="mx-auto mt-5">

<v-card-title primary-title>

    <h1 class="mx-auto">Login</h1>

</v-card-title>

<v-card-text>

    <v-form>

        <v-text-field v-model="email" name="email" label="email" prepend-icon="mdi-account-circle">

        </v-text-field>

        <v-text-field v-model="password" @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'" label="password" prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'">

        </v-text-field>

    </v-form>

</v-card-text>

<v-card-actions>

    <v-spacer></v-spacer>

     <v-btn @click.prevent="login" color="info">Login</v-btn> 

</v-card-actions>

</v-card>

  <v-btn color="primary" block @click="dialog = false">Cerrar</v-btn>
    </v-dialog>
  </div>

</div>

</template>

<script>
//import LoginComp from '../components/LoginPage.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {mapState, mapActions} from 'vuex'
  export default {
    // components: {
    //   LoginComp
    // },
    data () {
      return {
        dialog: "",
        email: "",
        password: "",
        showPassword: false,
        id: ""
      }   
    },
    computed: {
        ...mapState(['heroes'])
      },
    methods:{
      ...mapActions(['setHeroes']),
      ...mapActions(['setUser']),
      sendID(number){
        console.log(number);
        this.id = number;
      },
      login() {
            firebase.auth().signInWithEmailAndPassword(this.email,
                this.password).

                then(() => {
                    this.setUser({ email: this.email })
                    this.$router.push(`/heroes/${this.id}`)
                }).catch(() => {
                    alert('Usuario erroneo')
                })
        }
    },
    created(){
      this.setHeroes()
    }
  }
</script>

<style scoped>
th, td{
  width: 300px;
  color: white;
}
  .heroesTable{
    background-color: rgba(0, 0, 0, 0.788);
    width: 1000px;
    margin-top: 50px;
    margin-left: 350px;
  }
</style>
