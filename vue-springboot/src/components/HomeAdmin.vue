<template>
    <div>
        <nav-bar></nav-bar>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Type de comptes</th>
                <th scope="col">Solde</th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-active">
                <th scope="row">Active</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
            </tr>
            <tr>
                <th scope="row">Default</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
            </tr>
            <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
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

