<template>
    <HeroSimple 
        title="Contact" 
        buttonText="Learn More" 
        buttonUrl="/about" 
    />
    <div class="contact-form-section">
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
</template>

<script>

import HeroSimple from '../contentelements/Hero/HeroSimple.vue'

export default {
    components: {
        HeroSimple,
    },
};
</script>