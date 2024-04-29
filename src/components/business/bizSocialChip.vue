<template>
  <q-btn
    :class="first ? '' : 'q-ml-md'"
    padding="xs sm"
    no-caps
    unelevated
    flat
    color="primary"
    :href="media.link"
    target="_blank"
  >
    <q-item class="q-py-none q-px-xs text-left">
      <q-item-section class="q-py-none q-px-sm" side>
        <q-icon size="16px" color="primary">
          <social-icon :icon="media.media.icon" />
        </q-icon>
      </q-item-section>
      <q-item-section class="q-py-none q-px-sm">
        <q-item-label caption>
          {{ media.media.name }}
        </q-item-label>
        <q-item-label>
          {{ media.username_at }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-btn>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const props = defineProps({
  media: {},
  filled: {
    type: Boolean,
    default: false,
  },
  first: {
    type: Boolean,
    default: false,
  },
});

const media = computed(() => props.media);
const first = computed(() => props.first);
const label = computed(() => {
  let lab = props.media.username;
  if (props.media.icon != "whatsapp") lab = props.media.username_at;
  return lab;
});
const filled = computed(() => props.filled);
let hvr = ref(false);

const standByColor = computed(() => (props.filled ? "dark-chip" : "primary"));

function handleClick() {
  return;
  $router.push({
    name: "business-category",
    params: { category: props.category.id },
  });
}
</script>
