<script setup lang="ts">
import HelloWorld from "@/components/PresentationHeader.vue";
import TopBarMenu from "@/components/TopBarMenu.vue";
import AboutMe from "@/components/AboutMe.vue";

</script>

<template>
  <v-app theme="dark">
    <top-bar-menu />
    <v-main>
      <HelloWorld />
      <AboutMe />
    </v-main>
  </v-app>
</template>

<style>

body {
  background: rgb(var(--v-theme-background));
}

.poppins-thin {
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
}

.poppins-regular {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.poppins-bold {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
</style>
