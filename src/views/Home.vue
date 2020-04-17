<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Test></Test>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Test from '../components/Test'

    export default {
        name: 'Home',
        components: {
            Test
        }
    }
</script>
