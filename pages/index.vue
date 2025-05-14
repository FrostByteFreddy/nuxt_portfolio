<template>
    <div id="app-parent-container">
        <HeroSimple
            :heroImage="heroSimpleData.image"
            :title="heroSimpleData.title"
            :text="heroSimpleData.text"
            :buttonText="heroSimpleData.buttonText"
            :buttonClasses="heroSimpleData.buttonClasses"
            :buttonUrl="heroSimpleData.buttonUrl"
        />

        <TextMedia
            :backgroundImage="textMediaData.bgImage"
            :titleHtml="textMediaData.title"
            :text="textMediaData.description"
            :imageSrc="textMediaData.imgSrc"
            :imageAlt="textMediaData.imgAlt"
            :buttonText="textMediaData.btnText"
            :buttonUrl="textMediaData.btnUrl"
            :buttonClasses="textMediaData.btnClasses"
            :additionalClasses="textMediaData.customSectionClasses"
            :imagePos="textMediaData.imagePos" />
    </div>
</template>

<script>
// Import components
import HeroSimple from '../ContentElements/Hero/HeroSimple.vue';
import TextMedia from '../ContentElements/TextMedia.vue';

export default {
    name: 'App',
    components: {
        HeroSimple,
        TextMedia,
    },
    data() {
        return {
            heroSimpleData: {
                image: '/images/hero.png',
                title: '<h1>Erfolg Messbar Machen</h1>',
                text: "<p class='lead'>Ihr Freelancer für IT-Projekte im Raum Bern, von Wordpress über CraftCMS und moderne JS-Frameworks bis hin zu Typo3</p>",
                buttonText: 'Kontakt aufnehmen',
                buttonClasses: 'btn btn-primary icon-right icon-arrow-right mt-5',
                buttonUrl: '/about',
            },
            textMediaData: {
                imagePos: 'left', 
                bgImage: '',
                title: '<h2>More About Our Services</h2>',
                description: '<p>This is a paragraph describing the amazing features and benefits of using our service. We strive to provide the best experience. <strong>Join us today!</strong></p><p>Explore the various sections to learn more.</p>',
                imgSrc: '/images/hero.png',
                imgAlt: 'A descriptive alt text for the feature image',
                btnText: 'Get Started Now',
                btnUrl: '/signup',
                btnClasses: 'btn btn-secondary mt-5',
                customSectionClasses: 'my-text-media-section',
            },
        };
    },
};
</script>
