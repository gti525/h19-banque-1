<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Banquo Uno</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Create User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Search User</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";

</style>
