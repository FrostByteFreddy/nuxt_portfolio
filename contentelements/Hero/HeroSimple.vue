<template>
  <section data-component="hero" class="background-tertiary-light hero-simple" :style="{ 'background-image': `url(${image})` }">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-10">
          <h1>{{ title }}</h1> 
          <p class="lead">{{ text }}</p>
          <a v-if="buttonText && buttonUrl" :href="buttonUrl" class="btn btn-primary">{{ buttonText }}</a> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSimple',
  props: {
    image: {
      type: String,
      default: '/images/default.jpg'
    },
    title: {
      type: String,
      default: 'Lorem ipsum!'
    },
    text: {
      type: String,
      default: 'Lorem ipsum'
    },
    buttonText: {
      type: String,
      default: '' 
    },
    buttonUrl: {
      type: String,
      default: '' 
    }
  }
}
</script>