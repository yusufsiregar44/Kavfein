
<template>
<section>
  <button class="button field is-danger" @click="deleteItemsAtCart(checkedRows)">
    <span>Remove Selected</span>
  </button>
      <b-table
      :data="cartArr"
      :columns="columns"
      :checked-rows.sync="checkedRows"
      checkable
      >
      </b-table>
</section>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      checkedRows: [],
      columns: [{
          field: 'name',
          label: 'Item',
        },
        {
          field: 'amount',
          label: 'Amount/g',
        },
        {
          field: 'totalPrice',
          label: 'Total Price',
        },
      ]
    };
  },
  computed: {
    ...mapState([ 'cartArr' ]),
  },
  methods: {
    ...mapActions([ 'deleteItemsAtCart' ])
  }
}
</script>
