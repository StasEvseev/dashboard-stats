<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Dashboard</b-navbar-brand>
      <b-nav>
        <b-nav-item active><router-link to="/login">Go to Login</router-link></b-nav-item>
        <b-nav-item><router-link to="/">Go to Dashboard</router-link></b-nav-item>
      </b-nav>
    </b-navbar>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><router-view></router-view></b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
