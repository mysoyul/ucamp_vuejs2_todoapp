<template>
    <header>
        <h2>TODO it! ({{ mode }})</h2>
    </header>
</template>
<script>
export default {
    data() {
        return {
            mode: process.env.VUE_APP_TITLE
        }
    },
}
</script>
<style scoped>
h2 {
    color: #2F3852;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>