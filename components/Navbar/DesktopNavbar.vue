<template>
  <div id="nav-desktop">
    <div class="container">
      <div class="navbar-logo">
        <img src="~/static/images/logo.png" />
      </div>
      <div class="navbar-links">
        <ul class="navbar-nav">
          <li v-for="link in links" :key="link.name" class="nav-item">
            <nuxt-link
              :to="link.to"
              class="nav-link"
              exact-active-class="active"
            >
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>