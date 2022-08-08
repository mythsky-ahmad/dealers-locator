<script setup>
// import { RouterLink, RouterView } from "vue-router";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { onMounted, ref, reactive, watch } from "vue";
import { useDealerStore } from "@/stores/dealer";
import Map from "@/components/Map.vue";
import DelearsTable from "@/components/DelearsTable.vue";

//data

const dealer = useDealerStore();
const item = reactive({});
const open = ref(false);
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
      Lat: center.value.lat,
      Lon: center.value.lng,
      ...filter,
    };
    dealer.getDealers(params);
    dealer.getBranches(params);
  }
};
const search = () => {
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
          <!-- <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild> -->

          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div
              class="
                flex
                items-end
                sm:items-center
                justify-center
                min-h-full
                p-4
                text-center
                sm:p-0
              "
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  class="
                    relative
                    bg-white
                    rounded-lg
                    text-left
                    overflow-hidden
                    shadow-xl
                    transform
                    transition-all
                    sm:my-8 sm:max-w-lg sm:w-full
                  "
                >
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div
                        class="
                          mx-auto
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          h-12
                          w-12
                          rounded-full
                          bg-red-100
                          sm:mx-0 sm:h-10 sm:w-10
                        "
                      ></div>
                      <div
                        class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                      >
                        <DialogTitle
                          as="h3"
                          class="text-xl leading-6 font-medium text-gray-900"
                        >
                          Filter Results
                        </DialogTitle>
                        <div class="mt-2">
                          <ul class="divide-y divide-gray-200">
                            <li class="py-2 flex">
                              <div class="ml-3">
                                <p class="font-medium text-lg text-gray-900">
                                  Max Results
                                  {{ filter.MaxResults }}
                                </p>
                                <div class="flex">
                                  <button
                                    @click="filter.MaxResults = 10"
                                    :class="
                                      filter.MaxResults == 10
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-white
                                      rounded-l-lg
                                      border border-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    10
                                  </button>
                                  <button
                                    @click="filter.MaxResults = 20"
                                    :class="
                                      filter.MaxResults == 20
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-whiteborder-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    20
                                  </button>
                                  <button
                                    @click="filter.MaxResults = 30"
                                    :class="
                                      filter.MaxResults == 30
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-whiteborder-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    30
                                  </button>
                                  <button
                                    @click="filter.MaxResults = 40"
                                    :class="
                                      filter.MaxResults == 40
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-white
                                      rounded-r-lg
                                      border border-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    40
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li class="py-2 flex">
                              <div class="ml-3">
                                <p class="font-medium text-lg text-gray-900">
                                  Max Radius {{ filter.MaxRadius }}
                                </p>
                                <div class="flex">
                                  <button
                                    @click="filter.MaxRadius = 100"
                                    :class="
                                      filter.MaxRadius == 100
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-white
                                      rounded-l-lg
                                      border border-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    100
                                  </button>
                                  <button
                                    @click="filter.MaxRadius = 200"
                                    :class="
                                      filter.MaxRadius == 200
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-whiteborder-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    200
                                  </button>
                                  <button
                                    @click="filter.MaxRadius = 300"
                                    :class="
                                      filter.MaxRadius == 300
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-whiteborder-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    300
                                  </button>
                                  <button
                                    @click="filter.MaxRadius = 400"
                                    :class="
                                      filter.MaxRadius == 400
                                        ? 'z-10 ring-2 ring-blue-700 text-blue-700  dark:ring-blue-500 dark:text-white'
                                        : ''
                                    "
                                    class="
                                      py-2
                                      px-4
                                      text-sm
                                      font-medium
                                      text-gray-900
                                      bg-white
                                      rounded-r-lg
                                      border border-gray-200
                                      hover:bg-gray-100 hover:text-blue-700
                                      dark:bg-gray-700
                                      dark:border-gray-600
                                      dark:text-white
                                      dark:hover:text-white
                                      dark:hover:bg-gray-600
                                    "
                                  >
                                    400
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li class="py-2 flex">
                              <div class="ml-3">
                                <p class="font-medium text-lg text-gray-900">
                                  Key Words
                                </p>
                                <div class="flex">
                                  <input
                                    v-model="filter.Keywords"
                                    placeholder="Keywords"
                                    class="border-2 mt-2 p-2"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-gray-50
                      px-4
                      py-3
                      sm:px-6 sm:flex sm:flex-row-reverse
                    "
                  >
                    <button
                      type="button"
                      class="
                        w-full
                        inline-flex
                        justify-center
                        rounded-md
                        border border-transparent
                        shadow-sm
                        px-4
                        py-2
                        bg-blue-600
                        text-base
                        font-medium
                        text-white
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                        sm:ml-3 sm:w-auto sm:text-sm
                      "
                      @click="
                        open = false;
                        search();
                      "
                    >
                      search
                    </button>
                    <button
                      type="button"
                      class="
                        mt-3
                        w-full
                        inline-flex
                        justify-center
                        rounded-md
                        border border-gray-300
                        shadow-sm
                        px-4
                        py-2
                        bg-white
                        text-base
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:ring-500
                        sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                      "
                      @click="open = false"
                      ref="cancelButtonRef"
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
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

    <div   v-if="dealer.branches[0] || dealer.dealers[0]" class="border-2 border-white p-5">
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
