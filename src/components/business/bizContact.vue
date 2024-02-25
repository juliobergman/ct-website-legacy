<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item :label="$t('common.label.details')">
      <q-separator />
      <q-card class="q-py-md">
        <q-card-section class="q-py-xs">
          <q-item-label> {{ $t("common.label.phone") }} </q-item-label>
          <q-item v-for="phone in contact.phones" :key="phone.id">
            <q-item-section>
              <q-item-label caption> {{ phone.tag }} </q-item-label>
              <q-item-label>
                {{ phone.content }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-py-xs">
          <q-item-label> {{ $t("common.label.email") }} </q-item-label>
          <q-item v-for="email in contact.emails" :key="email.id">
            <q-item-section>
              <q-item-label caption> {{ email.tag }} </q-item-label>
              <q-item-label>
                {{ email.content }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-py-xs">
          <q-item-label> {{ $t("common.label.address") }} </q-item-label>
          <q-item>
            <q-item-section>
              <q-item-label>
                {{ contact.address }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  contact: {},
});

const contact = computed(() => props.contact);
</script>
