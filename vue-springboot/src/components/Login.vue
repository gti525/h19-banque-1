<template>
    <div>
        <h2>Login</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
            </div>
             <div class="form-group">
                <label for="username">Usernames</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
            </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>
