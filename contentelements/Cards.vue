<template>
    <section :class="['card-grid-section', additionalClasses]" data-component="cards"
        :style="{ 'background-image': backgroundImage ? `url(${backgroundImage})` : null }">
        <div class="container-narrow">
            <div class="row g-3" v-if="title || text">
                <div class="col-12 text-center">
                    <h2 v-if="title" v-html="title" class="section-title"></h2>
                    <p v-if="text" v-html="text" class="section-text lead"></p>
                </div>
            </div>

            <div class="row g-4">
                <div v-for="(card, index) in cards" :key="index"
                    class="col-md-4 col-12">
                    <div :class="['card', card.customClass]">
                        <div class="card-inner">
                            <div v-if="card.svgCode" class="card-icon" v-html="card.svgCode"></div>
                            <h5 v-if="card.title" class="card-title">{{ card.title }}</h5>
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
    </section>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        backgroundImage: {
            type: String,
            default: ''
        },
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
        },
        additionalClasses: {
            type: [String, Array],
            default: ''
        }
    }
};
</script>