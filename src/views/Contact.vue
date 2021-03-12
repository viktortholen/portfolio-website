<template>
<div class="centerer">
    <div class= "contact">
        <p class=title>Contact</p>
        <p>Mail: viktor.tholen@gmail.com</p>
        <p>Telefon: 0000000000</p>
        <p>Github</p>
        <p>Linkedin</p>
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
    font-size: 2rem;
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