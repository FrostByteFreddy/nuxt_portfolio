<template>
    <HeroSimple 
        backgroundImage="/images/default.jpg"
        title="<h1>Home</h1>"
        text="<p class='lead'>This is some descriptive text about your project. Some descriptive text about your project.</p>"
        buttonText="Learn More" 
        buttonUrl="/about" 
    />
</template>

<script>

import HeroSimple  from '../ContentElements/Hero/HeroSimple.vue'
import TextMedia   from '../ContentElements/TextMedia.vue'
import Image       from '../ContentElements/Media/Image.vue'

export default {
    components: {
        HeroSimple,
        TextMedia,
        Image,
    },
};
</script>