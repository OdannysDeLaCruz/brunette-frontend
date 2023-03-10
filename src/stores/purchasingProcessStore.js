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
                    title: '¿Como quieres recibir tu pedido?',
                    data: [
                        // Estos datos deben ser configurados o actualizados cada vez desde el back al entrar a /cart
                        {
                            id: 1,
                            label: 'Domicilio a mi casa',
                            image: 'https://picsum.photos/200/200?random=1',
                            additionalCost: 4000
                        },
                        {
                            id: 2,
                            label: 'Recoger en el local',
                            image: 'https://picsum.photos/200/200?random=2',
                            additionalCost: 0
                        }
                    ]
                },
                'shippingAddress': {
                    name: 'shippingAddress',
                    url: '/purchasing/shippingAddress',
                    title: 'Datos de envío',
                    data: [
                        {
                            id: 1,
                            name: 'Calle 6b # 41 - 36',
                            additional: 'La Nevada'
                        },
                        {
                            id: 2,
                            name: 'Calle 6a # 40 - 28',
                            additional: 'La Nevada'
                        }
                    ]
                },
                'paymentMethod': {
                    name: 'paymentMethod',
                    url: '/purchasing/paymentMethod',
                    title: '¿Como quieres pagar?',
                    data: [
                        {
                            id: 1,
                            name: 'Transferencia Bancaría',
                            image: 'https://picsum.photos/200/200?random=1'
                        },
                        {
                            id: 2,
                            name: 'Efectivo',
                            image: 'https://picsum.photos/200/200?random=2'
                        },
                        {
                            id: 3,
                            name: 'Nequi',
                            image: 'https://picsum.photos/200/200?random=3'
                        }
                    ]
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