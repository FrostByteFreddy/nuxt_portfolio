<template>
    <div class="container" data-component="hero">
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
</template>

<script>
export default {
    name: 'HeroSimple',
    props: {
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