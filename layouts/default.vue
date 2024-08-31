<template>
  <div>
    <Navbar />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>


<script>
    import Navbar from '../components/Navbar'
    import Footer from '../components/Footer'

    import '~/assets/compiled/styles.min.css';

    export default {
        components: { 
            Navbar, 
            Footer,
        }
    }
</script>