<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                name="email"
                v-model="email"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                id="password"
                label="Password"
                v-model="password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    login() {
      let { email, password } = this;
      this.$store.dispatch("login", { email, password });
    }
  },
  watch: {
    $route(to) {
      console.log(to);
    }
  },
  data: () => ({
    email: "",
    password: ""
  })
};
</script>
