<template>
    <div id="app" class="container-fluid">
        <!--  <div class="row" v-if="this.isLogged"> -->
        <div class="row">

        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "app",
        isLogged: false
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
