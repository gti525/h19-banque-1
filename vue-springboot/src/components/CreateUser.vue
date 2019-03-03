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
                            :class="{ 'is-invalid': submitted && !firstname }"
                    >
                    {{firstname}}
                </div>
                <div class="form-group">
                    <label for="lastname">Nom</label>
                    <input
                            id="lastname"
                            type="text"
                            v-model="lastname"
                            name="lastname"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !lastname }"
                    >
                    {{lastname}}
                </div>
                <div class="form-group">
                    <label for="username">Nom d'utilisateur</label>
                    <input
                            id="username"
                            type="text"
                            v-model="username"
                            name="username"
                            class="form-control"
                            :class="{ 'is-invalid': submitted && !username }"
                    >
                    {{username}}
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
                    <input id="address" type="text" v-model="answer1" name="address" class="form-control">
                </div>
                {{answer1}}
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
                    {{question2}}
                </div>
                <div class="form-group">
                    <label for="address">Réponse 2</label>
                    <input type="text" v-model="answer2" name="address" class="form-control">
                </div>
                {{answer2}}
                <div class="form-group">
                    <label for="mmn">Question 3</label>
                    <select v-model="question3" class="form-control">
                        <option>Quel était votre surnom d'enfance?</option>
                        <option>Dans quelle ville avez-vous rencontré votre conjoint?</option>
                        <option>Quel est le nom de votre ami d'enfance préféré?</option>
                        <option>Dans quelle rue viviez-vous en troisième année?</option>
                        <option>Quelle école avez-vous fréquenté en sixième année?</option>
                        <option>Quel est le prénom et le nom de votre cousin le plus âgé?</option>
                        <option>Quel était le nom de votre premier animal de compagnie?</option>
                        <option>Dans quelle ville ou village votre mère et votre père se sont-ils rencontré?
                        </option>
                        <option>Où étiez-vous quand vous avez eu votre premier baiser?</option>
                    </select>
                    {{question3}}
                </div>
                <div class="form-group">
                    <label for="address">Réponse 3</label>
                    <input type="text" v-model="answer3" name="address" class="form-control">
                </div>
                {{answer3}}
                <div class="form-group">
                    <label for="address">Adresse complète</label>
                    <input type="text" v-model="fullAddress" name="address" class="form-control">
                </div>
                <div class="form-group">
                    <label for="home-phone">Téléphone fixe</label>
                    <input id="home-phone" type="tel" v-model="homePhone" name="home-phone" class="form-control">
                </div>
                <div class="form-group">
                    <label for="mobile">Téléphone mobile</label>
                    <input id="mobile" type="tel" v-model="mobile" name="mobile" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Courriel</label>
                    <input id="email" type="email" v-model="email" name="email" class="form-control">
                </div>
                <div class="panel-section">
                    <div class="panel-title">Compte bancaire</div>
                    <div class="panel-content">
                        <div class="form-group">
                            <label for="amount-avail">Montant d'argent disponible</label>
                            <input id="amount-avail" type="text" v-model="amountAvailOfBankAccount" name="amount-avail"
                                   class="form-control">
                        </div>

                    </div>
                </div>

                <div class="panel-section">
                    <div class="panel-title">Compte crédit</div>
                    <div class="panel-content">
                        <div class="form-group">
                            <label for="amount-avail">Montant d'argent disponible</label>
                            <input
                                    type="text"
                                    v-model="limiteCredit"
                                    name="amount-avail"
                                    class="form-control"
                            >
                        </div>
                        <div class="form-group">
                            <label for="amount-owed">Solde</label>
                            <input id="amount-owed" type="text" v-model="balance" name="amount-owed"
                                   class="form-control">
                        </div>
                    </div>
                </div>
                <div class="form-group clearfix">
                    <button v-on:click="createUserBtnClicked" class="btn btn-primary btn-common float-right">Créer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBarAdmin.vue";
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
            NavBar
        },
        data() {
            return {
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                question1: '',
                question2: '',
                question3: '',
                answer1: '',
                answer2: '',
                answer3: '',
                fullAddress: '',
                homePhone: '',
                mobile: '',
                email: '',
                chequing: '',
                saving: '',
                amountAvailOfBankAccount: '',
                limiteCredit: '',
                balance: '',
                chequingSaving: 'Chequing',
                submitted: ''
            }
        },
        methods: {
            createUserBtnClicked() {
                let data = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.username,
                    password: this.password,
                    question1: this.question1,
                    question2: this.question2,
                    question3: this.question3,
                    answer1: this.answer1,
                    answer2: this.answer2,
                    answer3: this.answer3,
                    fullAddress: this.fullAddress,
                    homePhone: this.homePhone,
                    mobile: this.mobile,
                    email: this.email,
                    chequing: this.chequing,
                    saving: this.saving,
                    amountAvailOfBankAccount: this.amountAvailOfBankAccount,
                    limiteCredit: this.limiteCredit,
                    balance: this.balance,
                    chequingSaving: this.chequingSaving

                }

                http
                /* eslint-disable no-console */
                    .post("/user", data)
                    .then(response => {
                        console.log(response.data);
                        this.$router.push('/homeAdmin');

                    })
                    .catch(e => {
                        this.$router.push('/errorPage');
                        console.log(e);
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

