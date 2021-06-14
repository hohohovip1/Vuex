<template>
    <div class="postList">
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('data', ['posts']),
    },
    created() {
        this.$store.dispatch('data/loadPosts');
    },
};
</script>

<style></style>
