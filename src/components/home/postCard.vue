<template>
  <q-card square flat>
    <div class="row">
      <q-card-section class="col-12 col-md-5">
        <q-img :ratio="4 / 3" :src="post.image.src" />
      </q-card-section>
      <q-card-section class="col-12 col-md-7">
        <div class="text-h5">{{ post.title }}</div>
        <div>
          By {{ post.author.name }} &bull;
          {{ post.post_date.diff_for_humans }}
        </div>
        <div class="text-body1 q-my-lg">{{ post.excerpt }}</div>
        <div>
          <d-btn
            :to="{ name: 'post-page', params: { slug: post.slug } }"
            :label="$t('blog.label.keep_reading')"
            icon="chevron_right"
          />
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  postData: {},
});

const post = computed(() => props.postData);
</script>
