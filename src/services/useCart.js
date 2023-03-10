// Product mooc
const product = {
    id: 1,
    name: '',
    price: 1000,
    oldPrice: 1000,
    stock: 10
}
// Array products mooc
const products = [ product ]
// Cart mooc
const cart = { 
    id: 1, 
    quantity: 1, 
    products
}


export function useCart() {
    const getCart = async () => { 
        try {
            // TODO: get user´s cart 
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve(cart)
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