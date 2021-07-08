<template>
  <div class="home">
    <navbar></navbar>
    <Hero />
    <products-list></products-list>
    <login></login>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Login,
  },
};
</script>
