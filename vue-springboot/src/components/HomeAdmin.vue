<template>
    <div>
        <nav-bar></nav-bar>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Client</th>
                <th scope="col">Type de comptes</th>
                <th scope="col">Activer ou désactiver</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(customer) in customers" :key="customer.id">
                <td>{{ customer.name }}</td>
                <td>{{ customer.age }}</td>
                <td>{{ customer.active }}</td>
            </tr>
            </tbody>
        </table>
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
                customers: []

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
            }
        },
        mounted() {
            this.saveCustomer();
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

