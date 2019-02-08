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
                <td> {{ users.amountAvailOfBankAccount }}{{dollard}}</td>
            </tr>
            <tr>
                <th scope="row">Crédit</th>
                <td>{{ users.balance}}{{dollard}}</td>
            </tr>
            <!--    <tr class="table-primary"> -->
            </tbody>
        </table>
        <div class="btn-group" aria-label="Basic example">
            <a href="/homeadmin" class="btn btn-primary" role="button">Retour</a>
        </div>
    </div>

</template>

<script>
    import NavBar from './NavBarAdmin.vue';
    import http from "../http-common";
    export default {
        name: "AdminCompteClient",
        components: {
            NavBar: NavBar
        },
        data() {
            return {
                id: 0,
                users: [],
                dollard: ".00$"
            }
        },
        /* eslint-disable no-console */
        created() {
            this.id = this.$route.params.id;
            console.log(this.id)
        },
        methods: {
            /* eslint-disable no-console */
            saveUser() {
                console.log("test123" + "  " +this.id)
                http
                    .get("/users/" + this.id)
                    .then(response => {
                        this.users = response.data; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.saveUser()
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

