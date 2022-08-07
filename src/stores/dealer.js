import { defineStore } from "pinia";
import axios from 'axios'
export const useDealerStore = defineStore({
    id: 'dealer',
    state: () => ({
        all: [],
    }),
    getters: {},
    actions: {
        async getDealers(params) {
            let new_params = {
                ...params,
                "Origin": "",
                "Precision": true,
                "MapSessionKey": "",
                "Keywords": ""
            }
            try {
                const response = await axios.post('https://localhost:5013/api/branches/searchDealers', new_params)
                this.all = response.data
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getBranches(params) {
            let new_params = {
                ...params,
                "Origin": "",
                "Precision": true,
                "MapSessionKey": "",
                "Keywords": ""
            }
            try {
                const response = await axios.post('https://localhost:5013/api/branches/searchBranches', new_params)
                this.all = response.data
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        },
    }
})