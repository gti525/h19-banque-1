<template>
<div>
  <nav-bar> </nav-bar><div class="container">
<div class="app-title">
    Banquo Uno
</div>
  <div class="login-container">
      <div class="main-header">
    <h2>Créer un utilisateur</h2></div>
      <div class="form-group">
          <label for="firstname">Prénom</label>
          <input
                  type="text"
                  v-model="firstname"
                  name="firstname"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && !username }"
          >
      </div>
      <div class="form-group">
          <label for="lastname">Nom</label>
          <input
                  type="text"
                  v-model="lastname"
                  name="lastname"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && !username }"
          >
      </div>
    <div class="form-group">
      <label for="username">Nom d'utilisateur</label>
      <input
        type="text"
        v-model="username"
        name="username"
        class="form-control"
        :class="{ 'is-invalid': submitted && !username }"
      >
    </div>
    <div class="form-group">
      <label for="password">Mot de Passe</label>
      <input
        type="password"
        v-model="username"
        name="username"
        class="form-control"
        :class="{ 'is-invalid': submitted && !username }"
      >
    </div>
    <div class="form-group">
      <label for="mmn">Mothers Maiden Name</label>
      <input
        type="text"
        v-model="test"
        name="mmn"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="address">Adresse complète</label>
      <input
        type="text"
        v-model="address"
        name="address"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="home-phone">Téléphone fixe</label>
      <input
        type="tel"
        v-model="homePhone"
        name="home-phone"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="mobile">Téléphone mobile</label>
      <input
        type="tel"
        v-model="mobile"
        name="mobile"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="email">Courriel</label>
      <input
        type="email"
        v-model="email"
        name="email"
        class="form-control"
      >
    </div>
    <div class="panel-section">
      <div class="panel-title">Compte bancaire</div>
      <div class="panel-content">
 <div class="form-group">
      <label for="type-of-acc">Type de compte</label>
      <div>
      <div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" class="form-check-input" name="optradio">Chequing
  </label>
</div>
<div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" class="form-check-input" name="optradio">Saving
  </label>
</div></div>
    </div>
    <div class="form-group">
      <label for="amount-avail">Montant d'argent disponible</label>
      <input
        type="text"
        v-model="amountAvail"
        name="amount-avail"
        class="form-control"
      >
    </div>
      </div>
    </div>


<div class="panel-section">
      <div class="panel-title">Compte crédit</div>
      <div class="panel-content">

    <div class="form-group">
      <label for="amount-avail">Montant d'argent disponible</label>
      <input
        type="text"
        v-model="AmountOfMoneyAvail"
        name="amount-avail"
        class="form-control"
      >
    </div>
    <div class="form-group">
      <label for="amount-owed">Solde</label>
      <input
        type="text"
        v-model="amountOwed"
        name="amount-owed"
        class="form-control"
      >
    </div>
      </div>
    </div>
    <div class="form-group clearfix">
      <button class="btn btn-primary btn-common float-right ">Créer</button>
    </div>
  </div></div></div>
</template>

<script>

import NavBar from './NavBar.vue';
export default {
  name: "Login",
  components:{
    NavBar
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/common.scss";

.app-title{
        margin-top: 6%;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    color:#002ec3;
    font-family: 'Hind Siliguri', sans-serif;

}
.login-container {
  border: 1px solid #e8e8e8;
  box-shadow: 0px 0px 20px #e6e6e6;
  padding: 20px 40px;
  border-radius: 10px;
  margin-top: 6%;
  margin-bottom: 60px;
}

.main-header{
    margin-top:20px;
    margin-bottom:28px;
}
.panel-title{
      font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}
.panel-content{
      padding: 20px 40px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    margin-bottom: 20px;
}
</style>

