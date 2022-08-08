import { defineStore } from "pinia";
import axios from 'axios'
export const useDealerStore = defineStore({
    id: 'dealer',
    state: () => ({
        all: [],
        branches: [],
        dealers: [],
    }),
    getters: {},
    actions: {
        async getDealers(params) {
            let new_params = {
                ...params,
                "Origin": "",
                "Precision": true,
                "MapSessionKey": "",

            }
            let headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            try {
                const response = await axios.post('https://localhost:5013/api/branches/searchDealers', new_params, { headers })
                this.dealers = response.records
                console.log(response.records);
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

            }
            let headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            try {
                const response = await axios.post('https://localhost:5013/api/branches/searchBranches', new_params, { headers })
                this.branches = response.records

            } catch (error) {
                console.log(error);
            }
        },
    }
})