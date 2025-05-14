<template>
    <section :class="additionalClasses" data-component="textmedia"
        :style="{ 'background-image': backgroundImage ? `url(${backgroundImage})` : null }">
        <div class="container">
            <div class="row g-5">

                <div class="col-md-6 col-12 align-center" v-if="imagePos === 'left'">
                    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
                    <div v-else>
                    </div>
                </div>

                <div class="col-md-6 col-12 align-center">
                    <div v-if="titleHtml" v-html="titleHtml"></div>
                    <div v-if="text" v-html="text"></div>
                    <a v-if="buttonText && buttonUrl" :href="buttonUrl" :class="buttonClasses">
                        {{ buttonText }}
                    </a>
                </div>

                <div class="col-md-6 col-12 align-center" v-if="imagePos === 'right'">
                    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
                    <div v-else>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TextMedia',
    props: {
        backgroundImage: {
            type: String,
            default: ''
        },
        titleHtml: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        imageSrc: {
            type: String,
            default: ''
        },
        imageAlt: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: ''
        },
        buttonUrl: {
            type: String,
            default: ''
        },
        buttonClasses: {
            type: String,
            default: 'btn mt-4'
        },
        additionalClasses: {
            type: [String, Array],
            default: ''
        },
        imagePos: {
            type: String,
            validator: function (value) {
                // The value must match one of these strings
                return ['left', 'right'].indexOf(value) !== -1;
            }
        }
    }
};
</script>