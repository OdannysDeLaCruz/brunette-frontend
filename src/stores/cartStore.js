import { defineStore } from "pinia";
import { ref } from "vue";
import { useCart } from "../services/useCart";

const { getCart } = useCart()

export const useCartStore = defineStore('cartStore', () => {
    const cart =  ref({
        total: 0,
        quantity: 0,
        products: [],
    })

    const loading = ref(true)

    const getProducts = async() => {
        loading.value = true
        try {
            cart.value = await getCart()
            loading.value = false
        } catch( error ) {
            return []
        }
    }

    const addProduct = async (newProduct) => {
        // TODO: validar diplicados, mayor a cero, etc
        console.log(newProduct, newProduct.quantity)
        try {
            if ( newProduct.quantity == 0 ) {
                throw Error('Quantity must be greater than zero')
            }
            
            const product = cart.value.products.find(product => product.id == newProduct.id)
            if ( !product ) {
                cart.value.products.push(newProduct)
                return true
            }

        } catch ( error ) {
            throw error
        }

    }

    const decreaseQuantity = async (id) => {
        const product = cart.value.products.find(product => product.id == id)
        console.log(product)
        if ( product.quantity > 1 ) {
            product.quantity -= 1
        }
        
    }
    const increaseQuantity = async (id) => {
        const product = cart.value.products.find(product => product.id == id)
        console.log(product)
        product.quantity += 1
    }

    return {
        cart,
        loading,
        getProducts,
        addProduct,
        decreaseQuantity,
        increaseQuantity,
    }
})