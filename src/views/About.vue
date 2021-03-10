<template>
    <div class= "about">
        <Header/>
        <Info />
        <Footer/>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Info from '../components/Info.vue'

export default {
    name: 'About',
    components: {
        Header,
        Footer,
        Info
  }
}
</script>