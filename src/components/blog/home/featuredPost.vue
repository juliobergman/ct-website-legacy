<template>
  <q-img :ratio="$mobile ? 1 : 16 / 7" :src="post.image.src">
    <div class="bg-bottom-overlay full-width absolute-bottom">
      <div class="contain">
        <blog-featured-post-title hide-exerpt :post-data="post" />
      </div>
    </div>
  </q-img>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();

const $mobile = computed(() => ($q.platform.is.mobile ? true : false));
const props = defineProps({
  post: {},
});

const post = computed(() => props.post);

function handleClick() {
  console.log("click");
  // $router.push({ name: "post-page", params: { slug: props.post.slug } });
}
</script>
