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
        :icon="{
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3bgI4Z_xq271agLfNeTWmJbha3-ZPm7bHVO6wjU&s',
          scaledSize: { width: 22, height: 22 },
          labelOrigin: { x: 16, y: -10 },
        }"
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
import { mapState } from "pinia";
import { useDealerStore } from "@/stores/dealer";
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
    // ...mapState(useDealerStore, ["all"]),
    ...mapState(useDealerStore, {
      all: (store) => store.all,
    }),
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
