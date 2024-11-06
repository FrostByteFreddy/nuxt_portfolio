<template>
    <section data-component="hero" class="background-tertiary-light hero-simple" :style="{ 'background-image': `url(${image})` }">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-10">
                    <div v-html="title"></div>
                    <div v-html="text"></div>
                    <a v-if="buttonText && buttonUrl" :href="buttonUrl" :class="buttonClasses">{{ buttonText }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSimple',
    props: {
        image: {
            type: String,
            default: '/images/default.jpg'
        },
        title: {
            type: String,
            default: '<h1>Lorem ipsum!<h1>'
        },
        text: {
            type: String,
            default: '<p class="lead">Lorem ipsum</p>'
        },
        buttonText: {
            type: String,
            default: 'More'
        },
        buttonUrl: {
            type: String,
            default: 'https://google.come'
        },
        buttonClasses: {
            type: String,
            default: 'btn mt-4'
        }
    }
}
</script>