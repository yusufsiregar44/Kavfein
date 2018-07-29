document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

var app = new Vue({
  el: '#app',
  data: {
    itemsInCart: [],
    isActive: false,
  },
  computed: {
    itemsInCartCount: function() {
      return this.itemsInCart.length;
    },
    totalCheckoutAmount: function() {
      let amount = 0;
      for (var i = 0; i < this.itemsInCart.length; i++) {
        amount += this.itemsInCart[i].price
      }
      return amount;
    }
  },
  methods: {
    confirmCheckout: function() {
      this.isActive = false;
      this.itemsInCart = [];
    },
    checkout: function() {
      this.isActive = true;
    },
    close: function() {
      this.isActive = false;
    },
    addedItem1ToCartAlert: function() {
      this.itemsInCart.push({
        name: "Mighty Toraja",
        price: 2000,
      })
      alert("Item has been added to cart!")
    },
    addedItem2ToCartAlert: function() {
      this.itemsInCart.push({
        name: "Blue Batak",
        price: 2000,
      })
      alert("Item has been added to cart!")
    },
    addedItem3ToCartAlert: function() {
      this.itemsInCart.push({
        name: "Honest Wamena",
        price: 3500,
      })
      alert("Item has been added to cart!")
    },
  }
})
