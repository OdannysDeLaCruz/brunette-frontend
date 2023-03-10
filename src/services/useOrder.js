import { useOrderStore } from "../stores/orderStore"
import  { useCartStore } from "../stores/cartStore"

export function useOrder() {
    const { order } = useOrderStore()
    const cartStore = useCartStore()

    const createOrder = () => {
        order.products = cartStore.products
        console.log(order)
    }

    return {
        createOrder
    }
}