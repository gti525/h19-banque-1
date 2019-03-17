<template>
    <div id="print">
        <nav-bar class="no-print"></nav-bar>
        <h1>Liste des transactions associées au compte courant</h1>
        <button class="no-print" v-on:click="printDiv('print')">Print</button>
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
                <tr v-for="(transaction) in transactions" :key="transaction.id">
                    <td>{{ transaction.id }}</td>
                    <td>{{ transaction.transdate }}</td>
                    <td>{{ transaction.description }}</td>
                    <td>{{ transaction.balance }}</td>
                </tr>
            </tbody>
        </table>
        <textarea id="printing-css" style="display:none;">html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{font:normal normal .8125em/1.4 Arial,Sans-Serif;background-color:white;color:#333}strong,b{font-weight:bold}cite,em,i{font-style:italic}a{text-decoration:none}a:hover{text-decoration:underline}a img{border:none}abbr,acronym{border-bottom:1px dotted;cursor:help}sup,sub{vertical-align:baseline;position:relative;top:-.4em;font-size:86%}sub{top:.4em}small{font-size:86%}kbd{font-size:80%;border:1px solid #999;padding:2px 5px;border-bottom-width:2px;border-radius:3px}mark{background-color:#ffce00;color:black}p,blockquote,pre,table,figure,hr,form,ol,ul,dl{margin:1.5em 0}hr{height:1px;border:none;background-color:#666}h1,h2,h3,h4,h5,h6{font-weight:bold;line-height:normal;margin:1.5em 0 0}h1{font-size:200%}h2{font-size:180%}h3{font-size:160%}h4{font-size:140%}h5{font-size:120%}h6{font-size:100%}ol,ul,dl{margin-left:3em}ol{list-style:decimal outside}ul{list-style:disc outside}li{margin:.5em 0}dt{font-weight:bold}dd{margin:0 0 .5em 2em}input,button,select,textarea{font:inherit;font-size:100%;line-height:normal;vertical-align:baseline}textarea{display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}pre,code{font-family:"Courier New",Courier,Monospace;color:inherit}pre{white-space:pre;word-wrap:normal;overflow:auto}blockquote{margin-left:2em;margin-right:2em;border-left:4px solid #ccc;padding-left:1em;font-style:italic}table[border="1"] th,table[border="1"] td,table[border="1"] caption{border:1px solid;padding:.5em 1em;text-align:left;vertical-align:top}th{font-weight:bold}table[border="1"] caption{border:none;font-style:italic}.no-print{display:none}</textarea>
        <iframe id="printing-frame" name="print_frame" src="about:blank" style="display:none;"></iframe>
        <Footer></Footer>
    </div>
</template>



<script>
    import NavBar from './NavBarClient.vue';
    import Footer from './Footer.vue'
    import http from "../http-common";
    /* eslint-disable no-console */

    var timeoutID;

    // Réference https://jsfiddle.net/jaredwilli/0f7t25q9/
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
        delete localStorage.token
    }

    function goActive() {


        startTimer();
    }

    export default {

        name: "ShowAccountTransactions",

        data() {
            return {
                transactions: []
            }
        },

        components: {
            NavBar: NavBar,
            Footer: Footer
        },

        methods: {
            printDiv(elementId) {
                console.log("h")
                var a = document.getElementById('printing-css').value;
                var b = document.getElementById(elementId).innerHTML;
                window.frames["print_frame"].document.title = document.title;
                window.frames["print_frame"].document.body.innerHTML = '<style>' + a + '</style>' + b;
                window.frames["print_frame"].window.focus();
                window.frames["print_frame"].window.print();
            },

            searchTransactionsForUser() {
                http
                    .get("/auth/searchusers?search=" + "username" + ":" + "*" + localStorage.username + "*")
                    .then(response => {
                        this.transactions = response.data[0].userAccount.transactions; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },

        mounted() {
            this.searchTransactionsForUser()
        },
    }

</script>

<style lang="scss" scoped>
    @import "../scss/common.scss";

    .right {
        position: absolute;
        right: 0px;
        width: 300px;
        border: 3px solid #73AD21;
        padding: 10px;
    }

    .app-title {
        margin-top: 6%;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        color: #002ec3;
        font-family: "Hind Siliguri", sans-serif;
    }

    .login-container {
        border: 1px solid #e8e8e8;
        box-shadow: 0px 0px 20px #e6e6e6;
        padding: 20px 40px;
        border-radius: 10px;
        margin-top: 6%;
        margin-bottom: 60px;
    }

    .main-header {
        margin-top: 20px;
        margin-bottom: 28px;
    }

    .panel-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .panel-content {
        padding: 20px 40px;
        border: 1px solid #d2d2d2;
        border-radius: 10px;
        margin-bottom: 20px;
    }
</style>

