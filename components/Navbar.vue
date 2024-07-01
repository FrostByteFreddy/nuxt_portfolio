<template>
  <nav>
    <DesktopNavbar :links="links" />
    <MobileNavbar :links="links" />
  </nav>
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
        { to: "/contact", name: "Contact" },
        { to: "/experience", name: "Experience" },
        { to: "/work", name: "Work" },
      ],
    };
  },
};
</script>