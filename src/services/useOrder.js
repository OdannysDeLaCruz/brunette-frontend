import { usePurchasingProcessStore } from "../stores/purchasingProcessStore"

const purchasingProcessStore = usePurchasingProcessStore()

export function useOrder() {
    const dataOrder = purchasingProcessStore.order
    const createOrder = () => {

    }
    return {

    }
}