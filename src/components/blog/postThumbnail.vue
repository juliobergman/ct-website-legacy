<template>
  <div v-if="column" class="q-mb-xl">
    <q-card flat square style="background-color: transparent">
      <div class="row">
        <div class="col-12 col-sm-5">
          <q-img
            img-class="rounded-borders"
            :ratio="4 / 3"
            :src="post.image.src"
          >
            <div class="fit flex bg-none content-end">
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
        </div>
        <div
          :class="
            $mobile ? 'col-12 col-sm-7 q-pt-md' : 'col-12 col-sm-7 q-pl-md'
          "
        >
          <div>
            <d-text :text="$mobile ? 'h5' : 'h4'" :content="post.title" />
          </div>
          <div class="q-mb-md">
            <div class="q-pa-none q-ma-none" style="opacity: 0.9">
              <d-text :content="$t('blog.label.by')" spacer />

              <span>
                <d-link
                  :to="{
                    name: 'post-author',
                    params: { username: post.author.username },
                  }"
                  :label="post.author.name + ' '"
                />
              </span>
              <br v-if="$mobile" />
              <span v-if="!$mobile">&bull; </span>
              <span>
                {{ post.post_date.diff_for_humans }}
              </span>
            </div>
          </div>
          <div>
            <d-text text="body1" :content="post.excerpt" />
          </div>
          <div class="q-mt-lg">
            <d-btn
              :label="$t('blog.label.keep_reading')"
              :to="{
                name: 'post-page',
                params: { slug: post.slug },
              }"
            />
          </div>
        </div>
      </div>
    </q-card>
  </div>
  <div v-else class="col-6 col-sm-4 cursor-pointer" @click="handleClick">
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
        <div class="fit flex bg-none content-end">
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();
const $router = useRouter();

const $mobile = computed(() => ($q.platform.is.mobile ? true : false));

const props = defineProps({
  post: {},
  column: {
    type: Boolean,
    default: false,
  },
});

const post = computed(() => props.post);
const column = computed(() => props.column);
const rand = computed(() => Math.floor(Math.random() * 100));

function handleClick() {
  $router.push({ name: "post-page", params: { slug: props.post.slug } });
}
</script>
