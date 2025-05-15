<template>
    <div id="app-parent-container">
        <LayoutSection additionalClasses="background-black hero-simple" componentType="hero">
            <HeroSimple
                :heroImage="heroSimpleData.image"
                :title="heroSimpleData.title"
                :text="heroSimpleData.text"
                :buttonText="heroSimpleData.buttonText"
                :buttonClasses="heroSimpleData.buttonClasses"
                :buttonUrl="heroSimpleData.buttonUrl"
            />
        </LayoutSection>

        <LayoutSection
            :backgroundImage="textMediaData.bgImage"
            :additionalClasses="textMediaData.customSectionClasses"
            componentType="textmedia"
        >
            <TextMedia
                :titleHtml="textMediaData.title"
                :text="textMediaData.description"
                :imageSrc="textMediaData.imgSrc"
                :imageAlt="textMediaData.imgAlt"
                :buttonText="textMediaData.btnText"
                :buttonUrl="textMediaData.btnUrl"
                :buttonClasses="textMediaData.btnClasses"
                :imagePos="textMediaData.imagePos" />
        </LayoutSection>

        <LayoutSection
            :backgroundImage="cardGridData.backgroundImage"
            :additionalClasses="cardGridData.additionalClasses"
            componentType="cards"
        >
            <Cards
                :title="cardGridData.title"
                :text="cardGridData.text"
                :cards="cardGridData.cards"
            />
        </LayoutSection>
    </div>
</template>

<script>
// Import components
import LayoutSection from '~/components/layout/Section.vue';
import HeroSimple from '../ContentElements/Hero/HeroSimple.vue';
import TextMedia from '../ContentElements/TextMedia.vue';
import Cards from '../ContentElements/Cards.vue'; // Assuming your CardGrid component is named Cards.vue here

export default {
    name: 'App',
    components: {
        LayoutSection,
        HeroSimple,
        TextMedia,
        Cards,
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
            cardGridData: {
                title: '<h2>Services</h2>',
                text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
                cards: [
                    {
                        title: 'SEO',
                        customClass: 'card-style-seo', 
                        svgCode: '', 
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                        // buttonText: 'More on SEO',
                        // buttonUrl: '/services/seo',
                        // buttonClasses: 'btn btn-light btn-sm'
                    },
                    {
                        title: 'Hosting',
                        customClass: 'card-style-hosting',
                        svgCode: '', 
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
                        // buttonText: 'Hosting Plans',
                        // buttonUrl: '/services/hosting'
                    },
                    {
                        title: 'Entwicklung',
                        customClass: 'card-style-entwicklung',
                        svgCode: '', 
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text has been the.",
                        // buttonText: 'Our Process',
                        // buttonUrl: '/services/entwicklung'
                    }
                ],
                additionalClasses: 'py-5 bg-light-gray'
            }
        };
    },
};
</script>