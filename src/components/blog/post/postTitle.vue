<template>
  <div class="full-width q-gutter-none q-px-md">
    <div class="row">
      <h1 class="post-title text-shadow-1 text-h3 q-pa-none q-ma-none">
        {{ post.title }}
      </h1>
    </div>
    <div class="row">
      <h2 class="post-subtitle text-shadow-1 text-h6 q-pa-none q-ma-none">
        <span class="post-title-span">
          {{ $t("blog.label.published_by") }}
        </span>
        <span class="post-title-span">
          <d-link
            class="post-author-link"
            :to="{
              name: 'post-author',
              params: { username: post.author.username },
            }"
            :label="post.author.name"
          />
        </span>
        <br v-if="$mobile" />
        <span class="post-title-span">&bull;</span>
        <span class="post-title-span">
          {{ post.post_date.diff_for_humans }}
        </span>
      </h2>
    </div>
    <div class="row q-my-sm">
      <post-chip
        v-for="(cat, idx) in post.categories"
        :key="cat.id"
        :category="cat"
        :first="idx === 0 ? true : false"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  postData: {},
});

const post = computed(() => props.postData);
</script>
