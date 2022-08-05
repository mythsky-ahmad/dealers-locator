<script setup>
import Map from "@/components/Map.vue";
// import { mapState } from "pinia";
// import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref, reactive } from "vue";
import { useMarkerStore } from "@/stores/marker";
const item = reactive({});
// import HelloWorld from "./components/HelloWorld.vue";
// let name = ref("ahmnad hasd oausnd tis ");
// let item = reactive({});
const store = useMarkerStore();
onMounted(() => {
  if (!store.all[0]) {
    store.index();
  }
});
</script>

<template>
  <div class="container mx-auto pb-5">
    <div class="p-5 flex justify-between items-center">
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
      <div>
        <input class="text-black text-3xl" v-model="item.name" type="number" />
      </div>
    </div>
    <div><Map /></div>
    <div>
      <div class="container py-5 px-5">
        <div class="columns-4 justify-between text-center">
          <div class="w-80" :key="i" v-for="(data, i) in store.all">
            {{ data.id }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
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
</style>
