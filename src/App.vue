<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left">
           Routine App
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <button class="btn btn-outline-primary">{{ user.email }}</button>
          </li>
          <li class="nav-item" v-if="user">
            <a class="nav-link link pl-3" v-on:click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.$store.commit('reloadUser', { user });
    }
  },
  methods: {
    logout() {
      this.$store.commit('removeUser');
      this.$router.push({ name: 'login' });
    }
  }
}
  
</script>
<style>
.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
.tltip {
  position: relative;
  display: inline-block;
}

.tltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  position: absolute;
  z-index: 1;
}

.tltip:hover .tooltiptext {
  visibility: visible;
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}
</style>