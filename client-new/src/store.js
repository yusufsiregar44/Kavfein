import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import router from './router.js';

var config = {
  // moved to env
};

firebase.initializeApp(config);

const auth = firebase.auth();

const firestore = firebase.firestore();
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
    cartArr: [],
    all: null,
  },
  mutations: {
    assignTheApprentice(state, payload) {
      return state.theApprentice = payload;
    },
    assignAll(state, payload) {
      return state.all = payload;
    },
    assignTheFellow(state, payload) {
      return state.theFellow = payload;
    },
    assignTheGrandmaster(state, payload) {
      return state.theGrandmaster = payload;
    },
    assignCartArr(state, payload) {
      return state.cartArr.push(payload);
    },
    reassignCartArr(state, payload) {
      return state.cartArr = (payload);
    },
    assignAdminIsLoggedIn(state, payload) {
      return state.adminIsLoggedIn = payload;
    },
  },
  actions: {
    firestoreRealTime({ commit }) {
      firestore.collection('coffeeBeans')
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
          commit('assignAll', beansArr);
        })

      firestore.collection('coffeeBeans').where('grade', "==", 'The Apprentice')
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

        firestore.collection('coffeeBeans').where('grade', "==", "The Fellow")
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

        firestore.collection('coffeeBeans').where('grade', "==", 'The Grandmaster')
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
      },
    addToCart(context, payload) {
      context.commit('assignCartArr', payload);
    },
    deleteItemsAtCart(context, payload) {
      let arrOfCheckedItemsPosition =[]
      let tempoCartArr = this.state.cartArr;
      for (let i = 0; i < payload.length; i++) {
        var position = tempoCartArr.map(function(e) { return e.name; }).indexOf(payload[i].name);
        arrOfCheckedItemsPosition.push(position)
      }
      for (let i = 0; i < arrOfCheckedItemsPosition.length; i++) {
        tempoCartArr.splice(arrOfCheckedItemsPosition[i], 1)
      }
      context.commit('reassignCartArr', tempoCartArr);
    },
    firebaseMonitorAuthState({ commit }) {
      auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          commit('assignAdminIsLoggedIn', true)
          // eslint-disable-next-line
          // console.log(firebaseUser);
          router.push({ name: 'admin', query: { redirect: '/admin' } })
        } else {
          // eslint-disable-next-line
          // console.log('not logged in');
        }
      });
    },
    adminLogIn(context, payload) {
      // eslint-disable-next-line
      // console.log(payload);
      return auth.signInWithEmailAndPassword(payload.email, payload.pass);
    },
    adminLogOut({ commit }) {
      commit('assignAdminIsLoggedIn', false)
      return auth.signOut();
    },
    addNewItem(context, payload) {
      // eslint-disable-next-line
      let file = payload.file;
      // eslint-disable-next-line
      let storageRef = firebase.storage().ref(file.name);
      storageRef.put(file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL()
          .then(uri => {
            return firestore.collection('coffeeBeans').add({
              name: payload.name,
              description: payload.description,
              grade: payload.grade,
              price: Number(payload.price),
              imgSrc: uri,
            });
          });
      });
    },
    removeItem(context, payload) {
     return firestore.collection('coffeeBeans').doc(payload).delete();
    },
    updateItem(context, payload) {
      return firebase.firestore().collection('coffeeBeans').doc(payload.id).set({
        name: payload.name,
        description: payload.description,
        grade: payload.grade,
        price: Number(payload.price),
        imgSrc: payload.imgSrc,
      });
    },
  },
});
