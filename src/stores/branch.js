import { defineStore } from "pinia";
import axios from 'axios'
export const useBranchStore = defineStore({
    id: 'branch',
    state: () => ({
        all: [],
    }),
    getters: {},
    actions: {
        async index(params) {
            let new_params = {
                ...params,
                "Origin": "",
                "Lat": "36.33650600617695",
                "Lon": "-95.68154293555827",
                "MaxResults": 50,
                "MaxRadius": 300,
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
        }
    }
})