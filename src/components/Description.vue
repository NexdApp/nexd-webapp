<template>
  <v-row align="center" justify="center">
    <v-col cols="8" class="title text-format">Inspiration</v-col>
    <v-col cols="8" class="body-1 text-format">
      {{ $t("description") }}
    </v-col>
    <v-col cols="6" class="body-1 text-format">
      {{ $t("sub-desc") }}
    </v-col>
    <v-col cols="12" class="body-1 text-format">
      <v-btn @click="$router.push('/signup')" round color="primary" dark>
        <span>Signup</span>
      </v-btn>
    </v-col>
  </v-row>
</template>
