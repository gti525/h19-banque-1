<template>
    <div>
        <nav-bar></nav-bar>
        <h1>Transfert de fonds vers un autre compte</h1>
        <div class="container">
            <div>
                <div>
                    <table class="table">
                        <tr>
                            <td>Votre balance :</td>
                            <td> {{this.amount}}$</td>
                        </tr>
                    </table>
                </div>

                <div class="form-group">
                    <table class="table table-borderless table-condensed table-hover">
                        <tbody>
                        <tr>
                            <td> Numéro du compte de destination : </td>
                            <td> <input v-model="receiverAccountNo" type="text" name="usrname" maxlength="8"></td>
                        </tr>
                        <tr>
                            <td>Montant : </td>
                            <td> <input v-model="montant" type="number" name="montant" min="0.01"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="transferMoneyBtnClicked" class="btn btn-primary btn-common float-right">
                        Transférer
                    </button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import NavBar from "./NavBarClient.vue";
    import http from "../http-common";
    import Footer from './Footer.vue';

    /* eslint-disable no-console */

    export default {
        name: "TransferToOtherAccount",
        components: {
            NavBar: NavBar,
            Footer: Footer
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
                    alert("Transfert à Banque1")

                    http
                        .post("/auth/Transfer", { senderAccountNo: this.senderAccountNo, receiverAccountNo: this.receiverAccountNo, amount: this.montant})
                        .then(response => {
                            console.log(response.data);
                            alert("Le transfert a été effectué avec succès. ")
                            localStorage.bypass = 1
                            this.$router.push('/HomeClient')
                            location.reload();
                        })
                        .catch(e => {
                            alert("Le transfert a échoué. Veuillez-vous assurer de la validité des informations entrées.")
                            console.log(e);
                            console.log(e.request)
                            console.log(e.config)
                            console.log(e.message)
                        });
                } else {
                    alert("Transfert à Banque2 ")

                    http
                        .post("/auth/OtherBankTransfer", { senderAccountNo: this.senderAccountNo, receiverAccountNo: this.receiverAccountNo, amount: this.montant})
                        .then(response => {
                            console.log(response.data);
                            alert("Le transfert a été effectué avec succès.")
                            localStorage.bypass = 1
                            this.$router.push('/HomeClient')
                            location.reload();
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
                alert("Vous devez vous connecter avant d'accéder à cette page")
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
