<template>
    <div>
        <nav-bar></nav-bar>
        <h2>Paiement de la carte de crédit</h2>
        <div class="container">
            <div class="transfer-container">
                <div>
                    <table class="table">
                        <tr>
                            <td>Votre balance :</td>
                            <td> {{this.amountownedResponse}}$</td>
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

    export default {
        name: "CreditCardPayment",
        components: {
            NavBar
        },
        data() {
            return {
                amount: '',
                accountNumber: '',
                creditNumber: '',
                creditcardnoResponse: '',
                amountownedResponse: '',
                accountnoResponse: '',
                montant: ''
            }
        },
        /* eslint-disable no-console*/
        methods: {
            bob () {
                http
                    .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                    .then(response => {
                        //this.users = response.data[0]; // JSON are parsed automatically.
                        this.creditcardnoResponse = response.data[0].userCreditCard.creditcardno
                        this.amountownedResponse = response.data[0].userCreditCard.amountowned
                        this.accountnoResponse = response.data[0].userAccount.accountno

                    })
                    .catch(() => {
                        //console.log(e);
                        alert("Impossible de charger les informations")
                    })

            },
            paymentBtnClicked() {
                http
                    .post("/auth/CrediCardPayment", {
                        senderAccountNo: this.accountnoResponse,
                        creditCardNo: this.creditcardnoResponse,
                        amount: this.montant
                    })
                    .then(() => {
                        //console.log(response.data);
                        alert("Le paeiment a été réussi")
                        localStorage.bypass = 1
                        this.$router.push('/HomeClient')
                        location.reload();
                    })
                    .catch(() => {
                        alert("Le paiement n'a pas été réussi")
                        //console.log(e);
                        //console.log(e.request)
                        //console.log(e.config)
                        //console.log(e.message)
                    });
            }
        },
        created() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'accéder à cette page")
                this.$router.push('/');
            } else {
                this.bob()
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
