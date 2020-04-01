<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      NEXD
    </div>
    <v-spacer></v-spacer>
    <v-btn small text @click="setLocale">
      <span class="mr-2">{{ locale }}</span>
    </v-btn>
    <div v-if="!isAuthenticated">
      <v-btn text @click="login">
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn text @click="signup">
        <span class="mr-2">Sign up</span>
      </v-btn>
    </div>
    <div v-else>
      <v-btn text @click="login">
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
    }
  }
};
</script>
