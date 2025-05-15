<template>
    <section :class="['card-grid-section', additionalClasses]" data-component="cards"
        :style="{ 'background-image': backgroundImage ? `url(${backgroundImage})` : null }">
        <div class="container py-5">
            <div class="row mb-4 mb-md-5" v-if="title || text">
                <div class="col-12 text-center">
                    <h2 v-if="title" v-html="title" class="section-title"></h2>
                    <p v-if="text" v-html="text" class="section-text lead"></p>
                </div>
            </div>

            <div class="row g-4">
                <div v-for="(card, index) in cards" :key="index"
                    class="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
                    <div :class="['card h-100 w-100', card.customClass]"> {/* Apply customClass here */}
                        <div class="card-body d-flex flex-column text-center">
                            <div v-if="card.svgCode" class="card-icon mx-auto mb-3" v-html="card.svgCode"></div>
                            <h5 v-if="card.title" class="card-title fw-bold">{{ card.title }}</h5>
                            <p v-if="card.text" class="card-text flex-grow-1">{{ card.text }}</p>
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