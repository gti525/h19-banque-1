<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">{{ users.principal.name }} {{ users.lastname }}</div>
            <div class="login-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Compte courant</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><router-link :to="{
                            name:'homeClient',
                        }">
                            Cheque Banque Uno
                        </router-link></td>
                        <td>Cheque IDNumber</td>
                    </tr>
                    <tr>
                        <td>Solde :</td>
                        <td>{{ users.amountAvailOfBankAccount }}$</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="login-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Compte credit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><router-link :to="{
                            name:'homeClient',
                        }">
                            Credit Banque Uno
                        </router-link></td>
                        <td>Cheque IDNumber</td>
                    </tr>
                    <tr>
                        <td>Solde :</td>
                        <td>{{ users.balance }}$</td>
                    </tr>
                    <tr>
                        <td>Limite de crédit :</td>
                        <td>{{ users.limiteCredit }}$</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="login-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Autres informations</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Courriel</td>
                        <td>{{users.principal.email}} </td>
                    </tr>
                    <tr>
                        <td>Téléphone :</td>
                        <td>{{users.homePhone}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from './NavBarClient.vue';
    import http from "../http-common";

    /* eslint-disable no-console */

    var timeoutID;

    function setup() {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("DOMMouseScroll", resetTimer, false);
        document.addEventListener("mousewheel", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        document.addEventListener("MSPointerMove", resetTimer, false);

        startTimer();
    }
    setup();

    function startTimer() {
        // wait 300 seconds before calling goInactive
        timeoutID = window.setTimeout(goInactive, 300000);
    }

    function resetTimer() {
        window.clearTimeout(timeoutID);

        goActive();
    }

    function goInactive() {
        console.log("Je dors ...")
        document.location.href = "http://localhost:4200";
    }

    function goActive() {
        console.log("Je suis reveille")

        startTimer();
    }

    export default {
        name: "HomeClient",
        data() {
            return {
                users: []
            }
        },
        components: {
            NavBar: NavBar
        },
        methods: {
        /* eslint-disable no-console */
            test() {
                console.log(this.username);
            }
        },
        mounted() {
            this.test()
        },
        created() {
            let data = {
                username: this.$route.query.username
            }
            console.log("bla2")
            console.log(data)
            console.log(this.username)
            http
                .get("/users")
                .then(response => {
                    this.users = response.data; // JSON are parsed automatically.
                    console.log("bla3")
                    console.log(response.data);
                    console.log("bla4")
                })
                .catch(e => {
                    this.$router.push('/errorPage');
                    console.log(e);
                });

        },
    }
</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";

    .right {
        position: absolute;
        right: 0px;
        width: 300px;
        border: 3px solid #73AD21;
        padding: 10px;
    }

    .app-title {
        margin-top: 6%;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        color: #002ec3;
        font-family: "Hind Siliguri", sans-serif;
    }

    .login-container {
        border: 1px solid #e8e8e8;
        box-shadow: 0px 0px 20px #e6e6e6;
        padding: 20px 40px;
        border-radius: 10px;
        margin-top: 6%;
        margin-bottom: 60px;
    }

    .main-header {
        margin-top: 20px;
        margin-bottom: 28px;
    }

    .panel-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .panel-content {
        padding: 20px 40px;
        border: 1px solid #d2d2d2;
        border-radius: 10px;
        margin-bottom: 20px;
    }
</style>
