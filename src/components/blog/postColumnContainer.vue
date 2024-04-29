<template>
  <div>
    <blog-post-thumbnail
      column
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
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
