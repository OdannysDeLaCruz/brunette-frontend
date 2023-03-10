import { defineStore } from "pinia";
import { useCart } from "../services/useCart";

const { getCart } = useCart()

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: {
            id: 0,
            products: [],
            quantity: 0
        },
        loading: true
    }),
    getters: {
        products: ( state ) => state.cart.products,
        quantity: ( state ) => state.cart.quantity
    },
    actions: {
        async getProducts() {
            this.loading = true
            try {

                this.cart = await getCart()
                this.loading = false
                
            } catch( error ) {
                return []
            }
            
            // return this.cart.products
        }
    }
})