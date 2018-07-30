<template lang="html">
  <div class="card">
    <div class="card-content">
      <p class="title">{{ bean.name }}</p>
      <p class="subtitle is-6">{{ bean.grade }}</p>
      <p class="subtitle is-6">{{ bean.description }}</p>
      <p class="subtitle is-6">Rp.{{ bean.price}}</p>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <a class="button is-warning" style="margin: 5px" @click="isComponentModalActive = true;">
          Update
        </a>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
          <form action="">
            <div class="modal-card" style="width: 500px">
              <header class="modal-card-head">
                <p class="modal-card-title">Update Item</p>
              </header>
              <section class="modal-card-body">
                <b-field label="Name">
                  <b-input maxlength="30" v-model="name"></b-input>
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

                <a class="button is-warning" @click="update()">
                  Update
                </a>

              </section>
              <footer class="modal-card-foot">

              </footer>
            </div>
          </form>
        </b-modal>

        <a class="button is-danger" style="margin: 5px" @click="remove">
          Remove
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isComponentModalActive: false,
      name: this.bean.name,
      grade: this.bean.grade,
      description: this.bean.description,
      price: this.bean.price,
    };
  },
  props: ['bean'],
  methods: {
    ...mapActions([ 'removeItem', 'updateItem' ]),
    remove() {
      this.$dialog.confirm({
        title: 'Removing Item',
        message: `Are you sure you want to remove <b>${this.bean.name}</b>? This action cannot be undone.`,
        confirmText: 'Delete Iteam',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.executeRemove(),
      });
    },
    executeRemove() {
      this.removeItem(this.bean.id)
      .then(() => {
        this.$toast.open('Item deleted')
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
    update() {
      this.updateItem({name: this.name, description: this.description, grade: this.grade, price: this.price, imgSrc: this.bean.imgSrc, id: this.bean.id})
      .then(() => {
        this.isComponentModalActive = false;
        this.$toast.open('Item updated')
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
  },
}
</script>

<style lang="css">
</style>
