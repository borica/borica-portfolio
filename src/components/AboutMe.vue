<template>
    <v-container class="mt-2 bg-test">
      <v-row class="d-flex align-center">
        <v-col
          cols="12"
          sm="6"
          md="6"
          class="d-flex justify-center"
        >
          <div class="text-center">
            <p class="text-h1 poppins-bold">ABOUT</p>
            <p class="text-h1">ME</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="6"
          class="poppins-medium"
        >
          {{ $t('about_me') }}
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
