<template>
  <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
      >

      <h1
          v-if="data.heroText !== null"
          id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
          v-if="data.tagline !== null"
          class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
          v-if="data.actionText && data.actionLink"
          class="action"
      >
<!--        <NavLink-->
<!--            class="action-button"-->
<!--            :item="actionLink"-->
<!--        />-->
      </p>
    </header>

    <div
        v-if="data.features && data.features.length"
        class="features"
    >
      <div
          v-for="(feature, index) in data.features"
          :key="index"
          class="feature"
          @click="handleClickFeature(feature.url)"
      >
        <div class="feature-cover">
          <img :alt="feature.title" :src="feature.img"/>
        </div>
        <div class="feature-body">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
        v-if="data.footer"
        class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
// import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  // components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    handleClickFeature(url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>

</style>
