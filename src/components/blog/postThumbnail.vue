<template>
  <div class="col-6 col-sm-4 cursor-pointer" @click="handleClick">
    <q-card flat square style="background-color: transparent">
      <q-img :ratio="4 / 3" :src="post.image.src" :srcset="post.image.srcset" />
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  post: {},
});

const post = computed(() => props.post);

function handleClick() {
  $router.push({ name: "post-page", params: { slug: props.post.slug } });
}
</script>
