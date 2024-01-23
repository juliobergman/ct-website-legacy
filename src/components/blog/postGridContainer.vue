<template>
  <div class="row q-col-gutter-x-md q-col-gutter-y-md">
    <blog-post-thumbnail v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  posts: {},
});

const posts = computed(() => props.posts);
</script>
