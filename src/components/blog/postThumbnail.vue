<template>
  <div class="col-6 col-sm-4 cursor-pointer" @click="handleClick">
    <q-card flat square style="background-color: transparent">
      <!-- <q-img :ratio="4 / 3" :src="post.image.src" :srcset="post.image.srcset" /> -->
      <q-img
        :ratio="4 / 3"
        :src="
          post.image.src !=
          'http://127.0.0.1:8000/storage/factory/avatar/misc/placeholder.jpg'
            ? post.image.src
            : 'https://source.unsplash.com/random/640x480/?landscape=' + rand
        "
      >
        <div class="fit flex bg-none items-end">
          <post-chip
            filled
            v-for="(cat, idx) in post.categories"
            :key="cat.id"
            :category="cat"
            :first="idx === 0 ? true : false"
            @click.stop
          />
        </div>
      </q-img>
      <q-card-section class="q-px-none q-py-sm">
        <div>
          <d-text text="h6" :content="post.title" />
        </div>
        <div>
          <!-- :to="{ name: 'post-page', params: { slug: post.slug } }" -->
          <!-- <d-link :to="{ name: 'home-page' }" @click.stop> -->
          <d-text text="body2" :content="post.post_date.diff_for_humans" />
          <!-- </d-link> -->
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { QChip } from "quasar";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  post: {},
});

const post = computed(() => props.post);
const rand = computed(() => Math.floor(Math.random() * 100));

function handleClick() {
  $router.push({ name: "post-page", params: { slug: props.post.slug } });
}
</script>
