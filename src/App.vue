<template>
  <v-app>
    <navBar v-if="showNavBar" />
    <v-content class="contentHeight">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navBar from "./components/navBar";
export default {
  name: "App",
  components: {
    navBar
  },
  created() {},
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated: {
      handler: function(newVal) {
        if (newVal && this.$route && this.$route.path == "/login") {
          this.$router.push("/");
        }
      },
      immediate: true
    }
  },
  data: () => ({
    showNavBar: true
  })
};
</script>

<style lang="scss"></style>
