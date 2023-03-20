import { ref } from "vue"
import { defineStore } from "pinia"

export const useOrderStore = defineStore('order', () => {
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
        saveOrderLocally,
        setOrder,
        saveProducts,
        savePaymentMethod,
        saveShippingMethod,
        saveShippingAddress
    }
})