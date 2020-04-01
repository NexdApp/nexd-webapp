<template>
  <v-app>
    <navBar v-if="showNavBar" />
    <v-content>
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
  data: () => ({
    showNavBar: true
  })
};
</script>
