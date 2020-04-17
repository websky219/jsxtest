<template>
    <div>
        B组件
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "child-b",
        props:{
            text:String
        }
    }
</script>

<style scoped>

</style>