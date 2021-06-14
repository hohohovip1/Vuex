<template>
    <div class="product-list">
        <div v-for="product in rs" :key="product.id">
            <h1>{{ product.title }}</h1>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('data', ['rs']),
    },
    created() {
        this.$store.dispatch('data/loadRS');
    },
};
</script>

<style></style>
