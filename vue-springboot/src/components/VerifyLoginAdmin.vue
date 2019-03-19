<template>
    <div class="container">
        <div class="app-header">
            <div class="app-title">Banquo Uno</div>
            <div class="app-sub-title">Administration</div>
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

</template>

<script>
    import NavBar from './NavBarAdmin.vue';
    import http from "../http-common";
    /* eslint-disable no-console */
    export default {
        name: "VerifyLoginAdmin",
        components: {
            NavBar: NavBar
        },
        data() {
            return {
                question: '',
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
                            this.$router.push('/HomeAdmin');
                            location.reload();
                        })
                        .catch(() => this.wrongAnwser())
                } else {
                    http
                        .post("/auth/verify1", { question1: this.randomQuestion, answer1: this.text })
                        .then(response => {
                            console.log(response.data);
                            this.$router.push('/HomeAdmin');
                            location.reload();
                        })
                        .catch(() => this.wrongAnwser())
                }

            },
            wrongAnwser () {
                alert("Mauvaise réponse entrer veuillez recommancer")
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
                        alert("Vous etes un client, redirection de page dans la bonne page")
                        this.$router.push('/VerifyLogin');
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

    .app-header {

        margin-top: 20%;

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

