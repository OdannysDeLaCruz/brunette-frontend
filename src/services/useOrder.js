import { ref } from "vue"
// import { useOrderStore } from "../stores/orderStore"
import  { useCartStore } from "../stores/cartStore"

const order = ref({
    userId: null,
    products: [],
    payment: {
        method: null
    },
    shipping: {
        method: null,
        address: null
    }
})

export function useOrder() {
    // const { order } = useOrderStore()
    const { cart } = useCartStore()

    const createOrder = () => {
        order.value.products = cart.products
        console.log(order)
    }     

    const saveOrderLocally = () => {
        localStorage.setItem('order', JSON.stringify(order.value))
    }

    const setOrder = () => {
        const orderLocal = localStorage.getItem('order')
        if ( orderLocal ) {
            order.value = JSON.parse(orderLocal)
        } else {
            saveOrderLocally()
        }
    }
    
    const saveProducts = (products) => {
        order.value.products = products
        saveOrderLocally()
    }

    const saveShippingMethod = (shippingMethodId) => {
        order.value.shipping.method = shippingMethodId
        saveOrderLocally()
    }

    const saveShippingAddress = (shippingAddressId) => {
        order.value.shipping.address = shippingAddressId
        saveOrderLocally()
    }

    const savePaymentMethod = (paymentMethodId) => {
        order.value.payment.method = paymentMethodId
        saveOrderLocally()
    }

    return {
        order,
        createOrder,
        saveOrderLocally,
        setOrder,
        saveProducts,
        savePaymentMethod,
        saveShippingMethod,
        saveShippingAddress
    }
}