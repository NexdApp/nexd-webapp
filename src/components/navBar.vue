<template>
  <v-app-bar app color="#fff">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="200"
      />
    </div>
    <v-spacer></v-spacer>
    <v-btn color="primary" small text @click="setLocale">
      <span class="mr-2">{{ locale }}</span>
    </v-btn>
    <div v-if="!isAuthenticated">
      <v-btn color="primary" text @click="login">
        <span class="mr-2">Login</span>
      </v-btn>
    </div>
    <div v-else>
      <v-btn text color="primary" @click="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("locale")) {
      this.$i18n.locale = localStorage.getItem("locale");
    }
    this.locale = this.$i18n.locale;
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data: () => ({
    locale: "en"
  }),
  methods: {
    setLocale() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "de";
      } else {
        this.$i18n.locale = "en";
      }
      this.locale = this.$i18n.locale;
      localStorage.setItem("locale", this.$i18n.locale);
    },
    signup() {
      this.$router.push("/signup");
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
