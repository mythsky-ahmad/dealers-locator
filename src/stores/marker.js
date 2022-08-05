import { defineStore } from "pinia";
import axios from 'axios'
export const useMarkerStore = defineStore({
    id: 'marker',
    state: () => ({
        all: [],
        one: {}
    }),
    getters: {},
    actions: {
        async index() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.all = response.data
        }
    }
})