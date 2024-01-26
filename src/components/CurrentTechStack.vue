<template>
  <v-container class="px-16">
    <v-row class="d-flex align-center tech-stack-container">
      <v-col
        cols="12"
        class="d-flex justify-center hidden-lg-and-up mb-10"
      >
        <div class="text-center">
          <p class="text-h1 poppins-bold"> {{ $t('techStack.techStack').toUpperCase() }} </p>
          <p class="text-h1"> {{ $t('techStack.stackTech').toUpperCase() }} </p>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="poppins-medium pl-xl-10 align"
      >
        <div
          v-for="(stack, index) in techStack"
        >
          <v-row>
            <h3 class="">{{ stack.subCategoryName }}</h3>
          </v-row>
          <v-row>
            <v-chip-group
              column
              multiple
            >
              <v-chip
                v-for="item in stack.items"
                style="pointer-events: none;"
              >
                <img height="20px" class="mr-2" :src="item.iconSrc" />
                {{ item.name }}
              </v-chip>
            </v-chip-group>
          </v-row>
          <v-divider v-if="index < techStack.length - 1" class="my-10"></v-divider>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="d-flex justify-end hidden-md-and-down"
      >
        <div class="text-center">
          <p class="text-h1 poppins-bold"> {{ $t('techStack.techStack').toUpperCase() }} </p>
          <p class="text-h1"> {{ $t('techStack.stackTech').toUpperCase() }} </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const techIconsRoot = 'assets/techIcons'
  const techStack = [
    {
      subCategoryName: "Back-end",
      items: [
        {
          name: 'Docker',
          iconSrc: `${techIconsRoot}/Docker.svg`
        },
        {
          name: 'FastAPI',
          iconSrc: `${techIconsRoot}/FastAPI.svg`
        },
        {
          name: 'PHP',
          iconSrc: `${techIconsRoot}/PHP.svg`
        },
        {
          name: 'Laravel',
          iconSrc: `${techIconsRoot}/Laravel.svg`
        },
        {
          name: 'Lumen',
          iconSrc: `${techIconsRoot}/Lumen.svg`
        },
        {
          name: 'Microservices',
          iconSrc: `${techIconsRoot}/Moleculer.svg`
        },
        {
          name: 'Python',
          iconSrc: `${techIconsRoot}/Python.svg`
        },
      ],
    },
    {
      subCategoryName: "Front-end",
      items: [
        {
          name: 'JavaScript',
          iconSrc: `${techIconsRoot}/JavaScript.svg`
        },
        {
          name: 'Node.js',
          iconSrc: `${techIconsRoot}/Node.js.svg`
        },
        {
          name: 'Nuxt',
          iconSrc: `${techIconsRoot}/Nuxt-JS.svg`
        },
        {
          name: 'TypeScript',
          iconSrc: `${techIconsRoot}/TypeScript.svg`
        },
        {
          name: 'Vue.Js',
          iconSrc: `${techIconsRoot}/Vue.js.svg`
        },
        {
          name: 'Vuetify',
          iconSrc: `${techIconsRoot}/Veutify.svg`
        }
      ],
    },
    {
      subCategoryName: "Data",
      items: [
        {
          name: 'Elastic Search',
          iconSrc: `${techIconsRoot}/Elastic-Search.svg`
        },
        {
          name: 'PostgreSQL',
          iconSrc: `${techIconsRoot}/PostgresSQL.svg`
        }
      ],
    },
    {
      subCategoryName: "Operational Tools",
      items: [
        {
          name: 'DataGrip',
          iconSrc: `${techIconsRoot}/DataGrip.svg`
        },
        {
          name: 'DBeaver',
          iconSrc: `${techIconsRoot}/DBeaver.svg`
        },
        {
          name: 'Jira',
          iconSrc: `${techIconsRoot}/Jira.svg`
        },
        {
          name: 'Linux',
          iconSrc: `${techIconsRoot}/Linux.svg`
        },
        {
          name: 'PHPStorm',
          iconSrc: `${techIconsRoot}/PhpStorm.svg`
        },
        {
          name: 'Postman',
          iconSrc: `${techIconsRoot}/Postman.svg`
        },
        {
          name: 'PyCharm',
          iconSrc: `${techIconsRoot}/PyCharm.svg`
        },
        {
          name: 'VSCode',
          iconSrc: `${techIconsRoot}/vscode.svg`
        },
        {
          name: 'Google Workspace',
          iconSrc: `${techIconsRoot}/Google.svg`
        },
        {
          name: 'Slack',
          iconSrc: `${techIconsRoot}/Slack.svg`
        },
      ],

    }
  ];

</script>

<style scoped>
.tech-stack-container {
  margin-top: 100px;
  margin-bottom: 100px;
}

@media (min-width: 1280px) {
  .hidden-lg-and-up {
    display: none !important;
  }
}

@media (max-width: 1279.98px) {
  .hidden-md-and-down {
    display: none !important;
  }
}

</style>
