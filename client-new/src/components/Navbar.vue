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
      <div id="navbarMenuHeroB" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" slot="trigger">
              <a class="button is-inverted">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>Admin Login</span>
              </a>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item">
              <i class="fas fa-shopping-cart" style="font-size:20px; color: #363636"></i>
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <hr class="navbar-divider">
              <a class="navbar-item">
              </a>
              <a class="navbar-item">
                <span class="button is-success is-small" id="checkout-button">Checkout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="css">
</style>
