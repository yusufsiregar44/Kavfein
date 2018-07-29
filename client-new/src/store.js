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
// eslint-disable-next-line
const auth = firebase.auth();

const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminIsLoggedIn: false,
    theApprentice: null,
    theFellow: null,
    theGrandmaster: null,
  },
  mutations: {
    assignTheApprentice(state, payload) {
      return state.theApprentice = payload;
    },
    assignTheFellow(state, payload) {
      return state.theFellow = payload;
    },
    assignTheGrandmaster(state, payload) {
      return state.theGrandmaster = payload;
    },
  },
  actions: {
    firestoreRealTime({ commit }) {
      // eslint-disable-next-line
      console.log('masuk');
      firebase.firestore().collection('coffeeBeans').where('grade', "==", 'The Apprentice')
        .onSnapshot(function (querySnapshot) {
          let beansArr = [];
          querySnapshot.forEach(function (doc) {
            let id = doc.id;
            let name = doc.data().name;
            let grade = doc.data().grade;
            let price = doc.data().price;
            let description = doc.data().description;
            let imgSrc = doc.data().imgSrc;
            let processedData = {
              id: id,
              name: name,
              price: price,
              imgSrc: imgSrc,
              grade: grade,
              description: description,
            }
            beansArr.push(processedData);
          })
          commit('assignTheApprentice', beansArr);
        })

      firebase.firestore().collection('coffeeBeans').where('grade', "==", "The Fellow")
        .onSnapshot(function (querySnapshot) {
          let beansArr = [];
          querySnapshot.forEach(function (doc) {
            let id = doc.id;
            let name = doc.data().name;
            let grade = doc.data().grade;
            let price = doc.data().price;
            let description = doc.data().description;
            let imgSrc = doc.data().imgSrc;
            let processedData = {
              id: id,
              name: name,
              price: price,
              imgSrc: imgSrc,
              grade: grade,
              description: description,
            }
            beansArr.push(processedData);
          })
          commit('assignTheFellow', beansArr);
        })

      firebase.firestore().collection('coffeeBeans').where('grade', "==", 'The Grandmaster')
        .onSnapshot(function (querySnapshot) {
          let beansArr = [];
          querySnapshot.forEach(function (doc) {
            let id = doc.id;
            let name = doc.data().name;
            let grade = doc.data().grade;
            let price = doc.data().price;
            let description = doc.data().description;
            let imgSrc = doc.data().imgSrc;
            let processedData = {
              id: id,
              name: name,
              price: price,
              imgSrc: imgSrc,
              grade: grade,
              description: description,
            }
            beansArr.push(processedData);
          })
          commit('assignTheGrandmaster', beansArr);
        })
      }
  },
});
