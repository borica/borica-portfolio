<template>
  <v-container class="fill-height-half d-flex align-center">
    <v-row class="">
      <v-col md="1"></v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <v-img class="prevent-select" min-height="300px" height="50vh" src="@/assets/memoji_avatar.png"/>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        class="d-flex align-center justify-center"
      >
        <div>
          <v-row class="d-flex justify-center">
            <h1 class="text-h2 poppins-medium">Tiago Boriça</h1>
          </v-row>
          <v-row class="d-flex justify-center">
            <h3 class="text-h4 poppins-thin">{{ $t('presentationHeader.softwareEngineer') }}</h3>
          </v-row>
          <v-row class="d-flex justify-center">
            <div class="mt-2">
              <a href='https://www.linkedin.com/in/tiago-bori%C3%A7a-57035b161/' target="_blank">
                <v-btn
                  density="comfortable"
                  icon="mdi-linkedin"
                />
              </a>
              <a href='https://github.com/borica' target="_blank">
                <v-btn
                  class="mx-2"
                  density="comfortable"
                  icon="mdi-github"
                />
              </a>
              <v-tooltip location="bottom">
                {{ $t('presentationHeader.copyEmail') }}
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    density="comfortable"
                    icon="mdi-email"
                    @click="copyEmailToClipboard"
                  />
                </template>
              </v-tooltip>
            </div>
          </v-row>
        </div>
      </v-col>
      <v-col md="2"></v-col>
    </v-row>
    <v-snackbar
      v-model="clipboardSnackbar"
      color="#424242"
      height="70px"
      width="80px"
      location="bottom right"
    >
      <v-alert
        v-model="clipboardSnackbar"
        class="bg-grey-darken-5"
        :title="$t('presentationHeader.success')"
        :text="$t('presentationHeader.mailCopySuccess')"
        closable
      >
      </v-alert>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">

import { ref } from "vue"

let clipboardSnackbar = ref(false)

const copyEmailToClipboard = () => {
  const email = 'tiago@borica.com.br'

  navigator.clipboard.writeText(email)
  clipboardSnackbar.value = true
}

</script>

<style>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.fill-height-half {
  height: 90vh;
}
</style>
