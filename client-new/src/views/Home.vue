<template>
  <div class="Home">
    <Navbar></Navbar>
    <b-tabs position="is-centered" class="block" @change="changeTab">
        <b-tab-item label="The Apprentice"></b-tab-item>
        <b-tab-item label="The Fellow"></b-tab-item>
        <b-tab-item label="The Grandmaster"></b-tab-item>
    </b-tabs>

    <div class="columns is-multiline" style="margin:10px" v-if="tabIndex === 0">
      <BeanCard v-for="(bean, index) in theApprentice" v-bind:key="index" :bean="bean"></BeanCard>
    </div>

    <div class="columns is-multiline" style="margin:10px" v-if="tabIndex === 1">
      <BeanCard v-for="(bean, index) in theFellow" v-bind:key="index" :bean="bean"></BeanCard>
    </div>

    <div class="columns is-multiline" style="margin:10px" v-if="tabIndex === 2">
      <BeanCard v-for="(bean, index) in theGrandmaster" v-bind:key="index" :bean="bean"></BeanCard>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import BeanCard from '@/components/BeanCard.vue'

export default {
  name: 'home',
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    changeTab(e) {
      this.tabIndex = e;
    }
  },
  computed: {
    ...mapState([ 'theFellow', 'theApprentice', 'theGrandmaster' ])
  },
  components: {
    Navbar,
    BeanCard,
  }
}
</script>
