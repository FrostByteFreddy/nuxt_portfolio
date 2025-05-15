<template>
    <div data-device="mobile" :class="{ active: !isMenuHidden }">
        <a href="#" class="nav-logo">
            <img class="nav-logo-img" src="~/static/images/logo_example.svg" alt="SASS Logo">
        </a>

        <a id="burger-menu" @click="toggleMenu" role="button" :aria-expanded="isMenuHidden ? 'false' : 'true'" aria-controls="mobile-menu-list">
            <span data-id="1" class="burger-menu-bar"></span>
            <span data-id="2" class="burger-menu-bar"></span>
            <span data-id="3" class="burger-menu-bar"></span>
        </a>

        <ul class="nav-menu-links-mobile" id="mobile-menu-list">
            <li v-for="link in links" :key="link.name" class="nav-menu-link">
                <nuxt-link :to="link.to" class="nav-link" exact-active-class="current">
                    {{ link.name }}
                </nuxt-link>
            </li>
            <li class="nav-menu-link">
                <a href="#" class="btn btn-primary mt-5">Contact</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MobileNavigation',
    props: {
        links: {
            type: Array,
            required: true,
            default: () => [],
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