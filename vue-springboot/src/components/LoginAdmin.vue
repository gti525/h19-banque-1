<template>
  <div class="container">
    <div class="app-header">
      <div class="app-title">Banquo Uno</div>
      <div class="app-sub-title">Administration</div>
    </div>

    <div class="login-container">
      <!--<div class="main-header">-->
      <!--<h2>Input Username & Password</h2></div>-->
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input ID="username"
               type="text"
               v-model="username"
               name="username"
               class="form-control"
               :class="{ 'is-invalid': submitted && !username }"
        >
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input id="password"
               type="password"
               v-model="password"
               name="password"
               class="form-control"
               :class="{ 'is-invalid': submitted && !password }"
        >
      </div>
      <div class="form-group clearfix">
        <button class="btn btn-primary btn-common float-right " v-on:click="customerLogin">Connexion</button>
      </div>
    </div>
  </div>
</template>

<script>
  import http from "../http-common";

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        submitted: false
      }
    },
    methods: {
      /* eslint-disable no-console */
      customerLogin() {
        //here should send the request to the backend and get to know if the username and password match
        let data = {
          username: this.username,
          password: this.password
        }
        http
                .post("/validateCustomer", data)
                .then(response => {
                  if (response.data == true) {
                    // if username and password is cool then execute these block of statements and we use
                    // this.$router.push to jump to the page we wanna with parameter
                    this.$router.push({
                      path: '/verifyLoginAdmin',
                      query: {username: this.username, password: this.password}
                    });
                  } else {
                    this.$router.push('/errorPage')
                  }
                })
                .catch(e => {
                  this.$router.push('/errorPage');
                  console.log(e);
                });
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../scss/common.scss";

  .app-header {

    margin-top: 20%;

    .app-title {
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #002ec3;
      font-family: 'Hind Siliguri', sans-serif;

    }

    .app-sub-title {
      text-align: center;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      color: #d41919;
      font-family: 'Hind Siliguri', sans-serif;

    }
  }

  .login-container {
    border: 1px solid #e8e8e8;
    box-shadow: 0px 0px 20px #e6e6e6;
    padding: 20px 40px;
    border-radius: 10px;
    margin-top: 6%;
  }

  .main-header {
    margin-top: 20px;
    margin-bottom: 28px;
  }
</style>

