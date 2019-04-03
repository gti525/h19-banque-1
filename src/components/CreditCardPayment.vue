<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Banquo Uno</div>
            <div class="transfer-container">
                <div class="main-header">
                    <h2>Paiement de la carte de crédit</h2>
                </div>
                <div>
                    <table class="table">
                        <tr>
                            <td>Vous devez :</td>
                            <td> {{this.amount}}$</td>
                        </tr>
                    </table>
                </div>
                <div class="form-group">
                    <form>
                        Montant : <input v-model="montant" type="number" name="montant"><br>
                    </form>
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="paymentBtnClicked" class="btn btn-primary btn-common float-right">Payer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBarClient.vue";
    import http from "../http-common";

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
        delete localStorage.bypass
        delete localStorage.username
    }

    function goActive() {

        startTimer();
    }

    export default {
        name: "CreditCardPayment",
        components: {
            NavBar
        },
        data() {
            return {
                amount: '',
                accountNumber: '',
                creditNumber: ''
            }
        },
        /* eslint-disable no-console*/
        methods: {
            paymentBtnClicked() {
                http
                    .post("/auth/CrediCardPayment", {
                        senderAccountNo: this.accountNumber,
                        creditCardNo: this.creditNumber,
                        amount: this.montant
                    })
                    .then(response => {
                        console.log(response.data);
                        alert("Paiement réussi")
                        localStorage.bypass = 1
                        this.$router.push('/HomeClient')
                        location.reload();
                    })
                    .catch(e => {
                        alert("Paiement fail")
                        console.log(e);
                        console.log(e.request)
                        console.log(e.config)
                        console.log(e.message)
                    });
            }
        },
        created() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'Accéder a cette page")
                this.$router.push('/');
            } else {
                this.amount = this.$route.params.amount;
                this.accountNumber = this.$route.params.sender;
                this.creditNumber = this.$route.params.number;
                console.log(this.$route.params)
            }
        },
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
