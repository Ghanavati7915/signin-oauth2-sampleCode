<template>
  <div>
    <button @click="doLogin"> LOGIN </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {

    doLogin() {
      this.$auth.loginWith('social')
    }
  }
}
</script>
