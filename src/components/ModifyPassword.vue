<template>

    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Changement de mot de passe</div>
            <div class="modifyPassword-container">
                <div class="form-group">
                    <label for="oldPassword">Ancien mot de passe</label>
                    <input @keyup.enter="passwordModification"
                           id="oldPassword"
                           type="password"
                           v-model="password"
                           name="oldPassword"
                           class="form-control"
                    >
                </div>
                <div class="form-group">
                    <label for="newPassword">Nouveau mot de passe</label>
                    <input @keyup.enter="passwordModification"
                           id="newPassword"
                           type="password"
                           v-model="password"
                           name="newPassword"
                           class="form-control"
                    >
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirmation du nouveau mot de passe</label>
                    <input @keyup.enter="passwordModification"
                           id="confirmPassword"
                           type="password"
                           v-model="password"
                           name="confirmPassword"
                           class="form-control"
                    >
                </div>
                <div class="clearfix ">
                    <button class="btn btn-primary btn-common float-right" v-on:click="passwordModification">Enregistrer les modifications</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import http from "../http-common";
    import Footer from './Footer.vue';
    import NavBar from "./NavBarClient";
    /* eslint-disable no-console */
    export default {
        name: "ModifyPassword",
        data() {
            return {
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                error: false
            }
        },
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        methods: {

            passwordModification() {
                //here should send the request to the backend and get to know if the old password matches the existing password
                http
                    .post("/modifyPassword", { username: this.username, password: this.oldPassword,
                        newPassword: this.newPassword, confirmPassword: this.confirmPassword})
                    .then(request => this.modificationFailed(request))
                    .catch(() => this.modificationSuccessful())
                //inverser les 2 methodes si le post fonctionne
            },
            modificationSuccessful () {
                //console.log(req)
                this.$router.push('/HomeClient')
            },
            modificationFailed () {
                this.$router.push('/errorPage')
                delete localStorage.token
            }

        }
    };
</script>
<style lang="scss" scoped>
    @import "../scss/common.scss";

    .app-title {
        margin-top: 5%;
        text-align: center;
        font-size: 40px;
        font-weight: 300;
        color: #002ec3;
        font-family: 'Hind Siliguri', sans-serif;
    }

    .modifyPassword-container {
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
