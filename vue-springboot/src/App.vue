<template>
    <div id="app" class="container-fluid">
      <div class="row" v-if="this.isLogged">
        <div class="col-md-12">
        <div class="site-info">
            <h3>Vue SpringBoot example</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/">Customerz</router-link>
            <router-link class="btn btn-primary" to="/add">Add</router-link>
            <router-link class="btn btn-primary" to="/search">Search</router-link>
            <router-link class="btn btn-primary" to="/login">Login</router-link>
        </nav>
        
       
        <br/></div>
      </div> <router-view/>
    </div>
</template>

<script>
export default {
  name: "app",
  isLogged:false
};
</script>


<style lang="scss" scoped>
@import "./scss/common.scss";

.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>
