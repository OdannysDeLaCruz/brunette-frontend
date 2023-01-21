import { defineStore } from "pinia";
import { CartRepository } from "@/repositories/CartRepositoy";

const cartRepository = new CartRepository()

const cart = {
    id: 0,
    products: [],
    quantity: 0
}

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart,
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

                this.cart = await cartRepository.get()
                this.loading = false
                
            } catch( error ) {
                return []
            }
            
            // return this.cart.products
        }
    }
})