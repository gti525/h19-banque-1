<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Banquo Uno</div>
            <div class="login-container">
                <div class="main-header">
                    <h2>Créer un compte entreprise</h2>
                </div>
                <div class="form-group">
                    <label for="company">Nom de l'entreprise</label>
                    <input
                            id="company"
                            type="text"
                            v-model="company"
                            name="company"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !company }"
                    >
                </div>
                <div class="form-group">
                    <label for="username">Nom d'utilisateur du compte entreprise</label>
                    <input
                            id="username"
                            type="text"
                            v-model="username"
                            name="username"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !username }"
                    >
                </div>
                <div class="form-group">
                    <label for="password">Mot de Passe</label>
                    <input
                            id="password"
                            type="password"
                            v-model="password"
                            name="password"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !password }"
                    >
                    {{password}}
                </div>
                <div class="form-group">
                    <label for="mmn">Question 1</label>
                    <select v-model="question1" class="form-control" id="mmn">
                        <option>Quel est le siège social de l'entreprise?</option>
                        <option>Dans quelle ville a été créé l'entreprise?</option>
                        <option>Quel est le nombre d'employé dans la compagnie?</option>
                        <option>Qui est le directeur général de l'entreprise?</option>
                        <option>En quelle année a été fondé l'entreprise?</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="address">Réponse 1 (La taille de la réponse doit être comprise entre 6 et 100 caractères)</label>
                    <input id="address" type="text" v-model="answer1" name="answer1" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mmn">Question 2</label>
                    <select v-model="question2" class="form-control">
                        <option>Quel est le siège social de l'entreprise?</option>
                        <option>Dans quelle ville a été créé l'entreprise?</option>
                        <option>Quel est le nombre d'employé dans la compagnie?</option>
                        <option>Qui est le directeur général de l'entreprise?</option>
                        <option>En quelle année a été fondé l'entreprise?</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="address">Réponse 2 (La taille de la réponse doit être comprise entre 6 et 100 caractères)</label>
                    <input type="text" v-model="answer2" name="answer2" class="form-control">
                </div>
                <div class="form-group">
                    <label for="address">Adresse complète</label>
                    <input type="text" v-model="address" name="address" class="form-control">
                </div>
                <div class="form-group">
                    <label for="landline">Numéro de téléphone</label>
                    <input id="landline" type="tel" v-model="landline" name="landline" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Adresse Courriel de l'entreprise</label>
                    <input id="email" type="email" v-model="email" name="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mmn">Rôle</label>
                    <select v-model="role" class="form-control">
                        <option>company</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="city">Ville</label>
                    <input id="city" type="text" v-model="city" name="city" class="form-control">
                </div>
                <div class="form-group">
                    <label for="province">Province</label>
                    <input id="province" type="text" v-model="province" name="province" class="form-control">
                </div>
                <div class="form-group">
                    <label for="country">Pays</label>
                    <input id="country" type="text" v-model="country" name="country" class="form-control">
                </div>
                <div class="form-group">
                    <label for="zip">Code Postal</label>
                    <input id="zip" type="zip" v-model="zip" name="zip" class="form-control">
                </div>
                <div class="panel-section">
                    <div class="panel-title">Compte bancaire</div>
                    <div class="panel-content">
                        <div class="form-group">
                            <label for="amount-avail">Montant d'argent disponible</label>
                            <input id="amount-avail" type="text" v-model="amount" name="amount-avail"
                                   class="form-control">
                        </div>

                    </div>
                </div>
                <div class="panel-section">
                    <div class="panel-title">Compte crédit</div>
                    <div class="panel-content">
                        <!-- <div class="form-group">
                             <label for="creditLimit">Limite de crédit</label>
                             <input
                                     id="creditLimit"
                                     type="text"
                                     v-model="creditLimit"
                                     name="creditLimit"
                                     class="form-control"
                             >
                         </div>-->
                        <div class="form-group">
                            <label for="creditbalanceavailable">Crédit disponible</label>
                            <input
                                    id="creditbalanceavailable"
                                    type="text"
                                    v-model="creditbalanceavailable"
                                    name="amount-avail"
                                    class="form-control"
                            >
                        </div>
                    </div>
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="createCompanyBtnClicked" class="btn btn-primary btn-common float-right">Créer
                    </button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavBar from "./NavBarAdmin.vue";
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
        name: "Login",
        components: {
            NavBar: NavBar,
            Footer: Footer

        },
        data() {
            return {
                company: '',
                firstname: '',
                lastname: '',
                username: '',
                creditLimit: '',
                amount: '',
                creditbalanceavailable: '',
                creditbalanceowned: 0,
                email: '',
                role: '',
                question1: '',
                answer1: '',
                question2: '',
                answer2: '',
                password: '',
                address: '',
                city: '',
                province: '',
                zip: '',
                country: '',
                mobile: '',
                landline: '',
            }
        },
        methods: {
            createCompanyBtnClicked() {
                let data = {
                    company: this.company,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.username,
                    creditLimit: this.creditLimit,
                    amount: this.amount,
                    creditbalanceavailable: this.creditbalanceavailable,
                    creditbalanceowned: this.creditbalanceowned,
                    email: this.email,
                    role: [this.role],
                    question1: this.question1,
                    answer1: this.answer1,
                    question2: this.question2,
                    answer2: this.answer2,
                    password: this.password,
                    address: this.address,
                    city: this.city,
                    province: this.province,
                    zip: this.zip,
                    country: this.country,
                    mobile: this.mobile,
                    landline: this.landline,
                }

                http
                /* eslint-disable no-console */
                    .post("/auth/signup", data)
                    .then(response => {
                        console.log(response.data);
                        this.$router.push('/homeAdmin');

                    })
                    .catch(e => {
                        this.$router.push('/errorPage');
                        console.log(e);
                        console.log(e.request)
                        console.log(e.config)
                        console.log(e.message)
                    });

                this.submitted = true;
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
