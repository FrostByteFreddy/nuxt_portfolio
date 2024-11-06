<template>
    <div data-device="mobile" :class="{ active: isMenuHidden }">
        <a href="#" class="nav-logo">
            <img class="nav-logo-img" src="https://symbols.getvecta.com/stencil_25/77_sass.57898c574e.svg"
                alt="SASS Logo">
        </a>

        <a id="burger-menu" @click="toggleMenu">
            <span data-id="1" class="burger-menu-bar"></span>
            <span data-id="2" class="burger-menu-bar"></span>
            <span data-id="3" class="burger-menu-bar"></span>
        </a>

        <ul class="nav-menu-links-mobile">
            <li v-for="link in links" :key="link.name" class="nav-menu-link">
                <nuxt-link :to="link.to" class="nav-link" exact-active-class="current">
                    {{ link.name }}
                </nuxt-link>
            </li>
            <li class="nav-menu-link">
                <a class="btn primary">Contact</a>
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
    data() {
        return {
            isMenuHidden: true
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuHidden = !this.isMenuHidden;
        }
    }
};
</script>