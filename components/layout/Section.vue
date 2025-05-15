<template>
  <section :class="sectionClasses" :style="sectionStyle" :data-component="componentType">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'LayoutSection',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    spaceBefore: {
      type: String,
      default: '' // e.g., 'small', 'medium', 'large'
    },
    spaceAfter: {
      type: String,
      default: '' // e.g., 'small', 'medium', 'large'
    },
    additionalClasses: {
      type: [String, Array],
      default: ''
    },
    componentType: {
      type: String,
      default: null
    }
  },
  computed: {
    sectionClasses() {
      const classes = [];
      if (this.spaceBefore) {
        classes.push(`space-before-${this.spaceBefore}`);
      }
      if (this.spaceAfter) {
        classes.push(`space-after-${this.spaceAfter}`);
      }
      if (this.additionalClasses) {
        if (typeof this.additionalClasses === 'string') {
          classes.push(this.additionalClasses);
        } else {
          classes.push(...this.additionalClasses);
        }
      }
      return classes.join(' ');
    },
    sectionStyle() {
      if (this.backgroundImage) {
        return { 'background-image': `url(${this.backgroundImage})` };
      }
      return {};
    }
  }
};
</script>