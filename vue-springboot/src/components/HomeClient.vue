<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">{{ this.users.firstname }} {{ this.users.lastname }}</div>
            <div class="login-container">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Compte courant</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Cheque Banque Uno</td>
                        <td>{{ this.users.userAccount.accountno }}</td>
                    </tr>
                    <tr>
                        <td>Solde :</td>
                        <td>{{ this.users.userAccount.amount }}$</td>
                    </tr>
                    <tr>
                        <td>
                            <button class="btn btn-outline-primary btn-common float-left" v-on:click="listAccountTransactions()">Liste des transactions</button>
                        </td>

                        <router-link :to="{
                        name: 'TransferToOtherAccount',
                        params: {amount: users.userAccount.amount }
                        }">
                            <button class="btn btn-outline-primary btn-common float-left" v-on:click="transferToOtherAccount()">Transfert de fond à une autre compte</button>

                        </router-link>
                      <!--  <td>


                              <button class="btn btn-outline-primary btn-common float-left" v-on:click="transferToOtherAccount()">Transfert de fond à une autre compte</button>

                        </td>-->
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
                        <td>{{ this.users.userCreditCard.creditcardno }}</td>
                    </tr>
                    <tr>
                        <td>Limite de la carte :</td>
                        <td>{{ this.users.userCreditCard.creditLimit }}$</td>
                    </tr>
                    <tr>
                        <td>Montant disponible :</td>
                        <td>{{ this.users.userCreditCard.amountavailable }}$</td>
                    </tr>
                    <tr>
                        <td>Montant à payer :</td>
                        <td>{{ this.users.userCreditCard.amountowned }}$</td>
                    </tr>
                    <tr>
                        <td>
                            <button class="btn btn-outline-primary btn-common float-left" v-on:click="listCreditTransactions()">Liste des transactions</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-primary btn-common float-left" v-on:click="creditCardPayment()">Paiement de la carte de crédit</button>
                        </td>
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
                        <td>{{this.users.email}}</td>
                    </tr>
                    <tr>
                        <td>Téléphone :</td>
                        <td>{{this.users.landline}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div id="horizontal-analytic-banner"></div>
        </div>
        <div class="app-title"></div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavBar from './NavBarClient.vue';
    import Footer from './Footer.vue'
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

        document.location.href = "http://localhost:4200";
        delete localStorage.token
        delete localStorage.username
        delete localStorage.bypass
    }

    function goActive() {


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
            NavBar: NavBar,
            Footer: Footer
        },
        methods: {
            listAccountTransactions(){

                this.$router.push('/ShowAccountTransactions');
            },

            listCreditTransactions(){

                this.$router.push('/ShowCreditTransactions');
            },

            transferToOtherAccount(){

                this.$router.push('/TransferToOtherAccount');
            },

            creditCardPayment(){

                this.$router.push('/creditCardPayment');
            },

            passToTransfer(){
                this.$router.push({
                    path: '/TransferToAnotherAccount',
                    query: {amount: this.amount,
                    senderaccountno: this.accountno}
                });
            }
        },
        // eslint-disable-next-line
        created() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'Accéder a cette page")
                this.$router.push('/');
            } else {
                http
                    .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                    .then(response => {
                        this.users = response.data[0]; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                        alert("Impossible de charger les informations")
                    })
            }
        },
        mounted () {
            // eslint-disable-next-line
            document.addEventListener("DOMContentLoaded", function () {
                const e = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQ3LCJpYXQiOjE1NTE4MTQ2MDV9.bNtWwBzEhjN6vBhlZQ8NSV2CeNYfe54BsOKAh4QLBok";
                const t = function () {
                    if ("undefined" != typeof Storage && localStorage.getItem("gti525analytic")) {
                        const e = JSON.parse(localStorage.getItem("gti525analytic"));
                        if (new Date(e.expiration).getTime() > (new Date).getTime()) return e.clientId
                    }
                    return
                }();
                t ? function (t) {
                    let n = new XMLHttpRequest;
                    // eslint-disable-next-line
                    n.open("GET", "https://gti525-analitycs.herokuapp.com/api/v1/banners/code", !0), n.onload = function (o) {
                        4 === n.readyState && 200 === n.status && Function(`return (${n.responseText})`)()(t, e)
                    }, n.setRequestHeader("x-access-token", e), n.send()
                }(t) : function () {
                    let t = new XMLHttpRequest;
                    // eslint-disable-next-line
                    t.open("GET", "https://gti525-analitycs.herokuapp.com/api/v1/analytics/code", !0), t.onload = function (n) {
                        4 === t.readyState && 200 === t.status && Function(`return (${t.responseText})`)()(e)
                    }, t.setRequestHeader("x-access-token", e), t.send()
                }()
            }, !1);
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
