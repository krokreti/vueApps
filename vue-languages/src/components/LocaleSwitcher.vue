<template>
<ul>
  <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
    {{locale}}
  </li>
</ul>
</template>

<script>
export default {
name: 'LocaleSwitcher',
    data() {
        return {
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        }
    },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  },
  created() {
    console.log(process.env.VUE_APP_I18N_SUPPORTED_LOCALE)
  },
}
</script>

<style scoped>
li {
  text-decoration: underline;
  color: #459CE7;
  cursor: pointer;
}
</style>