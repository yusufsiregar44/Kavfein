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
              <a class="button is-inverted">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>Admin Login</span>
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
                    <button class="button is-primary" @click="login">Login</button>
                  </footer>
                </div>
              </form>
            </b-dropdown-item>
          </b-dropdown>

      <b-dropdown hoverable position="is-bottom-left">
        <a class="navbar-item" slot="trigger">
          <span class="icon">
            <i class="fas fa-shopping-cart" style="font-size:20px; color: #363636"></i>
          </span>
        </a>

      <b-dropdown-item custom>Blue Batak - 200g</b-dropdown-item>
      <b-dropdown-item separator></b-dropdown-item>
      <b-dropdown-item custom>
        <a class="button is-success">Checkout</a>
      </b-dropdown-item>
    </b-dropdown>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import EmailField from '@/components/EmailField.vue'
import PasswordField from '@/components/PasswordField.vue'

export default {
  components: {
    EmailField,
    PasswordField,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {

    },
    // eslint-disable-next-line
    updateEmail(e) {
      // eslint-disable-next-line
      console.log(e);
    },
    // eslint-disable-next-line
    updatePassword(e) {
      // eslint-disable-next-line
      console.log(e);
    },
  },
}
</script>

<style lang="css">
</style>
