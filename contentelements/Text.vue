<template>
    <div class="text-content" :style="{ textAlign, color: textColor }">
        <h1 v-if="heading" v-html="heading"></h1>
        <h2 v-if="subheading" v-html="subheading"></h2>
        <div v-if="text" v-html="text"></div>
    </div>
</template>

<script>
export default {
    props: {
        heading: { type: String, default: '' },
        subheading: { type: String, default: '' },
        text: { type: String, default: '' },
        textAlign: { type: String, default: 'left' },
        textColor: { type: String, default: '' },
    },
};
</script>