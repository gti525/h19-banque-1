<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-header">
                <div class="app-title">Banquo Uno</div>
                <div class="app-sub-title">Administration</div>
            </div>

            <div class="login-container">
                <div class="main-header">
                    <h2>Vérification de l'accès</h2></div>
                <div class="form-group">
                    <label for="username">What is your mother's maiden name?</label>
                    <input
                            type="text"
                            v-model="username"
                            name="username"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !username }"
                    >
                </div>

                <div class="form-group clearfix">
                    <button class="btn btn-primary btn-common float-right">Vérifier</button>
                </div>
            </div>
        </div>
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

    .app-header {

        margin-top: 6%;

        .app-title {
            text-align: center;
            font-size: 40px;
            font-weight: 600;
            color: #002ec3;
            font-family: 'Hind Siliguri', sans-serif;

        }

        .app-sub-title {
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 600;
            color: #d41919;
            font-family: 'Hind Siliguri', sans-serif;

        }
    }

    .login-container {
        border: 1px solid #e8e8e8;
        box-shadow: 0px 0px 20px #e6e6e6;
        padding: 20px 40px;
        border-radius: 10px;
        margin-top: 6%;
    }

    .main-header {
        margin-top: 20px;
        margin-bottom: 28px;
    }
</style>

