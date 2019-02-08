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
                response: '',
                text: '',
                submitted: '',
                questionMap: '',
                randomQuestion:'',
                token: ''
            }
        },
        methods: {
            verify() {
                let data = {
                    username: this.$route.query.username,
                    password: this.$route.query.password
                }
                console.log("bla1")
                console.log(this.username)
                if (this.text === this.questionMap.get(this.randomQuestion)) {
                    http
                        .post("/getToken", data)
                        .then(response => {
                            console.log(response.data);
                            this.$router.push({
                                path : '/homeClient',
                                query: {username: this.$route.query.username}
                                })
                        })
                        .catch(e => {
                            this.$router.push('/errorPage');
                            console.log(e);
                        });
                } else {
                    this.$router.push('/errorPage')
                }

            }
        },
        created() {
            let data = {
                username: this.$route.query.username
            }
            console.log("bla2")
            console.log(data)
            http
                .post("/getUserInfo", data)
                .then(response => {
                    console.log(response.data);
                    this.response = response.data
                    let questionMap = new Map();
                    questionMap.set(response.data.question1, response.data.answer1);
                    questionMap.set(response.data.question2, response.data.answer2);
                    questionMap.set(response.data.question3, response.data.answer3);

                    this.questionMap = questionMap;
                    console.log(this.questionMap)

                    console.log("token",response.data)


                    let qustionArray = [
                        response.data.question1,
                        response.data.question2,
                        response.data.question3
                    ];

                    let randomQuestion = qustionArray[Math.floor(Math.random() * qustionArray.length)]
                    this.randomQuestion = randomQuestion;
                    // console.log("randomQuestion:", randomQuestion)

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

