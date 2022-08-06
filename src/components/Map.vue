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
        :draggable="false"
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
  props: ["center2"],
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 35, lng: -88 },
      markers: [
        {
          id: 1,
          position: {
            lat: 35,
            lng: -88,
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
  watch: {
    center2: {
      handler(val) {
        if (val.lat) {
          this.center = val;
          this.markers[0] = {
            id: 1,
            position: val,
            data: { name: "ahmad", age: 23, status: "single af" },
          };
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
