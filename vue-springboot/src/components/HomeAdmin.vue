<template>
<div>
  <nav-bar> </nav-bar>
</div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: "AdminHome",
  components:{
    NavBar:NavBar
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/common.scss";

</style>

