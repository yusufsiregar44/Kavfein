
<template lang="html">
  <form action="">
    <div class="modal-card" style="width: 500px">
      <header class="modal-card-head">
        <p class="modal-card-title">Your Cart</p>
      </header>
      <section class="modal-card-body">
        <div class="card">
          <div class="card-content">
            <CartTable></CartTable>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="">
          <h2 class="subtitle">Total Checkout Amount: {{ checkoutAmount }}</h2>
          <a class="button is-success" @click="confirmCheckout()">Confirm</a>
        </div>
      </footer>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import CartTable from '@/components/CartTable.vue';
import { mapState } from 'vuex';

export default {
  components: {
    CartTable,
  },
  computed: {
    ...mapState(['cartArr']),
    checkoutAmount: function() {
      let total = 0;
      for (var i = 0; i < this.cartArr.length; i++) {
        total += this.cartArr[i].totalPrice
      }
      return total;
    },
  },
  methods: {
    confirmCheckout() {
      this.$parent.close();
      this.$toast.open({
        message: 'Thank you for buying our beans!',
        type: 'is-success'
      });
    },
  },
}
</script>

<style lang="css">
</style>
