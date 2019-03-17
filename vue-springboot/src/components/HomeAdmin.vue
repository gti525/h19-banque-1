<template>
    <div>
        <nav-bar></nav-bar>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Nom du client</th>
                <th scope="col">Courriel</th>
                <th scope="col">Numéro de téléphone</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user) in users" :key="user.id">
                <td>
                    <router-link :to="{
                            name: 'AdminCompteClient-details',
                            params: { user: user, id: user.id, username: user.username }
                        }">
                        {{user.name}} {{ user.lastname }}
                    </router-link>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.landline }}</td>
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
            },
            test () {
                this.$router.push('/errorPage');
            }


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

</style>

