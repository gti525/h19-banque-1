<template>

  <div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Banquo Uno</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse float-left text-justify" id="navbarColor01">
        <ul class="navbar-nav mr-auto float-left">
          <li class="nav-item active">
            <a class="nav-link" href="#">Page Client <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="adminRedirect">Page Admin</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="app-title">Connexion Client</div>
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
          >
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input @keyup.enter="customerLogin"
                 id="password"
                 type="password"
                 v-model="password"
                 name="password"
                 class="form-control"
          >
        </div>
        <div class="clearfix ">
          <button class="btn btn-primary btn-common float-right" v-on:click="customerLogin">Connexion</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import http from "../http-common";
  import Footer from './Footer.vue';

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        error: false,
      }
    },
    components: {
      Footer: Footer
    },
    methods: {
      /* eslint-disable no-console */
      customerLogin() {
        //here should send the request to the backend and get to know if the username and password match
        http
                .post("/auth/signin", {username: this.username, password: this.password})
                .then(request => this.loginSuccessful(request))
                .catch(() => this.loginFailed())
      },
      loginSuccessful(req) {
        if (!req.data.accessToken) {
          console.log(req)
          this.loginFailed()
          return
        }
        this.error = false
        localStorage.token = req.data.accessToken
        localStorage.username = this.username
        localStorage.bypass = '0'
        console.log(req)
        this.$router.push('/VerifyLogin')
        location.reload();
      },
      loginFailed() {
        console.log(this.test)
        alert("Mauvaise information rentrer")
        delete localStorage.token
      },
      adminRedirect() {
        this.$router.push("/loginAdmin")
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../scss/common.scss";

  .app-title {
    margin-top: 5%;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    color: #002ec3;
    font-family: 'Hind Siliguri', sans-serif;
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
