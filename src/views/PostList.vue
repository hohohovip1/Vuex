<template>
    <div class="postList">
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
        </div>
        <div>{{ rs }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('posts', ['posts']),
        ...mapState('rs', ['rs']),
    },
    created() {
        this.$store.dispatch('posts/loadPosts');
        this.$store.dispatch('rs/loadRS');
    },
};
</script>

<style></style>
