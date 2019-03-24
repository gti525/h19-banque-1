<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Banquo Uno</a>
        </nav>


        <div class="container">
            <div class="app-title">
                Connexion Client
            </div>
            <div class="login-container">
                <div class="main-header">
                    <h2>Vérification de l'accès</h2></div>
                <div class="form-group">
                    <label>{{this.randomQuestion}}</label>
                    <input @keyup.enter="verify"
                           type="text"
                           v-model="text"
                           name="text"
                           class="form-control"
                           :class="{ 'is-invalid': submitted }"
                    >
                </div>

                <div class="form-group clearfix">
                    <button class="btn btn-primary btn-common float-right" v-on:click="verify">Vérifier</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavBar from './NavBarAdmin.vue';
    import http from "../http-common";
    import Footer from './Footer.vue';
    /* eslint-disable no-console */
    export default {
        name: "VerifyLogin",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                question: '',
                users: '',
                response: '',
                text: '',
                submitted: '',
                questionMap: '',
                randomQuestion:'',
                qustionArray:'',
                token: ''
            }
        },
        methods: {
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
            http
                .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                .then(response => {
                    this.users = response.data[0]; // JSON are parsed automatically.
                    console.log(response.data);

                    if ( response.data[0].roles[0].name === "ROLE_ADMIN") {
                        alert("Vous etes un administrateur, redirection de page dans la bonne page")
                        this.$router.push('/VerifyLoginAdmin');
                    }


                    let questionMap = new Map();
                    questionMap.set(this.users.question1, this.users.answer1);
                    questionMap.set(this.users.question2, this.users.answer2);

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
        margin-top: 6%;
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

