<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <a class="navbar-brand" href="/homeAdmin">Banquo Uno</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/homeAdmin">Liste des clients
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/createUser">Créer un utilisateur</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/RechercheUserByAdmin">Recherche d'un utilisateur</a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ">
                        <a class="nav-link" v-on:click="createUserBtnClicked" href="/loginadmin">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar-Admin",
        /* eslint-disable no-console */
        methods: {
            createUserBtnClicked() {
                delete localStorage.token
                delete localStorage.bypass
                delete localStorage.username
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";

</style>
