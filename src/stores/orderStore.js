import { defineStore } from "pinia";

export const useOrderStore = defineStore('OrderStore', {
    state: () => {
        return {
            order: {
                userId: 1,
                products: [],
                payment: {
                    method: 1
                },
                shipping: {
                    method: 1,
                    address: {
    
                    }
                }
            }
        }
    },
    getters: {
    },
    actions: {
        saveOrderLocally: () => {
            localStorage.setItem('order', JSON.stringify(this.order))
        },
        setOrder: () => {
            const orderLocal = localStorage.getItem('order')
            if ( orderLocal ) {
                this.order = JSON.parse(order)
            } else {
                this.saveOrderLocally()
            }
        },
        saveProducts: (products) => {
            this.order.products = products
            this.saveOrderLocally()
        },
        savePaymentMethod: (paymentMethodId) => {
            this.order.payment.method = paymentMethodId
            this.saveOrderLocally()
        },
        saveShippingMethod: (shippingMethodId) => {
            this.order.shipping.method = shippingMethodId
            this.saveOrderLocally()
        },
        saveShippingAddress: (shippingAddressId) => {
            this.order.shipping.address = shippingAddressId
            this.saveOrderLocally()
        },
    }
})