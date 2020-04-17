<template>
    <div>
        A组件
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "child-a",
        props:{
            text:String
        }
    }
</script>

<style scoped>

</style>