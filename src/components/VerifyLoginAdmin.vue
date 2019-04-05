<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Banquo Uno</a>
        </nav>

        <div class="container">
            <div class="app-title">Administration</div>
            <div class="login-container">
                <div class="main-header">
                    <h2>Vérification page administration</h2></div>
                <div class="form-group">
                    <label>{{this.randomQuestion}}</label>
                    <input @keyup.enter="verify"
                           type="text"
                           v-model="text"
                           name="text"
                           class="form-control"
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
        name: "VerifyLoginAdmin",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                question: '',
                response: '',
                text: '',
                submitted: '',
                questionMap: '',
                randomQuestion: '',
                qustionArray: '',
                token: ''
            }
        },
        methods: {
            verify() {
                if (this.qustionArray[1] === this.randomQuestion) {
                    if (this.answer2 === this.text) {
                        this.$router.push('/HomeAdmin');
                        localStorage.bypass = 1
                        location.reload();
                    } else {
                        alert("Mauvaise réponse, veuillez recommencer")
                    }
                } else {
                    if (this.answer1 === this.text) {
                        this.$router.push('/HomeAdmin');
                        localStorage.bypass = 1
                        location.reload();
                    } else {
                        alert("Mauvaise réponse, veuillez recommencer")
                    }
                }
            },
            wrongAnwser() {
                alert("Mauvaise réponse entrée, veuillez recommencer")
            },
            loading() {
                location.reload();
            },
        },
        mounted() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'accéder à cette page")
                this.$router.push('/');
            }
        },
        created() {
            http
                .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                .then(response => {
                    this.users = response.data[0]; // JSON are parsed automatically.
                    this.answer1 = response.data[0].answer1
                    this.answer2 = response.data[0].answer2
                    //console.log("")
                    //console.log(response.data);

                    if (response.data[0].roles[0].name === "ROLE_USER") {
                        alert("Vous êtes un client, redirection vers la bonne page")
                        this.$router.push('/VerifyLogin');
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
        margin-top: 2.8%;
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

