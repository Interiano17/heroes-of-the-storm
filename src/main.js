import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../config/firebase'
import vuetify from './plugins/vuetify'

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(() => {

  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
