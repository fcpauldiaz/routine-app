<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="on"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          name="password"
          autocomplete="new-password"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group" v-if="message">
        <label>{{ message }}</label>
      </div>

      <button
        type="button"
        class="btn btn-dark btn-lg btn-block"
        v-on:click="signup"
      >
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data: () => ({
    email: null,
    password: null,
    message: null,
  }),
  methods: {
    signup() {
      console.log('entra');
      this.message = null;
      api
        .register({
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          this.$store.commit('saveUser', { user: data.user, token: data.tokens.access.token })
          this.$router.push('routine');
        })
        .catch(({ response }) => {
          this.message = response.data.message;
        });
    },
  },
};
</script>
