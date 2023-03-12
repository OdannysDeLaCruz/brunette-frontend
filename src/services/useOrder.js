import { useOrderStore } from "../stores/orderStore"
import  { useCartStore } from "../stores/cartStore"

export function useOrder() {
    const { order } = useOrderStore()
    const { cart } = useCartStore()

    const createOrder = () => {
        order.products = cart.products
        console.log(order)
    }

    return {
        createOrder
    }
}