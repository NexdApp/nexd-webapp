<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Signup</v-toolbar-title>
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
                label="First name"
                v-model="fname"
                name="text"
                prepend-icon="mdi-alpha-a-box"
                type="text"
              />
              <v-text-field
                label="Last name"
                v-model="lname"
                prepend-icon="mdi-alpha-z-box"
                type="text"
              />
              <v-select
                :items="items"
                v-model="role"
                prepend-icon="mdi-chess-knight"
                label="role"
              ></v-select>
              <v-text-field
                label="Street"
                v-model="street"
                prepend-icon="mdi-road-variant"
                type="text"
              />
              <v-text-field
                label="City"
                v-model="city"
                prepend-icon="mdi-city-variant"
                type="text"
              />
              <v-text-field
                label="Zip code"
                v-model="zipCode"
                prepend-icon="mdi-map-marker-circle"
                type="text"
              />
              <v-text-field
                label="Number"
                v-model="number"
                prepend-icon="mdi-cellphone"
                type="text"
              />
              <v-text-field
                label="Telephone"
                v-model="tele"
                prepend-icon="mdi-deskphone"
                type="text"
              />
              <v-text-field
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
            <v-btn color="primary" @click="signup">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["helper", "seeker"],
    email: "",
    password: "",
    street: "",
    zipCode: "",
    city: "",
    tele: "",
    number: "",
    role: "seeker",
    fname: "",
    lname: ""
  }),
  computed: {
    userId() {
      return this.$store.getters.getUserId;
    }
  },
  watch: {
    userId(newVal) {
      if (newVal) {
        let payload = {
          street: this.street,
          number: this.number,
          zipCode: this.zipCode,
          city: this.city,
          firstName: this.fname,
          lastName: this.lname,
          role: this.role,
          telephone: this.tele,
          userId: newVal
        };
        this.$store.dispatch("updateUser", payload);
        this.$router.push("/");
      }
    }
  },
  methods: {
    signup() {
      let payload = {
        email: this.email,
        password: this.password,
        address: this.address,
        role: this.role,
        firstName: this.fname,
        lastName: this.lname
      };
      this.$store.dispatch("signup", payload);
    }
  }
};
</script>
