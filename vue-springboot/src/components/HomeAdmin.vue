<template>
    <div>
        <nav-bar></nav-bar>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Nom du client</th>
                <th scope="col">Type de comptes</th>
                <th scope="col">Activer ou désactiver</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user) in users" :key="user.id">

                <td>{{ user.firstname }} , {{ user.lastname }}</td>
                <td>{{ user.lastname }}</td>
                <td>{{ user.mobile }}</td>
            </tr>

            </tbody>
        </table>
        <div class="lol">
            <ul>
                <li v-for="(user, index) in users" :key="index">
                    <router-link :to="{
                            name: 'AdminCompteClient-details',
                            params: { user: user, id: user.id, firstname: user.firstname }
                        }">
                        {{user.firstname}}
                    </router-link>
                </li>
            </ul>
     </div>
    </div>

</template>

<script>
    import NavBar from './NavBar.vue';
    import http from "../http-common";

    export default {
        name: "AdminHome",
        components: {
            NavBar: NavBar
        },
        data() {
            return {
                customers: [],
                users: []

            };
        },
        methods: {
            /* eslint-disable no-console */
            saveCustomer() {
                console.log("test")
                http
                    .get("/customers")
                    .then(response => {
                        this.customers = response.data; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            saveUser() {
                console.log("test")
                http
                    .get("/users")
                    .then(response => {
                        this.users = response.data; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        mounted() {
            this.saveCustomer()
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

