<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Banquo Uno</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/homeAdmin">Liste des clients</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/createUser">Créer un utilisateur</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/createCompany">Créer une compagnie</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/RechercheUserByAdmin">Recherche d'un utilisateur</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <ul class="navbar-nav mr-auto my-2 my-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" v-on:click="createUserBtnClicked" href="/"><strong>Logout</strong></a>
                        </li>
                    </ul>
                </form>
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
            },
            createCompanyBtnClicked() {
                delete localStorage.token
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";

</style>
