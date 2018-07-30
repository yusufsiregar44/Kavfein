<template>
<form action="">
  <div class="modal-card" style="width: 500px">
    <header class="modal-card-head">
      <p class="modal-card-title">Add to cart</p>
    </header>
    <section class="modal-card-body">
      <div class="card">
        <div class="card-content">
          <p class="title">{{ bean.name }}</p>
          <p class="subtitle is-6">{{ bean.description }}</p>
          <br>
          <h2 class="title is-4 is-spaced">Rp.{{ bean.price}}/g</h2>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <div class="container">
        <b-field grouped>
          <b-input type="number" placeholder="0,00" v-model="beanGrams"></b-input>
          <b-select value="g">
            <option>g</option>
          </b-select>
          <p class="control">
          </p>
        </b-field>
        <h2 class="subtitle">Total price: {{ totalPrice }}</h2>
        <button class="button is-success" @click="add()">Confirm</button>
      </div>
    </footer>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      beanGrams: null,
    };
  },
  computed: {
    totalPrice: function () {
      return this.bean.price * Math.abs(Number(this.beanGrams));
    },
  },
  props: [ 'bean' ],
  methods: {
    ...mapActions(['addToCart']),
    add() {
      if (this.beanGrams === null || this.beanGrams === "0") {
        this.$swal({
          type: 'error',
          title: 'Please define your bean amount!',
        });
      } else {
        this.$parent.close();
        this.$swal(
          'Success!',
          'Item has been added to cart',
          'success'
        );
        this.addToCart({name: this.bean.name, amount: Math.abs(Number(this.beanGrams)), totalPrice: this.totalPrice})
      }
    },
  },
}
</script>
