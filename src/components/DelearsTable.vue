
<script setup>
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/vue/outline";
import { defineProps, watch } from "vue";
const props = defineProps({
  haeders: Array,
  items: Array,
});
</script>

<template>
  <div>
    <table style="width: 90vw"  class=" text-white text-left my-table">
      <thead class="bg-gray-600">
        <tr>
          <th
            class="pl-2 font-bold"
            :key="index"
            v-for="(haeder, index) in haeders"
          >
            {{ haeder }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item, index) in items">
          <td  style="width:25%" class="pl-2 ">
            <ul class="divide-gray-200">
              <li class="py-2 flex">
                <p class="text-sm text-gray-200 font-bold">
                  {{ item.companyName }}
                </p>
              </li>
              <li class="py-2">
                <div class="flex">
                  <LocationMarkerIcon class="h-6 w-6" />
                  <p class="text-sm text-gray-200 pl-2">
                    {{ item.address }}
                  </p>
                </div>

                <p class="text-sm text-gray-200 pl-8">{{ item.city }}</p>
              </li>

              <li class="py-2">
                <div class="flex">
                  <PhoneIcon class="h-6 w-6" />
                  <p class="text-sm text-gray-200 pl-2">
                    {{ item.phone1 }}
                  </p>
                </div>
              </li>
            </ul>
          </td>

          <td class="pt-5" style="vertical-align: sub">
            {{ item.distance }}
          </td>
          <td class="pt-5" style="vertical-align: sub">
            {{ item.comment1 }}
          </td>
          <td class="pt-5" style="vertical-align: sub">
            {{ item.dispatchComment }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style>
.my-table tr:nth-child(even) {
  background: rgb(34, 34, 34);
}
</style>