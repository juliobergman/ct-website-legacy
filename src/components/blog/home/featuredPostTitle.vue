<template>
  <div class="full-width q-px-md q-gutter-y-xs">
    <div>
      <q-chip square color="primary-chip">
        {{ $t("blog.label.featured") }}
      </q-chip>
    </div>
    <div v-if="false">
      <post-chip
        v-for="(cat, idx) in post.categories"
        :key="cat.id"
        :category="cat"
        :first="idx === 0 ? true : false"
      />
    </div>
    <div>
      <h1 class="post-title text-shadow-1 text-h3 q-pa-none q-ma-none">
        {{ post.title }}
      </h1>
    </div>
    <div>
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
        <span v-if="!$mobile" class="post-title-span">&bull;</span>
        <span class="post-title-span">
          {{ post.post_date.diff_for_humans }}
        </span>
      </h2>
    </div>
    <div class="q-my-lg">
      <d-text v-if="hideExerpt" text="body1" :content="post.excerpt" />
    </div>
    <div>
      <d-btn
        :label="$t('blog.label.keep_reading')"
        :to="{
          name: 'post-page',
          params: { slug: post.slug },
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $q = useQuasar();
const $router = useRouter();

const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  postData: {},
  hideExerpt: {
    type: Boolean,
    default: false,
  },
});

const post = computed(() => props.postData);
const hideExerpt = computed(() => !props.hideExerpt);

let hvr = ref(false);

function handleClick() {
  $router.push({ name: "post-page", params: { slug: props.post.slug } });
}
</script>
