<template lang="html">
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <figure>
          <img v-bind:src="imgSrc">
        </figure>
        <p class="title">{{ bean.name }}</p>
        <p class="subtitle is-6">{{ bean.description }}</p>
        <br>
        <h2 class="title is-4 is-spaced">Rp.{{ bean.price}}/g</h2>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <a class="button" name="buy-button" @click="isComponentModalActive = true">
            Add to cart
          </a>
          <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <BuyModal :bean="bean"></BuyModal>
          </b-modal>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import BuyModal from '@/components/BuyModal'

export default {
  data() {
    return {
      isComponentModalActive: false,
    };
  },
  computed: {
    imgSrc: function () {
      return this.bean.imgSrc;
    }
  },
  props: ['bean'],
  components: {
    BuyModal,
  },
}
</script>
