<template>
  <v-app theme="dark">
    <top-bar-menu />
    <v-main>
      <PresentationHeader />
      <AboutMe />
      <CurrentTechStack />
      <Experience />
    </v-main>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";
import CurrentTechStack from "@/components/CurrentTechStack.vue";
import PresentationHeader from "@/components/PresentationHeader.vue";
import TopBarMenu from "@/components/TopBarMenu.vue";
import Experience from "@/components/Experience.vue";
import Footer from "@/components/Footer.vue";

</script>

<style>

@media (max-width: 960px) {
  .text-h1 {
    font-size: 3.5rem !important;
    line-height: 1;
  }
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
