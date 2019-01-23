<template>
    <div>
        <nav-bar></nav-bar>
        <h1 class="top">Antoine Shervin</h1>
        <table class="table design">
            <thead>
            <tr class="table-active">
                <th scope="col">client</th>
                <th scope="col">Solde</th>
                <th scope="col">Transaction</th>
            </tr>
            </thead>
            <tbody>
            <tr class="design">
                <th scope="row">Cheque</th>
                <td>100.00 $</td>
                <td>Activer</td>
            </tr>
            <tr>
                <th scope="row">Crédit</th>
                <td>0.00 $</td>
                <td>Activer</td>
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
    import NavBar from './NavBar.vue';
    export default {
        name: "AdminHome",
        components: {
            NavBar: NavBar
        },
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

