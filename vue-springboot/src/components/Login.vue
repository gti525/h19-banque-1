<template><div class="container">
<div class="app-title">
    Banquo Uno
</div>
  <div class="login-container">
      <div class="main-header">
    <h2>Login</h2></div>
    <div class="form-group">
      <label for="username">Username</label>
      <input
        type="text"
        v-model="username"
        name="username"
        class="form-control"
        :class="{ 'is-invalid': submitted && !username }"
      >
    </div>
    <div class="form-group">
      <label for="username">Password</label>
      <input
        type="password"
        v-model="username"
        name="username"
        class="form-control"
        :class="{ 'is-invalid': submitted && !username }"
      >
    </div>
    <div class="form-group clearfix">
      <button class="btn btn-primary btn-common float-right ">Login</button>
    </div>
  </div></div>
</template>

<script>
export default {
  name: "Login"
};
</script>
<style lang="scss" scoped>
@import "../scss/common.scss";

.app-title{
        margin-top: 20%;
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
}

.main-header{
    margin-top:20px;
    margin-bottom:28px;
}
</style>

