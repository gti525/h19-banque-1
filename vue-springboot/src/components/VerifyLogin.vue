<template>
    <div class="container">
        <div class="app-title">
            Banquo Uno
        </div>
        <div class="login-container">
            <div class="main-header">
                <h2>Vérification de l'accès</h2></div>
            <div class="form-group">
                <label>{{this.randomQuestion}}</label>
                <input
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
        name: "VerifyLogin",
        components: {
            NavBar: NavBar
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
                        })
                        .catch(e => {
                            this.$router.push('/errorPage');
                            console.log(e);
                        });
                } else {
                    http
                        .post("/auth/verify1", { question1: this.randomQuestion, answer1: this.text })
                        .then(response => {
                            console.log(response.data);
                            this.$router.push('/HomeClient');
                        })
                        .catch(e => {
                            this.$router.push('/errorPage');
                            console.log(e);
                        });
                }

            }
        },
        created() {
            console.log("bla2")
            console.log()
            http
                .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                .then(response => {
                    this.users = response.data[0]; // JSON are parsed automatically.
                    console.log(response.data);

                    let questionMap = new Map();
                    questionMap.set(this.users.question1, this.users.answer1);
                    questionMap.set(this.users.question2, this.users.answer2);

                    this.questionMap = questionMap;

                    let qustionArray = [
                        this.users.question1,
                        this.users.question2,
                    ];
                    this.qustionArray = qustionArray

                    let randomQuestion = qustionArray[Math.floor(Math.random() * qustionArray.length)]
                    this.randomQuestion = randomQuestion;

                })
                .catch(e => {
                    this.$router.push('/errorPage');
                    console.log(e);
                });
        }
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

