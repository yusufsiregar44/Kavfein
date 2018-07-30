<template lang="html">
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <i class="fas fa-coffee" style="font-size:37px; margin-right:10px; color:#363636"></i>
          <h1 class="title">Kavfeine</h1>
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
        <span></span>
        <span></span>
        </span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <b-dropdown position="is-bottom-left">
            <a class="navbar-item" slot="trigger">
              <a class="button is-inverted" v-if="adminIsLoggedIn === false">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>Admin Login</span>
              </a>
              <a class="button is-inverted" @click="logout()" v-if="adminIsLoggedIn === true">
                <span class="icon">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                <span>Admin Logout</span>
              </a>
            </a>

            <b-dropdown-item custom paddingless>
              <form action="">
                <div class="modal-card" style="width:300px;">
                  <section class="modal-card-body">
                    <EmailField @input="updateEmail"></EmailField>

                    <PasswordField @input="updatePassword"></PasswordField>
                  </section>
                  <footer class="modal-card-foot">
                    <button class="button is-primary" @click="login()">Login</button>
                  </footer>
                </div>
              </form>
            </b-dropdown-item>
          </b-dropdown>

      <b-dropdown hoverable position="is-bottom-left" v-if="adminIsLoggedIn === false">
        <a class="navbar-item" slot="trigger">
          <span class="icon">
            <i class="fas fa-shopping-cart" style="font-size:20px; color: #363636"></i>
          </span>
        </a>

      <b-dropdown-item custom v-for="(item, index) in cartArr" v-bind:key="index">{{ item.name }} - {{ item.amount }}g</b-dropdown-item>
      <b-dropdown-item separator></b-dropdown-item>
      <b-dropdown-item custom>
        <a class="button is-success" @click="isComponentModalActive = true" v-if="cartArr.length !== 0">Checkout</a>
                <a class="button is-success" disabled v-if="cartArr.length === 0">Checkout</a>
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
          <CheckoutModal></CheckoutModal>
        </b-modal>

      </b-dropdown-item>
    </b-dropdown>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CheckoutModal from '@/components/CheckoutModal.vue';
import EmailField from '@/components/EmailField.vue';
import PasswordField from '@/components/PasswordField.vue';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';


export default {
  components: {
    EmailField,
    PasswordField,
    CheckoutModal,
  },
  data() {
    return {
      email: '',
      password: '',
      isComponentModalActive: false,
    };
  },
  computed: {
    ...mapState([ 'cartArr', 'adminIsLoggedIn' ])
  },
  methods: {
    ...mapActions([ 'adminLogIn', 'adminLogOut' ]),
    login() {
      this.adminLogIn({email: this.email, pass: this.password})
      .catch(() => {
        // eslint-disable-next-line
        this.$toast.open({
          duration: 1000,
          message: 'Kindly enter a valid email/password',
          position: 'is-top',
          type: 'is-danger'
        });
      });
    },
    logout() {
      this.adminLogOut()
      .then(() => {
        this.$toast.open({
          duration: 1000,
          message: 'Successfully logged out',
          position: 'is-top',
          type: 'is-success'
        });
        this.$router.push({ name: 'home', query: { redirect: '/' } })
      })
      .catch(() => {
        this.$toast.open({
          duration: 1000,
          message: 'Oops. something went wrong. Pleas try again.',
          position: 'is-top',
          type: 'is-danger'
        });
      })
    },
    updateEmail(e) {
      this.email = e;
    },
    updatePassword(e) {
      this.password = e;
    },
  },
}
</script>

<style lang="css">
</style>
