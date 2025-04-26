<template>
    <div data-device="desktop">
        <a href="/" class="nav-logo">
            <img class="nav-logo-img" src="~/static/images/logo_example.svg" />
        </a>
        <ul class="nav-menu-links">
            <li v-for="link in links" :key="link.name" class="nav-menu-link">
                <nuxt-link :to="link.to" exact-active-class="current" :class=link.class>
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