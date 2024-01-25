<template>
    <v-container class="px-16">
      <v-row class="d-flex align-center about-me-container">
        <v-col
          cols="12"
          sm="4"
          md="4"
          class="d-flex justify-start"
        >
          <div class="text-center">
            <p class="text-h1 poppins-bold">{{ $t('aboutMe.about').toUpperCase() }}</p>
            <p class="text-h1">{{ $t('aboutMe.me').toUpperCase() }}</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="8"
          class="poppins-medium"
        >
          {{ $t('aboutMe.aboutMeText') }}
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
 .about-me-container {
   margin-top: 100px;
   margin-bottom: 100px;
 }
</style>
