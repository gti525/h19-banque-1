<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Banquo Uno</div>
            <div class="transfer-container">
                <div class="main-header">
                    <h2>Transfert de fonds vers un autre compte</h2>
                </div>
                <div class="form-group">
                    <label for="receiveraccountno">Numéro du compte de destination</label>
                    <input
                            id="receiveraccountno"
                            type="number"
                            min="0"
                            v-model="receiveraccountno"
                            name="receiveraccountno"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !receiveraccountno }"
                    >
                </div>
                <div class="form-group">
                    <label for="amount">Montant</label>
                    <input
                            id="amount"
                            type="number"
                            min="0.01"
                            step="0.01"
                            v-model="amount"
                            name="amount"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !amount }"
                    >
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="transferMoneyBtnClicked" class="btn btn-primary btn-common float-right">
                        Transférer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import NavBar from "./NavBarClient.vue";
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
        delete localStorage.bypass
        delete localStorage.username
    }

    function goActive() {

        startTimer();
    }

    export default {
        name: "TransferToOtherAccount",
        components: {
            NavBar
        },
        data() {
            return {
                receiveraccountno: '',
                amount: '',
                error: false
            }
        },
        methods: {
            /* eslint-disable no-console */
            transferMoneyBtnClicked() {
                if (!localStorage.bypass) {
                    alert("Vous devez vous connecter avant d'Accéder a cette page")
                    this.$router.push('/');
                } else {
                    //here should send the request to the backend and get to know if the username and password match
                    let data = {
                        senderaccountno: this.senderaccountno,
                        receiveraccountno: this.receiveraccountno,
                        amount: this.amount,
                    }
                    http
                        .post("/auth/Transfer", data)
                        .then(request => this.transferSuccessful(request))
                        .catch(() => this.transferFailed())
                }
            },
            transferSuccessful(req) {
                if (!req.data.accessToken) {
                    console.log(req)
                    this.transferFailed()
                    return
                }
                this.error = false
                localStorage.token = req.data.accessToken
                localStorage.receiveraccountno = this.receiveraccountno
                console.log(req)
                this.$router.push('/HomeClient')
            },
            transferFailed() {
                this.$router.push('/errorPage');
                delete localStorage.token;
            },
            adminRedirect() {
                this.$router.push("/loginAdmin")
            }
        },
        created() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'Accéder a cette page")
                this.$router.push('/');
            }
        },
    }
    ;
</script>
<style lang="scss" scoped>
    @import "../scss/common.scss";

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
