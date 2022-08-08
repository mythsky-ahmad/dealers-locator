<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { Dialog, TransitionRoot } from "@headlessui/vue";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { onMounted, ref, reactive, watch } from "vue";
import { useDealerStore } from "@/stores/dealer";
import Map from "@/components/Map.vue";
import Filter from "@/components/Filter.vue";
import DelearsTable from "@/components/DelearsTable.vue";

//data

const dealer = useDealerStore();
const item = reactive({});
let open = ref(false);
const filter = reactive({
  MaxResults: 20,
  MaxRadius: 300,
  Keywords: "",
});
let center = reactive({});

//methods
const setPlace = (e) => {
  if (e) {
    center.value = {
      lat: (e.geometry.viewport.ub.hi + e.geometry.viewport.ub.lo) / 2,
      lng: (e.geometry.viewport.Ra.hi + e.geometry.viewport.Ra.lo) / 2,
    };

    let params = {
      Lat: `${center.value.lat}`,
      Lon: `${center.value.lng}`,
      ...filter,
    };
    dealer.getDealers(params);
    dealer.getBranches(params);
  }
};
const search = () => {
  console.log("yrdy");
  open.value = false;
  if (center.value) {
    let params = {
      Lat: center.value.lat,
      Lon: center.value.lng,
      ...filter,
    };
    dealer.getDealers(params);
    dealer.getBranches(params);
  }
};
const close = () => {
  open.value = false;
};
//mouinted
onMounted(() => {});

//whatch
// watch([filter, center], (a) => {
//   if (a[1].value) {
//   }
// });
</script>

<template>
  <div class="container">
    <div class="py-5 flex justify-between items-center">
      <div>
        <span
          class="
            text-5xl
            font-extrabold
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-pink-500
            to-violet-500
            hover:opacity-90
          "
        >
          Dealer Locator
        </span>
      </div>
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
          <Filter @search="search" @close="close" :filter="filter" />
        </Dialog>
      </TransitionRoot>
      <div class="flex">
        <GMapAutocomplete
          placeholder="This is a placeholder"
          @place_changed="setPlace"
          :options="{
            bounds: {
              north: 49.382808,
              south: 24.521208,
              east: -66.945392,
              west: -124.736342,
            },
            strictBounds: true,
          }"
        >
        </GMapAutocomplete>
        <button
          @click="open = true"
          class="
            text-center
            font-bold
            py-3
            hover:bg-red-100
            bg-white
            border-2 border-grey
          "
        >
          <AdjustmentsIcon class="h-6 w-6" />
        </button>
      </div>
    </div>

    <Map class="border-2 border-white" :center2="center.value" />

    <div
      v-if="dealer.branches[0] || dealer.dealers[0]"
      class="border-2 border-white p-5"
    >
      <DelearsTable
        v-if="dealer.branches[0]"
        :items="[
          { name: 'ahmad', age: 33 },
          { name: 'ahmad', age: 33 },
        ]"
        :haeders="['Branch Office', 'Distance (mi)']"
      />
      <DelearsTable
        v-if="dealer.dealers[0]"
        class="mt-8"
        :items="[
          { name: 'ahmad', age: 33, test: 12, tesw: 15 },
          { name: 'ahmad', age: 33, test: 12, tesw: 15 },
          { name: 'ahmad', age: 33, test: 12, tesw: 15 },
        ]"
        :haeders="[
          'Authorized Dealer',
          'Distance (mi)',
          'Other Comments',
          'Dispatch Comments',
        ]"
      />
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style  >
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.pac-target-input {
  padding: 16px;
}
.pac-item > :nth-child(3) {
  display: block;
  padding-left: 25px;
}
.pac-icon {
  position: relative;
}
.hdpi.pac-logo:after {
  background-image: none !important;
}
</style>
