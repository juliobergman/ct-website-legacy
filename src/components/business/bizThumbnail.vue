<template>
  <div class="col-6 col-sm-3 cursor-pointer" @click="handleClick">
    <q-card flat square style="background-color: transparent">
      <q-img
        :ratio="1 / 1"
        :src="
          business.avatar.src !=
          'http://127.0.0.1:8000/storage/factory/avatar/misc/avatar-company.jpg'
            ? business.avatar.src
            : 'https://source.unsplash.com/random/640x480/?landscape=' + rand
        "
      >
        <div class="fit flex bg-none content-end"></div>
      </q-img>

      <q-card-section class="q-px-none q-py-sm">
        <div>
          <d-text text="h6" :content="business.name" />
        </div>
        <div class="row">
          <biz-chip
            v-for="(cat, idx) in business.categories.slice(0, 2)"
            :key="cat.id"
            :category="cat"
            :first="idx === 0 ? true : false"
            @click.stop
          />
        </div>
        <div>
          <!-- :to="{ name: 'post-page', params: { slug: post.slug } }" -->
          <!-- <d-link :to="{ name: 'home-page' }" @click.stop> -->
          <d-text text="body2" :content="business.humans_updated_at" />
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
  business: {},
});

const business = computed(() => props.business);
const rand = computed(() => Math.floor(Math.random() * 100));

function handleClick() {
  $router.push({
    name: "business-page",
    params: { username: props.business.username },
  });
}
</script>
