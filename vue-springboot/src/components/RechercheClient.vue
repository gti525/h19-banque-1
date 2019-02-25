<template>
    <div class="searchform">
        <h1>Recheche de Client</h1>
        <div class="form-group">
            <input type="number" class="form-control" id="age" required v-model="age" name="age">
        </div>

        <div class="btn-group">
            <button v-on:click="searchCustomers" class="btn btn-success">Search</button>
        </div>

        <ul class="search-result">
            <li v-for="(customer, index) in customers" :key="index">
                <h6>{{customer.name}} ({{customer.age}})</h6>
            </li>
        </ul>
    </div>
</template>

<script>
    import http from "../http-common";
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
        console.log("Je dors ...")
        document.location.href = "http://localhost:4200";
    }

    function goActive() {
        console.log("Je suis reveille")

        startTimer();
    }

    export default {
        name: "search-customer",
        data() {
            return {
                age: 0,
                customers: []
            };
        },
        methods: {
            /* eslint-disable no-console */
            searchCustomers() {
                http
                    .get("/customers/age/" + this.age)
                    .then(response => {
                        this.customers = response.data; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            /* eslint-enable no-console */
        }
    };
</script>

<style>
    .searchform {
        max-width: 300px;
        margin: auto;
    }
    .search-result {
        margin-top: 20px;
        text-align: left;
    }
</style>
