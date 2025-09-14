<template>
    <HeroSimple 
        title="Kompezenzen"
        text="This is some descriptive text about your project. Some descriptive text about your project."
        buttonText="Learn More" 
        buttonUrl="/about"
    />
    <div class="competences-content">
      <h2>My Skills</h2>
      <ul>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>SCSS/SASS</li>
        <li>Bootstrap</li>
        <li>Wordpress</li>
        <li>Typo3</li>
        <li>CraftCMS</li>
      </ul>
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