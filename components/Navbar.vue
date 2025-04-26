<template>
    <header data-state="maximized">
        <nav class="container">
            <DesktopNavbar :links="links" />
            <MobileNavbar :links="links" />
        </nav>
    </header>
</template>

<script>
import DesktopNavbar from "../components/Navbar/DesktopNavbar.vue";
import MobileNavbar from "../components/Navbar/MobileNavbar.vue";

export default {

    components: {
        DesktopNavbar,
        MobileNavbar,
    },

    data() {
        return {
            open: false,
            links: [
                { to: "/", name: "Home" },
                { to: "/about", name: "About" },
                { to: "/work", name: "Work" },
                { to: "/contact", name: "Contact", class: "btn btn-secondary"},
            ],
        };
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    },

    methods: {
        handleScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            const scrollThreshold = 100;

            if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > scrollThreshold) {

                // Scrolling down past the threshold
                this.$el.dataset.state = 'minimized';
            } else if (currentScrollPosition < this.lastScrollPosition && currentScrollPosition < scrollThreshold) {

                // Scrolling up past the threshold
                this.$el.dataset.state = 'maximized';
            }

            this.lastScrollPosition = currentScrollPosition;
        },
    },
};
</script>