
<script setup>
import { DialogPanel, DialogTitle, TransitionChild } from "@headlessui/vue";
const props = defineProps({
  filter: Object,
});
import { defineEmits } from "vue";

const emit = defineEmits(["search", "close"]);
const handleSearch = () => {
  emit("search");
};
const handleClose = () => {
  emit("close");
};
</script>
<template>
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
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
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
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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
              @click="handleSearch()"
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
              @click="handleClose()"
              ref="cancelButtonRef"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </TransitionChild>
    </div>
  </div>
</template>



<style>
</style>