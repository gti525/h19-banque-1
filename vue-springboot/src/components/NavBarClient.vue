<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <a class="navbar-brand">Banquo Uno</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/homeClient">Compte
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/showTransaction">Transaction</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/transferToOtherAccount">Transfert</a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ">
                        <a class="nav-link" v-on:click="createUserBtnClicked" href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar-client",
        /* eslint-disable no-console */
        methods: {
            createUserBtnClicked() {
                delete localStorage.token
            }
        }
    };

</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";

</style>
