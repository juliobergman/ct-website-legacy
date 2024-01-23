<template>
  <div class="flex justify-end">
    <q-card flat class="q-pr-sm">
      <q-item
        class="q-pa-none"
        :clickable="clickable"
        :v-ripple="clickable"
        @click="handleClick"
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="user.userdata.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <span v-if="by">{{ $t("blog.label.by") }}</span> {{ user.name }}
          </q-item-label>
          <q-item-label caption> {{ date.diff_for_humans }} </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  modelValue: {},
  postDate: {},
  by: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
});

const user = computed(() => props.modelValue);
const date = computed(() => props.postDate);
const clickable = computed(() => props.clickable);
const by = computed(() => props.by);

function handleClick() {
  if (!props.clickable) return;
  $router.push({
    name: "post-author",
    params: { username: props.modelValue.username },
  });
}
</script>
