<template>
    <div>
        <div v-for="user in this.$store.state.news" v-bind:key="user">{{user.title}}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>