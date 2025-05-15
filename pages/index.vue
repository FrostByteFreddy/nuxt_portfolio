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
                title: '<h2>Hello and Welcome!</h2>',
                description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
                imgSrc: '/images/Moritz.png',
                imgAlt: 'Moritz Burn - Freelancer in Thun',
                // btnText: 'Get Started Now',
                // btnUrl: '/signup',
                // btnClasses: 'btn btn-secondary mt-5',
                customSectionClasses: 'intro',
            },
        };
    },
};
</script>
