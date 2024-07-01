<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">Your Brand</nuxt-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="link in links" :key="link.name" class="nav-item">
            <nuxt-link :to="link.to" class="nav-link" exact-active-class="active">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      links: [
        { to: '/', name: 'Home' },
        { to: '/about', name: 'About' },
        { to: '/contact', name: 'Contact' },
        { to: '/experience', name: 'Experience' },
        { to: '/work', name: 'Work' },
      ]
    }
  },
  watch: {
    '$route.name' () {
      this.open = false
    }
  }
}
</script>