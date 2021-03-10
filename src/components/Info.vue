<template>
    <div class="info">
        <h1>Hello world!</h1>
        <p>Hello, this is some interesting sentence!</p>
    </div>
</template>


<script>
export default {
  name: 'Info'
}
</script>

<style scoped>
    .info{
        width: 100%;
        height: 100vh;
        text-align: center;
        color: aliceblue;
        display: block;
        margin:auto;
        overflow: auto;
        background-color: rgb(219, 166, 166);
    }
    h1{
        font-size: 5em;
    }
</style>