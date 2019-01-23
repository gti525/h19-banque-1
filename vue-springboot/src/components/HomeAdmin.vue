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
            <tr class="table-active">
                <th scope="row"><a class="text-link" href="/AdminCompteClient">Antoine Shervin
                </a></th>
                <td>Column content</td>
                <td>Activer</td>
            </tr>
            <tr>
                <th scope="row">Brutus, Jefferson</th>
                <td>Column content</td>
                <td>Activer</td>
            </tr>
            <tr class="table-primary">
                <th scope="row">Giannotti Benjamin</th>
                <td>Column content</td>
                <td>Désactiver</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import NavBar from './NavBar.vue';

    export default {
        name: "AdminHome",
        components: {
            NavBar: NavBar
        }
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

