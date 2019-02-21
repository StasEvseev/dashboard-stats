<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Dashboard</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">


        <!--<b-navbar-nav>-->
        <!--<b-nav-item active><router-link tag="li" to="/login">Go to Login</router-link></b-nav-item>-->
        <!--<b-nav-item><router-link tag="li" to="/">Go to Dashboard</router-link></b-nav-item>-->
        <!--</b-navbar-nav>-->

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>{{user.name}}</em></template>
            <b-dropdown-item href="#" @click="signout">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            user: {name: 'Аноним', identities: []},
        }
    },
    mounted() {
        if (localStorage.user) {
            this.user = JSON.parse(localStorage.user);
        }
    },
    methods: {
        signout: function () {
            delete localStorage.user;
            this.$router.push('/login');
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
