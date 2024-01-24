<template>
  <v-toolbar class="top-bar-menu w-100 d-flex align-content-end">
    <v-spacer></v-spacer>
    <v-tooltip location="bottom">
      {{ $t('translation.en') }}
      <template v-slot:activator="{ props }">
        <v-img
          v-bind="props"
          class="cursor-pointer"
          height="2.5rem"
          max-width="2.5rem"
          src="@/assets/flags/us-flag.svg"
          @click.stop="setLocale('en')"
        />
      </template>
    </v-tooltip>
    <v-tooltip location="bottom">
      {{ $t('translation.pt') }}
      <template v-slot:activator="{ props }">
        <v-img
          v-bind="props"
          class="cursor-pointer mx-2"
          height="2.5rem"
          max-width="2.5rem"
          src="@/assets/flags/brazil-flag.svg"
          @click.stop="setLocale('pt')"
        />
      </template>
    </v-tooltip>
  </v-toolbar>
</template>

<script setup lang="ts">
  import { setLocale } from "@/locales/setup/i18nSetup"

</script>

<style scoped>

  .top-bar-menu {
    background-color: rgb(18, 18, 18) !important;
    box-shadow: 0 0 !important;
  }
</style>
