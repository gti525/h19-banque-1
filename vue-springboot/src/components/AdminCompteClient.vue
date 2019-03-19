<template>
    <div>
        <nav-bar></nav-bar>
        <h1 class="top">{{ users.firstname }} {{ users.lastname}}</h1>
        <table class="table design">
            <thead>
            <tr class="table-active">
                <th scope="col">Type de compte</th>
                <th scope="col">Solde</th>
            </tr>
            </thead>
            <tbody>
            <tr class="design">
                <th scope="row">Cheque</th>
                <td> {{dollardCheque}}</td>
            </tr>
            <tr>
                <th scope="row">Crédit</th>
                <td>{{dollardCredit}}</td>
            </tr>
            <!--    <tr class="table-primary"> -->
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
        delete localStorage.bypass
        delete localStorage.username

    }

    function goActive() {

        startTimer();
    }
    export default {
        name: "AdminCompteClient",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                id: 0,
                username: '',
                searchFile: '',
                users: [],
                dollardCheque: ".00$",
                dollardCredit: ".00$"
            }
        },
        /* eslint-disable no-console */
        created() {
            this.id = this.$route.params.id;
            this.username = this.$route.params.username;
            this.searchFile = this.$route.params.searchFile;
            console.log(this.$route.params)
            console.log(this.username)
        },
        methods: {
            /* eslint-disable no-console */
            saveUser() {
                console.log("test123" + "  " +this.id)
                http
                    //.get("/users/" + this.id)
                    .get("/auth/searchusers?search=" + this.searchFile + ":" + "*" + this.username + "*")
                    .then(response => {
                        this.users = response.data[0]; // JSON are parsed automatically.
                       // console.log(this.users)
                        this.dollardCheque = this.users.userAccount.amount + " $"
                        this.dollardCredit = this.users.userCreditCard.amountowned + " $"
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'Accéder a cette page")
                this.$router.push('/');
            } else {
                this.saveUser()
            }
        }
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

