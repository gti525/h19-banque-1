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
                        Numéro du compte de destination : <input v-model="receiverAccountNo" type="text" name="username" maxlength="8"><br>
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

                //Vérifie si le compte receiver vient de banque 1 ou 2 et effectue un post à l'API approprié.
                let digits = Math.floor((Math.log10(this.receiverAccountNo)));
                let firstdigit = Math.floor((this.receiverAccountNo / (Math.pow(10,digits))));
                if (Math.floor(firstdigit) == 1) {
                    //alert("Transfert à Banque1")

                    http
                        .post("/auth/Transfer", { senderAccountNo: this.senderAccountNo, receiverAccountNo: this.receiverAccountNo, amount: this.montant})
                        .then(response => {
                            console.log(response.data);
                            alert("Le transfert a été effectué avec succès. ")
                            localStorage.bypass = 1
                            location.href="homeClient"
                        })
                        .catch(e => {
                            alert("Le transfert a échoué. Veuillez-vous assurer de la validité des informations entrées.")
                            console.log(e);
                            console.log(e.request)
                            console.log(e.config)
                            console.log(e.message)
                        });
                } else {
                    //alert("Transfert à Banque2 ")

                    http
                        .post("/auth/OtherBankTransfer", { senderAccountNo: this.senderAccountNo, receiverAccountNo: this.receiverAccountNo, amount: this.montant})
                        .then(response => {
                            console.log(response.data);
                            alert("Le transfert a été effectué avec succès.")
                            localStorage.bypass = 1
                            location.href="homeClient"
                        })
                        .catch(e => {
                            alert("Le transfert a échoué. Veuillez-vous assurer de la validité des informations entrées.")
                            console.log(e);
                            console.log(e.request)
                            console.log(e.config)
                            console.log(e.message)
                        });
                }
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
