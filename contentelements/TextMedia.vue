<template>
    <div class="container">
        <div class="row g-5">

            <div class="col-md-6 col-12 align-center" v-if="imagePos === 'left'">
                <div class="image-wrapper">
                    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
                </div>
            </div>

            <div class="col-md-6 col-12 align-center">
                <div class="text-wrapper">
                    <div v-if="titleHtml" v-html="titleHtml"></div>
                    <div v-if="text" v-html="text"></div>
                    <a v-if="buttonText && buttonUrl" :href="buttonUrl" :class="buttonClasses">
                        {{ buttonText }}
                    </a>
                </div>
            </div>

            <div class="col-md-6 col-12 align-center" v-if="imagePos === 'right'">
                <div class="image-wrapper">
                    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TextMedia',
    props: {
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