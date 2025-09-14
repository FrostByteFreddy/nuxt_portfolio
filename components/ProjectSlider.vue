<template>
  <div class="project-slider">
    <h2>My Projects</h2>
    <div class="slider-container">
      <div class="slider-wrapper">
        <div v-for="project in projects" :key="project.id" class="slide">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Project One',
    description: 'This is a description for project one.',
    image: '/images/CardOne.svg',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description for project two.',
    image: '/images/CardTwo.svg',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a description for project three.',
    image: '/images/CardThree.svg',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is a description for project four.',
    image: '/images/card_development.svg',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'This is a description for project five.',
    image: '/images/card_hosting.svg',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'This is a description for project six.',
    image: '/images/card_seo.svg',
  },
]);
</script>

<style lang="scss" scoped>
.project-slider {
  margin-bottom: 2rem;
}

.slider-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS */
}

.slider-wrapper {
  display: flex;
  width: max-content;
}

.slide {
  flex: 0 0 300px;
  margin-right: 1rem;
  scroll-snap-align: start;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
}
</style>
