<template>
  <v-row align="center" justify="center">
    <v-col cols="12" v-if="!isAuthenticated">
      <description />
    </v-col>
    <v-col v-else>
      here
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import description from "../components/Description";
export default {
  name: "Home",
  components: {
    description
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style>
.text-format {
  text-align: center;
  color: #394e1d;
}
</style>
