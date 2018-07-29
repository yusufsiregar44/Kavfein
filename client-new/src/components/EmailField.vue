<template lang="html">
  <b-field label="Email">
      <b-input
          type="email"
          placeholder="Your email"
          required
          v-model="content"
          @input="handleInput"
          >
      </b-input>
  </b-field>
</template>

<script>
export default {
  prop: ['value'],
  data() {
    return {
      content: ''
    };
  },
  watch: {
    value: function (n) {
      this.content = n;
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.content)
    }
  }
}
</script>
