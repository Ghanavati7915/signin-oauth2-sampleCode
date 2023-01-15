<template>
  <div>
    <button @click="doLogin"> OAuth2 </button>
    <button @click="doOpenIDConnect"> Open ID Connect </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {

    doLogin() {
      this.$auth.loginWith('social')
    },
    doOpenIDConnect() {
      this.$auth.loginWith('oidc')
    }
  }
}
</script>
