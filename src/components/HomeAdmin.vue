<template>
    <div>
        <nav-bar></nav-bar>
        <div class="app-title">Listes des clients</div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Nom du client</th>
                <th scope="col">Courriel</th>
                <th scope="col">Numéro de téléphone</th>
                <th scope="col">Transaction du compte courant</th>
                <th scope="col">Transaction de la carte de credit</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user) in users" :key="user.id" v-if="user.roles[0].name === 'ROLE_USER'">
                <td>
                    <router-link :to="{
                            name: 'AdminCompteClient-details',
                            params: { user: user, id: user.id }
                        }">
                        {{user.firstname}} {{ user.lastname }}
                    </router-link>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.landline }}</td>
                <td>
                    <router-link :to="{
                            name: 'ShowAccountTransactionsAdmin-details',
                            params: {id: user.id, username: user.username, searchFile: 'userAccount', textUsername: 'username' }
                        }">
                        {{user.userAccount.accountno}}
                    </router-link>
                </td>
                <td>
                    <router-link :to="{
                            name: 'ShowAccountTransactionsAdmin-details',
                            params: {id: user.id, username: user.username, searchFile: 'userCreditCard', textUsername: 'username' }
                        }">
                        {{user.userCreditCard.creditcardno}}
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
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
        name: "AdminHome",
        components: {
            NavBar: NavBar,
            Footer: Footer
        },
        data() {
            return {
                users: []
            };
        },

        methods: {
            /* eslint-disable no-console */
            saveUser() {
                if (!localStorage.bypass) {
                    alert("Vous devez vous connecter avant d'accéder à cette page")
                    this.$router.push('/');
                } else {
                    console.log("test")
                    http
                        .get("/usersAll")
                        .then(response => {
                            this.users = response.data; // JSON are parsed automatically.
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            },
        },

        mounted() {
            this.saveUser()
        },


    };
</script>
<style lang="scss" scoped>
    @import "../scss/common.scss";


    .table-hover {
        margin-top: 6%;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Hind Siliguri', sans-serif;

    }

    .app-title {
        margin-top: 6%;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        color: #002ec3;
        font-family: "Hind Siliguri", sans-serif;
    }

</style>

