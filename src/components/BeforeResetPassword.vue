<template>

    <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Banquo Uno</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse float-left text-justify" id="navbarColor01">
                <ul class="navbar-nav mr-auto float-left">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Page Client <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" v-on:click="adminRedirect">Page Admin</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="app-title">Réinitialisation du mot de passe</div>
            <div class="login-container">
                <!--<div class="main-header">-->
                <!--<h2>Input Username & Password</h2></div>-->
                <div class="form-group">
                    <label for="username">Nom d'utilisateur</label>
                    <input ID="username"
                           type="text"
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

        methods: {
            sendQuestions() {
                //here should send the request to the backend and get the username's questions

                http
                    .get("/auth/getQuestions/" + this.username)
                    .then(response => this.userFound(response))
                    .catch((e) => this.userNotFound(e))
            },

            userFound (res) {
                console.log(res)
                this.$router.push({
                    name: 'ResetPassword',
                    params: {question1: res.data.Question1, question2: res.data.Question2, username: this.username}
                })
            },

            userNotFound (e) {
                alert("Le nom d'utilisateur inscrit n'a pas été trouvé. Veuillez vérifier l'exactitude du nom d'utilisateur.")
                console.log(e);
                console.log(e.request)
                console.log(e.config)
                console.log(e.message)
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
