import { defineStore } from "pinia";

export const usePurchasingProcessStore = defineStore('purchasingProcessStore', {
    state: () => {
        return {
            navigation: ['cart', 'shippingMethod', 'shippingAddress', 'paymentMethod', 'finalizingOrder'],
            steps: {
                'cart': {
                    name: 'cart',
                    url: '/purchasing/cart',
                    title: 'Carrito',
                    data: {
                        // price: { title: 'Pagar', amount: 2000, ... },
                        // inputs: {},
                        // discountCoupon: {},
                        // etc ...
                    }
                },
                'shippingMethod': {
                    name: 'shippingMethod',
                    url: '/purchasing/shippingMethod',
                    title: 'Carrito',
                    data: {}
                },
                'shippingAddress': {
                    name: 'shippingAddress',
                    url: '/purchasing/shippingAddress',
                    title: 'Carrito',
                    data: {}
                },
                'paymentMethod': {
                    name: 'paymentMethod',
                    url: '/purchasing/paymentMethod',
                    title: 'Carrito',
                    data: {}
                },
                'finalizingOrder': {
                    name: 'finalizingOrder',
                    url: '/purchasing/finalizingOrder',
                    title: 'Carrito',
                    data: {}
                },
            },
            currentStepId: 'cart',
        }
    },
    getters: {
        // navigation: (state) => state.navigation,
        // currentStepId: (state) => state.currentStepId,
    },
    actions: {
        setCurrentStepId(stepId) {
            this.currentStepId = stepId
        },
        previousStep() {
            const currentStepIndex = this.navigation.indexOf(this.currentStepId)
            const previousStepIndex = currentStepIndex - 1

            if ( previousStepIndex >= 0 ) {
                return this.navigation[previousStepIndex]
            } else {
                return false
            }
        },
        nextStep() {
            const currentStepIndex = this.navigation.indexOf(this.currentStepId)
            const nextStepIndex = currentStepIndex + 1

            if ( nextStepIndex <= this.navigation.length ) {
                return this.navigation[nextStepIndex]
            } else {
                return false
            }
        }
    }
})