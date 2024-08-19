<template>
  <div data-dervice="mobile">
    <ul class="navbar-nav">
      <li v-for="link in links" :key="link.name" class="nav-item">
        <nuxt-link :to="link.to" class="nav-link" exact-active-class="active">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
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