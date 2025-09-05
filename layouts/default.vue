<template>
    <div>
        <Navbar />
        <main>
            <NuxtPage />
        </main>
        <Footer />

        <transition name="page" mode="out-in">
            <div class="page-transition-wrapper"></div>
        </transition>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
    components: {
        Navbar,
        Footer,
    }
}
</script>