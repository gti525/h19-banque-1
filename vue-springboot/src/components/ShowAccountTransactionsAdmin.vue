<template>
    <div id="print">
        <nav-bar class="no-print"></nav-bar>
        <h1>Liste des transactions associées au compte courant</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Numéro de transaction</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
                <th scope="col">Montant</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(transaction) in transactions" :key="transaction.id">
                <td>{{ transaction.id }}</td>
                <td>{{ transaction.transdate }}</td>
                <td>{{ transaction.description }}</td>
                <td>{{ transaction.balance }}</td>
            </tr>
            </tbody>
        </table>
        <div class="btn-group" aria-label="Basic example">
            <a href="/homeadmin" class="btn btn-primary" role="button">Retour</a>
        </div>
        <Footer></Footer>
    </div>
</template>


<script>
    import NavBar from './NavBarAdmin.vue';
    import http from "../http-common";
    import Footer from './Footer.vue'

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
    }

    function goActive() {

        startTimer();
    }

    export default {
        name: "ShowAccountTransactionsAdmin",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                id: 0,
                username: '',
                searchFile: '',
                transactions: [],
                tt: '',
                dollardCheque: ".00$",
                dollardCredit: ".00$"
            }
        },
        /* eslint-disable no-console */
        mounted() {
            this.id = this.$route.params.id;
            this.username = this.$route.params.username;
            this.searchFile = this.$route.params.searchFile;
            this.textUsername = this.$route.params.textUsername;
            console.log(this.$route.params)
            console.log(this.username)
            if (this.searchFile == "userAccount") {
                this.accountData()
            } else {
                this.creditData()
            }
        },
        methods: {
            /* eslint-disable no-console */
            accountData() {
                console.log("test123" + "  " + this.id)
                http
                //.get("/users/" + this.id)
                    .get("/auth/searchusers?search=" + this.textUsername + ":" + "*" + this.username + "*")
                    .then(response => {
                        this.transactions = response.data[0].userAccount.transactions; // JSON are parsed automatically.
                        console.log(this.transactions)
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            creditData() {
                console.log("test123" + "  " + this.id)
                http
                //.get("/users/" + this.id)
                    .get("/auth/searchusers?search=" + this.textUsername + ":" + "*" + this.username + "*")
                    .then(response => {
                        this.transactions = response.data[0].userCreditCard.transactions; // JSON are parsed automatically.
                        console.log(this.transactions)
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
    }
</script>
<style lang="scss" scoped>
    @import "../scss/common.scss";

    .btn-primary {
        text-align: right;
    }

    .size {
        font-size: 8px;
    }

    .design {
        margin-top: 6%;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Hind Siliguri', sans-serif;
    }

    .top {
        margin-top: 2%;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        font-family: 'Hind Siliguri', sans-serif;

    }


</style>

