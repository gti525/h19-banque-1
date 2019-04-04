<template>
    <div id="print">
        <nav-bar class="no-print"></nav-bar>
        <h1>Liste des transactions associées au compte courant</h1>
        <table id="myTable" class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Numéro de transaction</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
                <th scope="col">Montant</th>
                <th scope="col">Balance</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(transaction) in transactions" :key="transaction.id">
                <td>{{ transaction.id }}</td>
                <td>{{ correctTimeDateFormat(transaction.transdate) }}</td>
                <td>{{ transaction.description }}</td>
                <td>{{ correctAmountFormat(transaction.credit, transaction.debit) }}</td>
                <td>{{ transaction.currently_available_funds }}</td>
            </tr>
            </tbody>
        </table>
        <Footer></Footer>
    </div>
</template>


<script>
    import NavBar from './NavBarClient.vue';
    import Footer from './Footer.vue'
    import http from "../http-common";
    import moment from "moment";
    /* eslint-disable no-console */

    var timeoutID;

    // Réference https://jsfiddle.net/jaredwilli/0f7t25q9/
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

        name: "ShowAccountTransactions",

        data() {
            return {
                sortKey: 'names',
                transactions: [],
                column: ['Numéro de transaction', 'Date', 'Action', 'Montant', 'Solde'],
                people: [
                    {
                        name: 'a75',
                        item1: false,
                        item2: false
                    },
                    {
                        name: 'z32',
                        item1: true,
                        item2: false
                    },
                    {
                        name: 'e77',
                        item1: false,
                        item2: false
                    }]
            }
        },

        components: {
            NavBar: NavBar,
            Footer: Footer
        },

        methods: {
            searchTransactionsForUser() {
                http
                    .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                    .then(response => {
                        this.transactions = response.data[0].userAccount.transactions; // JSON are parsed automatically.
                        function sortByKey(array, key) {
                            return array.sort(function (a, b) {
                                var x = a[key];
                                var y = b[key];
                                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                            });
                        }

                        this.transactions = sortByKey(this.transactions, 'id')

                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            correctTimeDateFormat(transactionDate) {

                return moment(transactionDate).format('YYYY-MM-DD HH:mm:ss');
            },

            correctAmountFormat(transactionCredit, transactionDebit) {

                if (transactionCredit == 0) {
                    return "-" + transactionDebit
                }

                return "+" + transactionCredit
            }
        },
        mounted() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'Accéder a cette page")
                this.$router.push('/');
            } else {
                this.searchTransactionsForUser()
            }
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

