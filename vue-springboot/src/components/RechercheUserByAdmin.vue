<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="login-container">
                <div class="main-header">
                    <h2>Recherche liste utilisateur</h2>
                </div>

                <select v-model="selected">
                    <option disabled value="">Choisissez votre recherche</option>
                    <option>Prénom</option>
                    <option>Nom</option>
                    <option>Nom d'utilisateur</option>
                    <option>Courriel</option>
                    <option>Adresse</option>
                    <option>Code postal</option>
                    <option>Téléphone</option>
                    <option>Ville</option>
                    <option>Province</option>
                    <option>Pays</option>
                    <option>Numéro carte crédit</option>
                    <option>Numéro compte</option>
                </select>
                <span> Sélectionné </span>
                <br>
                <input @keyup.enter="bob" type="text" v-model="username" name="username" class="form-control">
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="bob" class="btn btn-primary btn-common float-right">Recherche
                    </button>


            </div>
        </div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Nom du client</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user) in users" :key="user.id">
                <td>
                    <router-link :to="{
                            name: 'AdminCompteClient-details',
                            params: { user: user, id: user.id, firstname: user.firstname }
                        }">
                        {{user.username}} {{ user.lastname }}
                    </router-link>
                </td>
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
        name: "Login",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                users: [],
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                accountno: '',
                address: '',
                city: '',
                province: '',
                country: '',
                zip: '',
                landline: '',
                mobile: '',
                creditcardno: '',
                bobs: ''
        }
        },
        methods: {
            bob () {
                if (this.selected == "Prénom") {
                    this.bobs = "firstname"
                }
                if (this.selected == "Nom") {
                    this.bobs = "lastname"
                }
                if (this.selected == "Nom d'utilisateur") {
                    this.bobs = "username"
                }
                if (this.selected == "Courriel") {
                    this.bobs = "email"
                }
                if (this.selected == "Adresse") {
                    this.bobs = "address"
                }
                if (this.selected == "Code postal") {
                    this.bobs = "zip"
                }
                if (this.selected == "Téléphone") {
                    this.bobs = "landline"
                }
                if (this.selected == "Ville") {
                    this.bobs = "city"
                }
                if (this.selected == "Pays") {
                    this.bobs = "country"
                }
                if (this.selected == "Numéro carte crédit") {
                    this.bobs = "creditcardno"
                }
                if (this.selected == "Numéro ompte") {
                    this.bobs = "accountno"
                }
                console.log(this.bobs)
                console.log(this.username + "text")
                this.recherche()
            },
            recherche() {
                http
                    .get("/auth/searchusers?search=" + this.bobs + ":" + "*" + this.username + "*")
                    .then(response => {
                        this.users = response.data; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }
    };
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

