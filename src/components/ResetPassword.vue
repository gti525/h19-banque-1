<template>

    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Questions de sécurité pour la réinitialisation du mot de passe</div>
            <div class="resetPassword-container">
                <div class="form-group">
                    <label>Question 1 : </label>
                    <div>
                        <table class="table">
                            <tr>
                                <td>{{this.question1}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="form-group">
                    <label for="answer1">Réponse à la question 1</label>
                    <input ID="answer1"
                           type="text"
                           v-model="answer1"
                           name="answer1"
                           class="form-control"
                    >
                </div>
                <div class="form-group">
                    <label>Question 2 : </label>
                </div>
                <div class="form-group">
                    <label for="answer2">Réponse à la question 2</label>
                    <input ID="answer2"
                           type="text"
                           v-model="answer2"
                           name="answer2"
                           class="form-control"
                    >
                </div>
                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input id="password"
                           type="password"
                           v-model="password"
                           name="password"
                           class="form-control"
                    >
                </div>
                <div class="clearfix ">
                    <button class="btn btn-primary btn-common float-right" v-on:click="resetPassword">Envoyer</button>
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
        name: "ResetPassword",

        data() {
            return {
                username: '',
                password: '',
                answer1: '',
                answer2: '',
                question1: '',
                question2: ''
            }
        },

        created() {
            this.question1 = this.$route.params.question1;
            this.question2 = this.$route.params.question2;
            this.username = this.$route.params.username;
        },

        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        methods: {

            resetPassword() {
                //here should send the request to the backend and get to know if the old password matches the existing password
                http
                    .post("/auth/forgetPassword", { username: this.username, password: this.password,
                        question1: this.question1, question2: this.question2, answer1: this.answer1, answer2: this.answer2})
                    .then(request => this.modificationSuccessful(request))
                    .catch(() => this.modificationFailed())
            },
            modificationSuccessful (req) {
                console.log(req)
                this.$router.push('/')
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

    .resetPassword-container {
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
