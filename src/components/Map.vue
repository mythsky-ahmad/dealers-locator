<template>
  <div>
    <GMapMap
      style="width: 90vw; height: 80vh"
      :center="center"
      :zoom="10"
      map-type-id="terrain"
    >
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        :icon="'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m1.png'"
        @click="openMarker(m.id)"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === m.id"
        >
          <div class="text-black"><MarkerDetails :data="m.data" /></div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";
import MarkerDetails from "@/components/MarkerDetails.vue";
export default {
  components: {
    MarkerDetails,
  },
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          id: 1,
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
          data: { name: "ahmad", age: 23, status: "single af" },
        },
        {
          id: 2,
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
          data: { name: "ahmad", age: 23, status: "single af" },
        },
      ],
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, ["counter"]),
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
