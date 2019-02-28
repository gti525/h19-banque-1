<template>
    <div>
        <nav-bar></nav-bar>
        <h1>Liste des transactions</h1>
        <break></break>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Numéro de transaction</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
                <th scope="col">Montant</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user) in users" :key="user.id">
                <td>
                    <router-link :to="{
                            name: 'AdminCompteClient-details',
                            params: { user: user, id: user.id, firstname: user.firstname }
                        }">
                        {{user.firstname}} {{ user.lastname }}
                    </router-link>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.homePhone }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    var timeoutID;

    function setup() {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("DOMMouseScroll", resetTimer, false);
        document.addEventListener("mousewheel", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        document.addEventListener("MSPointerMove", resetTimer, false);

        startTimer();
    }
    setup();

    function startTimer() {
        // wait 300 seconds before calling goInactive
        timeoutID = window.setTimeout(goInactive, 300000);
    }

    function resetTimer() {
        window.clearTimeout(timeoutID);

        goActive();
    }

    function goInactive() {
        
        document.location.href = "http://localhost:4200";
    }

    function goActive() {
        

        startTimer();
    }
    export default {
        name: "ShowTransaction"
    }
</script>

<style scoped>

</style>
