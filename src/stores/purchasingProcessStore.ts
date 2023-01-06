import { defineStore } from "pinia";

export const usePurchasingProcessStore = defineStore('purchasingProcessStore', {
    state: () => {
        return {
            stepActive: 1
        }
    }
})