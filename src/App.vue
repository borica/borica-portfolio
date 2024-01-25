<template>
  <v-app theme="dark">
    <top-bar-menu />
    <v-main>
      <PresentationHeader />
      <AboutMe />
      <CurrentTechStack />
      <Experience />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";
import CurrentTechStack from "@/components/CurrentTechStack.vue";
import PresentationHeader from "@/components/PresentationHeader.vue";
import TopBarMenu from "@/components/TopBarMenu.vue";
import Experience from "@/components/Experience.vue";

</script>

<style>
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
