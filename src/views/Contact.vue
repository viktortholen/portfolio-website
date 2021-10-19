<template>
<div class="centerer">
    <div class= "contact">
        <p class=title>CONTACT</p>
        <p>Mail: viktor.tholen@gmail.com</p>
        <p>Telefon: +46702980745</p>
        <p>Github: <a href="https://github.com/viktortholen">viktortholen</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/viktor-tholen">Viktor Tholén</a></p>
    </div>
</div>
</template>
<script>

export default {
    name: 'Contact',
    components: {
     
  }
}
</script>

<style scoped>
.title{
    font-size: 3rem;
    font-weight: 700;
}
.centerer{
    margin: 0 auto;
    height: 75vh;
    display: flex;
    justify-content: center;
}
.contact{
    margin: auto;
    color: white;
}
</style>