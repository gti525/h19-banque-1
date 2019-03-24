<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Banquo Uno</div>
            <div>
                <div>
                    <h2>Transfert de fonds vers un autre compte</h2>
                </div>

                <div>
                    <table class="table">
                        <tr>
                            <td>Votre Solde :</td>
                            <td> {{this.amount}}$</td>
                        </tr>
                    </table>
                </div>

                <div class="form-group">
                    <form>
                        Numéro du compte de destination : <input v-model="receiverAccountNo" type="text" name="usrname" maxlength="8"><br>
                    </form>
                </div>
                <div class="form-group">
                    <form>
                       Montant : <input v-model="montant" type="number" name="montant"><br>
                    </form>
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
                receiverAccountNo: '',
                senderAccountNo: '',
                amount: '',
                montant: ''
            }
        },

        /* eslint-disable no-console*/
        created(){
            this.amount = this.$route.params.amount;
            this.senderAccountNo = this.$route.params.sender;
        },


        methods: {

            transferMoneyBtnClicked() {
                http
                    .post("/auth/Transfer", { senderAccountNo: this.senderAccountNo, receiverAccountNo: this.receiverAccountNo, amount: this.montant})
                    .then(response => {
                        console.log(response.data);
                        alert("Transfert réussi")
                        localStorage.bypass = 1
                        location.reload();
                    })
                    .catch(e => {
                        alert("Transfert fail")
                        console.log(e);
                        console.log(e.request)
                        console.log(e.config)
                        console.log(e.message)
                    });
            }
        },

        mounted() {
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

    .bob-container {
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
