<template>
  <v-container class="px-md-16">
    <v-row class="experience-container">
      <v-col
        cols="12"
        lg="5"
        class="mb-sm-10 d-flex justify-center justify-lg-start"
      >
        <div class="text-center">
          <p class="text-h1">{{ $t('experience.experience').toUpperCase() }}</p>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="7"
        class="poppins-medium"
      >
        <v-timeline side="end">
          <v-timeline-item
            v-for="experience in experiences"
          >
            <template
              v-slot:opposite
              v-if="!isMdAndDown"
            >
              {{ experience.period }}
            </template>
            <v-card variant="flat">
              <v-row class="w-100">
                <v-col cols="3" class="d-flex align-center justify-center">
                  <v-img class="ml-3" height="70" :src="experience.companyLogoImageSrc" />
                </v-col>
                <v-col>
                  <v-card-item class="w-100">
                    <v-card-title class="text-h5" > {{ experience.companyName }} </v-card-title>
                    <v-card-subtitle class="text-h6" :title="experience.companyPositionTextTranslation"> {{ experience.companyPositionTextTranslation }} </v-card-subtitle>
                    <v-card-subtitle
                      v-if="isMdAndDown"
                      class="text"
                    >
                      {{ experience.period }}
                    </v-card-subtitle>
                    <div class="text-caption text-pre-line"> {{ experience.companyTextTranslation }} </div>
                  </v-card-item>
                </v-col>
              </v-row>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { computed } from "vue"
  import { useDisplay } from 'vuetify'

  const { t } = useI18n()
  const isMdAndDown = useDisplay().mdAndDown

  const companiesImgSrcRoot = 'assets/companies/'

  const experiences = [
   {
     companyName: "Logcomex",
     companyLogoImageSrc: `${companiesImgSrcRoot}logcomex.png`,
     companyPositionTextTranslation: computed(() => t('experience.srFullstackEngineer')).value,
     companyTextTranslation: computed(() => t('experience.logcomexSrExperienceText')).value,
     period: `2023 - ${t('experience.present')}`
   },
   {
     companyName: "Logcomex",
     companyLogoImageSrc: `${companiesImgSrcRoot}logcomex.png`,
     companyPositionTextTranslation: computed(() => t('experience.plFullstackEngineer')).value,
     companyTextTranslation: computed(() => t('experience.logcomexPlExperienceText')).value,
     period: '2021 - 2023'
   },
    {
      companyName: "NTT Data",
      companyLogoImageSrc: `${companiesImgSrcRoot}everis.png`,
      companyPositionTextTranslation: computed(() => t('experience.jrSoftwareEngineer')).value,
      companyTextTranslation: computed(() => t('experience.everisExperienceText')).value,
      period: '2018 - 2021'
    },
    {
      companyName: "Sigma Dataserv",
      companyLogoImageSrc: `${companiesImgSrcRoot}sigma.png`,
      companyPositionTextTranslation: computed(() => t('experience.jrSoftwareEngineer')).value,
      companyTextTranslation: computed(() => t('experience.sigmaExperienceText')).value,
      period: '2017 - 2018'
    }
 ]

</script>

<style scoped>
  .experience-container {
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>
