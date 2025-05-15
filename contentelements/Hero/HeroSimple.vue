<template>
    <!-- <section data-component="hero" class="background-black hero-simple" :style="{ 'background-image': `url(${backgroundImage})` }"> -->
    <section data-component="hero" class="background-black hero-simple">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 col-12 align-center">
                    <div v-html="title"></div>
                    <div v-html="text"></div>
                    <a v-if="buttonText && buttonUrl" :href="buttonUrl" :class="buttonClasses">{{ buttonText }}</a>
                </div>
                <div class="col-md-6 col-12 align-center">
                    <img alt="" :src=heroImage />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSimple',
    props: {
        backgroundImage: {
            type: String,
            default: ''
        },
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        heroImage: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
        },
        buttonUrl: {
            type: String,
        },
        buttonClasses: {
            type: String,
            default: 'btn mt-4'
        }
    }
}
</script>