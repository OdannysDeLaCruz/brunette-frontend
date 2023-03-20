import { ref, computed } from "vue"
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
        address: null,
        additionalCost: 0
    },
    total: 0
})

export function useOrder() {
    // const { order } = useOrderStore()
    const { cart } = useCartStore()

    const total = computed(() => {
        let t = 0
        cart.value.products.map(product => {
            t += (product.price * product.quantity)
        })
        return t + order.value.shipping.additionalCost
    })

    const createOrder = () => {
        order.value.products = cart.value.products
        console.log(order.value)
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
        total,
        createOrder,
        saveOrderLocally,
        setOrder,
        saveProducts,
        savePaymentMethod,
        saveShippingMethod,
        saveShippingAddress
    }
}