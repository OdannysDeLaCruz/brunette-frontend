import { ref } from "vue"

export function useCart() {

    const cart = ref({ 
        total: 0,
        quantity: 0, 
        products: []
    })

    const getCart = async () => { 
        try {
            // TODO: get user´s cart 
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve(cart.value)
                }, 3000)
            })
        } catch (error) {
            return {
                status: 'FAILED',
                message: `Error: ${ error }` 
            }
        }
    }

    return {
        getCart
    }
}