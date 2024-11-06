<template>
    <div class="image-content">
        <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" :class="`${widthClass}`">
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: { type: String, default: '' },
        imageAlt: { type: String, default: '' },
        widthClass: { type: String, default: 'col-lg-6 col-12' }
    },
};
</script>