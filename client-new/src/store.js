import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCry2RCqBRix9Jr60ly68tKYXC0mhXmNBw",
  authDomain: "kavfein.firebaseapp.com",
  databaseURL: "https://kavfein.firebaseio.com",
  projectId: "kavfein",
  storageBucket: "kavfein.appspot.com",
  messagingSenderId: "150526720983"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const auth = firebase.auth();

const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    
  },
});
