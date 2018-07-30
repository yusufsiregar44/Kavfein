<template>
<div>
  <Navbar></Navbar>
  <div class="container" style="margin-top: 40px; margin-bottom: 40px">
    <section>
      <b-collapse :open="false">
        <button class="button is-success" slot="trigger">Add new item</button>
        <div class="notification">
          <div class="content">
            <b-field label="Name">
              <b-input placeholder="item name" maxlength="30"></b-input>
            </b-field>

            <b-field label="Message">
              <b-input maxlength="200" type="textarea"></b-input>
            </b-field>

            <b-radio v-model="radio" native-value="Flint">
              The Apprentice
            </b-radio>
            <b-radio v-model="radio" native-value="Silver">
              The Fellow
            </b-radio>
            <b-radio v-model="radio" native-value="Jack">
              The Grandmaster
            </b-radio>
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'admin',
  created() {
    this.checkIsLoggedIn()
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState([ 'adminIsLoggedIn' ]),
  },
  methods: {
    ...mapActions([ 'addNewItem' ])
    checkIsLoggedIn() {
      if (this.adminIsLoggedIn === true) {
        this.$toast.open({
          duration: 3000,
          message: 'Successfully LoggedIn',
          position: 'is-top',
          type: 'is-success'
        });
      } else {
        this.$router.push({
          name: 'home',
          query: {
            redirect: '/'
          }
        })
      }
    }
  }
}
</script>
