<template>
    <div class="video-content">
        <video v-if="videoSrc" :src="videoSrc" :class="`${widthClass}`">
    </div>
</template>

<script>
export default {
    props: {
        videoSrc: { type: String, default: '' },
        widthClass: { type: String, default: 'col-lg-6 col-12' }
    },
};
</script>