<template>
<div>
  <Navbar></Navbar>
  <div class="container" style="margin-top: 40px; margin-bottom: 40px">
    <section style="margin: 20px">
      <b-collapse :open="false">
        <button class="button is-success" slot="trigger">Add new item</button>
        <div class="notification">
          <div class="content">
            <b-field label="Name">
              <b-input placeholder="item name" maxlength="30" v-model="name"></b-input>
            </b-field>

            <b-field label="Bean Grade">
                <b-select placeholder="Select a bean grade" required v-model="grade">
                    <option value="The Apprentice">The Apprentice</option>
                    <option value="The Fellow">The Fellow</option>
                    <option value="The Grandmaster">The Grandmaster</option>
                </b-select>
            </b-field>

            <b-field label="Description">
              <b-input maxlength="200" type="textarea" v-model="description"></b-input>
            </b-field>

            <b-field>
                <b-input placeholder="Price"
                    v-model="price"
                    type="number"
                    min="0">
                </b-input>
            </b-field>

            <b-field label="Item Image">
              <b-field class="file" required native="true" accept="image/png, image/jpeg">
                <b-upload v-model="files">
                  <a class="button is-primary">
                    <b-icon icon="upload"></b-icon>
                    <span>Click to upload</span>
                  </a>
                </b-upload>
                <span class="file-name"
                v-if="files && files.length">
                {{ files[0].name }}
              </span>
            </b-field>
            </b-field>

            <a class="button is-success">
              <span @click="add()">Add Item</span>
            </a>

          </div>
        </div>
      </b-collapse>
    </section>
    <div class="columns is-multiline is-mobile">
      <div class="column is-one-quarter" v-for="(bean, index) in all" v-bind:key="index" :bean="bean">
        <AdminItemCard :bean="bean"></AdminItemCard>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import AdminItemCard from '@/components/AdminItemCard.vue';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'admin',
  data() {
    return {
      files: [],
      name: null,
      description: null,
      grade: null,
      price: null,
    };
  },
  created() {
    this.checkIsLoggedIn()
  },
  components: {
    Navbar,
    AdminItemCard,
  },
  computed: {
    ...mapState([ 'adminIsLoggedIn', 'all' ]),
  },
  methods: {
    ...mapActions([ 'addNewItem' ]),
    add() {
      if (this.files.length === 0 || this.name === null || this.description === null || this.price === null || this.grade === null) {
        this.$toast.open({
          duration: 1000,
          message: 'Kindly enter all required fields',
          position: 'is-top',
          type: 'is-danger'
        });
      } else {
        this.addNewItem({name: this.name, description: this.description, grade: this.grade, price: this.price, file: this.files[0]})
        .then(() => {
          this.$toast.open({
            duration: 1000,
            message: 'Successfully added item',
            position: 'is-top',
            type: 'is-success'
          });
        })
        .catch(() => {
          this.$toast.open({
            duration: 1000,
            message: 'Oops. something went wrong. Pleas try again.',
            position: 'is-top',
            type: 'is-danger'
          });
        })
      }
    },
    checkIsLoggedIn() {
      if (this.adminIsLoggedIn === true) {
        this.$toast.open({
          duration: 1000,
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
