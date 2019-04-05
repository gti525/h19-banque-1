<template>

    <div>
        <div class="container">
            <div class="app-title">Réinitialisation du mot de passe</div>
            <div class="login-container">
                <div class="form-group">
                    <label>Nom d'utilisateur</label>
                    <input type="text"
                           v-model="username"
                           name="username"
                           class="form-control"
                    >
                </div>
                <div class="clearfix ">
                    <button class="btn btn-primary btn-common float-right" v-on:click="sendQuestions">Envoyer</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    import NavBar from './NavBarClient.vue';
    import http from "../http-common";
    import Footer from './Footer.vue';

    export default {
        name: "ForgetPassword",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                username: '',
            }
        },
        methods: {
            sendQuestions() {
                //here should send the request to the backend and get the username's questions

                http
                    .get("/auth/getQuestions/" + this.username)
                    .then(response => this.userFound(response))
                    .catch((e) => this.userNotFound(e))
            },

            userFound (res) {
                //console.log(res)
                this.$router.push({
                    name: 'ResetPassword',
                    params: {question1: res.data.Question1, question2: res.data.Question2, username: this.username}
                })
            },

            userNotFound () {
                alert("Le nom d'utilisateur inscrit n'a pas été trouvé. Veuillez vérifier l'exactitude du nom d'utilisateur.")
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
        font-weight: 600;
        color: #002ec3;
        font-family: 'Hind Siliguri', sans-serif;
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
