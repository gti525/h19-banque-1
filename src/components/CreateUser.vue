<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <div class="app-title">Banquo Uno</div>
            <div class="login-container">
                <div class="main-header">
                    <h2>Créer un utilisateur</h2>
                </div>
                <div class="form-group">
                    <label for="firstname">Prénom</label>
                    <input
                            id="firstname"
                            type="text"
                            v-model="firstname"
                            name="firstname"
                            class="form-control"
                    >
                </div>
                <div class="form-group">
                    <label for="lastname">Nom</label>
                    <input
                            id="lastname"
                            type="text"
                            v-model="lastname"
                            name="lastname"
                            class="form-control"
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
                    >
                    {{password}}
                </div>
                <div class="form-group">
                    <label for="mmn">Question 1</label>
                    <select v-model="question1" class="form-control" id="mmn">
                        <option>Quel était votre surnom d'enfance?</option>
                        <option>Dans quelle ville avez-vous rencontré votre conjoint?</option>
                        <option>Quel est le nom de votre ami d'enfance préféré?</option>
                        <option>Dans quelle rue viviez-vous en troisième année?</option>
                        <option>Quelle école avez-vous fréquenté en sixième année?</option>
                        <option>Quel est le prénom et le nom de votre cousin le plus âgé?</option>
                        <option>Quel était le nom de votre premier animal de compagnie?</option>
                        <option>Dans quelle ville ou village votre mère et votre père se sont-ils rencontré?</option>
                        <option>Où étiez-vous quand vous avez eu votre premier baiser?</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="address">Réponse 1</label>
                    <input id="address" type="text" v-model="answer1" name="answer1" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mmn">Question 2</label>
                    <select v-model="question2" class="form-control">
                        <option>Quel était votre surnom d'enfance?</option>
                        <option>Dans quelle ville avez-vous rencontré votre conjoint?</option>
                        <option>Quel est le nom de votre ami d'enfance préféré?</option>
                        <option>Dans quelle rue viviez-vous en troisième année?</option>
                        <option>Quelle école avez-vous fréquenté en sixième année?</option>
                        <option>Quel est le prénom et le nom de votre cousin le plus âgé?</option>
                        <option>Quel était le nom de votre premier animal de compagnie?</option>
                        <option>Dans quelle ville ou village votre mère et votre père se sont-ils rencontré?</option>
                        <option>Où étiez-vous quand vous avez eu votre premier baiser?</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="address">Réponse 2</label>
                    <input type="text" v-model="answer2" name="answer2" class="form-control">
                </div>
                <div class="form-group">
                    <label for="address">Adresse complète</label>
                    <input type="text" v-model="address" name="address" class="form-control">
                </div>
                <div class="form-group">
                    <label for="landline">Numéro de téléphone à domicile</label>
                    <input id="landline" type="tel" v-model="landline" name="landline" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mobile">Numéro de téléphone mobile</label>
                    <input id="mobile" type="tel" v-model="mobile" name="mobile" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Adresse Courriel</label>
                    <input id="email" type="email" v-model="email" name="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mmn">Rôle</label>
                    <select v-model="role" class="form-control">
                        <option>admin</option>
                        <option>client</option>
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
                    <button v-on:click="createUserBtnClicked" class="btn btn-primary btn-common float-right">Créer
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
        delete localStorage.bypass
        delete localStorage.username
    }

    function goActive() {

        startTimer();
    }

    export default {
        name: "Login",
        components: {
            Navbar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                company: "banque",
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
                random_number: Math.floor(Math.random() * (9999 - 1 +1 )) + 9999
            }
        },
        methods: {

            createUserBtnClicked() {
                let data = {
                    company: this.company,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.firstname + this.lastname + this.random_number,
                    creditLimit: this.creditbalanceavailable,
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
                        this.$router.push('/HomeAdmin');
                        alert("votre nom d'utilisateur est " + data.username)
                    })
                    .catch(e => {
                        alert("Impossible de charger les informations. Un champ obligatoire n'est pas rempli ou est incorrect.");
                        console.log(e);
                        console.log(e.request)
                        console.log(e.config)
                        console.log(e.message)
                    });
            }
        },
        created() {
            if (!localStorage.bypass) {
                alert("Vous devez vous connecter avant d'accéder à cette page")
                this.$router.push('/');
            }
        },
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
