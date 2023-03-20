// import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useCart } from "../services/useCart";

const { getCart } = useCart()

const cart = ref({
    total: 0,
    quantity: 0,
    products: [],
})

export function useCartStore() {

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

    const findProductInCart = (id) => cart.value.products.find(product => product.id == id)

    const addProduct = async ({ id, name, quantity, price }) => {
        try {
            if ( quantity == 0 ) {
                throw Error('Quantity must be greater than zero')
            }
            
            const isProductAdded = findProductInCart(id)

            if ( isProductAdded ) {
                cart.value.products[isProductAdded.id].quantity += 1
            } else {
                cart.value.products.push({ id, name, quantity, price })
                cart.value.quantity += quantity
            }

            return true

        } catch ( error ) {
            throw error
        }
    }

    const deleteProduct = async (id) => {
        // console.log(id)
        const product = findProductInCart(id)
        if ( product ) {
            const index = cart.value.products.indexOf(product)
            const removedProduct = cart.value.products.splice(index, 1)
            if ( removedProduct ) {
                console.log(removedProduct)
                cart.value.quantity -= removedProduct[0].quantity
                return true
            }
        } else {
            alert('Producto no existe en el carrito.')
        }
    }

    const decreaseQuantity = async (id) => {
        const product = findProductInCart(id)
        
        if ( product.quantity > 1 ) {
            product.quantity -= 1
            cart.value.quantity -= 1 
        } else {
            alert('No puedes pedir menos de 1 unidad')
        }
    }

    const increaseQuantity = async (id) => {
        const product = cart.value.products.find(product => product.id == id)
        product.quantity += 1
        cart.value.quantity += 1 
    }

    const getTotal = () => {
        cart.value.products
    }

    return {
        cart,
        loading,
        getProducts,
        addProduct,
        decreaseQuantity,
        increaseQuantity,
        deleteProduct,
    }
}