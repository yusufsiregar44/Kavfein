'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

var app = new Vue({
  el: '#app',
  data: {
    itemsInCart: [],
    isActive: false,
    items: [
      {
        imgSrC: "https://source.unsplash.com/TD4DBagg2wE/4889×3728",
        name: "Mighty Toraja",
        description: "One of the mightiest beans out in the market, yet compliments Kavfeine's apprentice light perferences.",
        price: "2000"
      },
      {
        imgSrC: "https://source.unsplash.com/nUi_WHeWWpA/3801×2534",
        name: "Blue Batak",
        description: "From the fields of Batak highlands, comes the only mountainious-flavored beans in the Klavfeine's vault.",
        price: "5700"
      },
      {
        imgSrC: "https://source.unsplash.com/mqyMjCTWJyQ/7360×4912",
        name: "Honest Wamena",
        description: "Honestly, unparalleled. Honest Wamena strives with its distinctful earthy scent and one-of-a-kind robust flavour.",
        price: "7250"
      },
    ]
  },
  computed: {
    itemsInCartCount: function itemsInCartCount() {
      return this.itemsInCart.length;
    },
    totalCheckoutAmount: function totalCheckoutAmount() {
      var amount = 0;
      for (var i = 0; i < this.itemsInCart.length; i++) {
        amount += this.itemsInCart[i].price;
      }
      return amount;
    }
  },
  methods: {
    confirmCheckout: function confirmCheckout() {
      this.isActive = false;
      this.itemsInCart = [];
    },
    checkout: function checkout() {
      this.isActive = true;
    },
    close: function close() {
      this.isActive = false;
    },
    addedItemToCartAlert: function addedItemToCartAlert() {
      this.itemsInCart.push({

      });
      alert("Item has been added to cart!");
    },
  }
});
