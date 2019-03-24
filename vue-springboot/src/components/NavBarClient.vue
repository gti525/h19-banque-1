<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Banquo Uno</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse float-left text-justify" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/homeClient">Compte</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link"
                           v-on:click="transferToOtherAccount()" href="/transferToOtherAccount">Transfert
                        </a>

                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/creditCardPayment">Paiement</a>
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
        name: "navbar-client",
        /* eslint-disable no-console */
        methods: {
            createUserBtnClicked() {
                delete localStorage.token
                delete localStorage.bypass
                delete localStorage.username
            },

            transferToOtherAccount() {
                this.$router.push({
                    name: 'TransferToOtherAccount',
                    params: {amount: this.amountResponse, sender: this.accountnoResponse}
                });
            },
        }
    };

</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";

</style>
