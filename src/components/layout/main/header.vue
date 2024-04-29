<template>
  <q-header reveal :reveal-offset="700" bordered class="bg-dark text-white">
    <!-- <q-header> -->
    <q-toolbar>
      <q-toolbar-title class="cursor-pointer" @click="goHome">
        <div class="flex items-center">
          <q-icon>
            <logo-icon dark />
          </q-icon>
          <!-- <logo-text v-if="!$mobile" class="q-ml-md" color="white" /> -->
          <span v-if="!$mobile" class="gf-04 text-h6 q-ml-sm">
            Colonia Tovar
          </span>
        </div>
      </q-toolbar-title>

      <q-tabs
        v-if="!$mobile"
        stretch
        inline-label
        class="text-white text-weight-light"
      >
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.name"
          :name="tab.name"
          no-caps
          :label="$t('app.header.' + tab.name)"
          :to="tab.to"
        />
      </q-tabs>
      <btn-dark-mode-header :hidden="$mobile" />
      <btn-locale v-if="!$mobile" />
      <!-- Mobile Menu -->
      <div v-if="$mobile">
        <q-btn padding="none" flat icon="menu">
          <q-menu v-model="mnOpen">
            <q-list style="min-width: 200px">
              <q-item
                v-for="tab in tabs"
                :key="tab.name"
                clickable
                :to="tab.to"
                active-class="text-weight-medium"
              >
                <q-item-section>
                  {{ $t("app.header." + tab.name) }}
                </q-item-section>
              </q-item>
              <!-- <q-tabs stretch vertical inline-label>
                <q-route-tab
                  v-for="tab in tabs"
                  :key="tab.name"
                  :name="tab.name"
                  no-caps
                  :label="$t('app.header.' + tab.name)"
                  :to="tab.to"
                />
              </q-tabs> -->
              <q-separator />
              <btn-dark-mode-header list-item />
              <btn-locale list-item />
            </q-list>
            <!-- <q-list style="min-width: 150px">
              <q-item clickable v-for="tab in tabs" :key="tab.name">
                <q-item-section>
                  {{ $t("app.header." + tab.name) }}
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list> -->
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
const $q = useQuasar();
const $router = useRouter();

const $mobile = computed(() => $q.platform.is.mobile);

let mnOpen = ref(false);

const tabs = ref([
  {
    name: "places",
    to: { name: "business-category", params: { category: "all" } },
  },
  {
    name: "media",
    to: { name: "blog-page" },
  },
  {
    name: "blog",
    to: { name: "blog-page" },
  },
]);

function goHome() {
  $router.push({ name: "home-page" });
}
</script>
