<template>
    <div class="container-narrow">
        <div class="row g-5" v-if="title || text">
            <div class="col-12 text-center">
                <h2 v-if="title" v-html="title" class="section-title"></h2>
                <p v-if="text" v-html="text" class="section-text"></p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row g-4 mt-5">
            <div v-for="(card, index) in cards" :key="index" class="col-md-4 col-12">
                <div :class="['card', card.customClass]">
                    <div class="card-inner">
                        <h3 v-if="card.title" class="card-title">{{ card.title }}</h3>
                        <div v-if="card.image" class="image-wrapper">
                            <img :src="card.image" alt="">
                        </div>
                    </div>
                    <div class="card-description mt-5">
                        <p v-if="card.text" class="card-text">{{ card.text }}</p>
                        <a v-if="card.buttonText && card.buttonUrl" :href="card.buttonUrl"
                            :class="card.buttonClasses || 'btn btn-primary mt-auto'">
                            {{ card.buttonText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        cards: {
            type: Array,
            default: () => [],
            validator: function (cards) {
                return cards.every(card =>
                    typeof card.title === 'string' &&
                    (typeof card.svgCode === 'string' || typeof card.svgCode === 'undefined') &&
                    typeof card.text === 'string' &&
                    (typeof card.buttonText === 'string' || typeof card.buttonText === 'undefined') &&
                    (typeof card.buttonUrl === 'string' || typeof card.buttonUrl === 'undefined') &&
                    (typeof card.customClass === 'string' || typeof card.customClass === 'undefined')
                );
            }
        }
    }
};
</script>