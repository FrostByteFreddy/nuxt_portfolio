<template>
    <HeroSimple 
        textMediaImage="/images/hero.png"
        title="<h1>Erfolg Messbar Machen</h1>"
        text="<p class='lead'>Ihr Freelancer für IT-Projekte im Raum Bern, von Wordpress über CraftCMS und moderne JS-Frameworks bis hin zu Typo3</p>"
        buttonText="Kontakt aufnemhmen"
        buttonClasses="btn btn-primary icon-right icon-arrow-right mt-5" 
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