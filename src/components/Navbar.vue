<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Automotive Parts</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <form class="form-inline my-2 my-lg-0">
        <a
          class="btn btn-outline-success my-2 my-sm-0"
          data-toggle="modal"
          data-target="#login"
          v-if="userAuth"
          >Login</a
        >
        <a
          class="btn btn-outline-success my-2 my-sm-0"
          data-toggle="modal"
          @click="logout()"
          v-if="user && user.email.length"
          >Logout</a
        >
        <a
          class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
          data-toggle="modal"
          data-target="#miniCart"
        >
          <i class="fas fa-cart-plus"></i>
        </a>
      </form>
    </nav>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      user: undefined,
    };
  },

  computed: {
    userAuth: function() {
      if(this.user == null) {
        return true;
      }
    }
  },

  methods: {
    editModal() {
      $("#login").modal("show");
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    console.log(this.userAuth, 'UA')
    this.user = fb.auth().currentUser;
    console.log(this.user);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #fff !important;
  }
}
</style>
