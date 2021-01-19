<template>
    <div>
        <h1>Login Route</h1>
        <form class="custom-form" v-on:submit="onSubmit" autocomplete="off">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Submit</button>
            </div>

        </form>
    </div>
</template>

<script>
import * as auth from '../../services/AuthService'
export default {
  name: 'login',
  methods: {
    onSubmit: function (e) {
      e.preventDefault()
      auth.Login()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
