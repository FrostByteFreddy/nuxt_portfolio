<template>
    <HeroSimple 
        title="Projekte" 
        buttonText="Learn More" 
        buttonUrl="/about" 
    />
    <div class="projects-content">
        <h2>My Projects</h2>
        <p>You can see a selection of my projects on the <a href="/">homepage</a>.</p>
    </div>
</template>

<script>

import HeroSimple from '../contentelements/Hero/HeroSimple.vue'

export default {
    components: {
        HeroSimple,
    },
};
</script>