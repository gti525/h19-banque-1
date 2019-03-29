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
                username:'',
                question1:'',
                question2:'',
                answer1:'',
                answer2:''
            }
        },
        methods: {
            sendQuestions() {
                //here should send the request to the backend and get the username's questions
                http
                    .post("/auth/signin", {username: this.username, password: this.password})
                    .then(request => this.loginSuccessful(request))
                    .catch(() => this.loginFailed())
            },
           verify() {
               if (this.qustionArray[1] === this.randomQuestion) {
                    http
                        .post("/auth/verify2", { question2: this.randomQuestion, answer2: this.text })
                        .then(response => {
                            console.log(response.data);
                            this.$router.push('/HomeClient');
                            localStorage.bypass = 1
                            location.reload();
                        })
                        .catch(() => this.wrongAnwser())
                } else {
                    http
                        .post("/auth/verify1", { question1: this.randomQuestion, answer1: this.text })
                        .then(response => {
                            console.log(response.data);
                            this.$router.push('/HomeClient');
                            localStorage.bypass = 1
                            location.reload();
                        })
                        .catch(() => this.wrongAnwser())
                }

        },
        wrongAnwser () {
            alert("Mauvaise réponse entrée, veuillez recommancer")
        },
        loading () {
            location.reload();
        },
    },
    created() {
        this.username = this.$route.params.username;
        http
            .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
            .then(response => {
                this.users = response.data[0]; // JSON are parsed automatically.
                this.answer1 = response.data[0].answer1
                this.answer2 = response.data[0].answer2
                console.log(response.data);

                if ( response.data[0].roles[0].name === "ROLE_ADMIN") {
                    alert("Vous etes un administrateur, redirection de page dans la bonne page")
                    this.$router.push('/VerifyLoginAdmin');
                }

                let questionMap = new Map();
                questionMap.set(this.users.question1, this.answer1);
                questionMap.set(this.users.question2, this.answer2);

                let qustionArray = [
                    this.users.question1,
                    this.users.question2,
                ];
                this.qustionArray = qustionArray

                let randomQuestion = qustionArray[Math.floor(Math.random() * qustionArray.length)]
                this.randomQuestion = randomQuestion;
            })
            .catch(() => this.loading())
    },
    }
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
