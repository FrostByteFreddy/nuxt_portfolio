<template>
  	<HeroSimple 
        title="Your Custom Title"
        text="This is some descriptive text about your project. Some descriptive text about your project."
        buttonText="Learn More"
        buttonUrl="/about" 
    />
</template>

<script>

    import HeroSimple from '../contentelements/Hero/HeroSimple.vue'

	export default {
		components: {
			HeroSimple,
		},
	};
</script>