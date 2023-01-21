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

export class CartRepository {

    async get() { 
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

    // get(id: number): Promise<ICart | null>;
    async create(data) {
        try {
            // TODO: create new cart to user
            return cart
        } catch (error) {
            return {
                status: 'FAILED',
                message: `Error: ${ error }` 
            }
        }
    }

    async addItem(item){
        try {
            // TODO: product item add
            return product
        } catch (error) {
            return false
        }
    }

    async deleteItem(id) {
        try {
            // TODO: product item delete
            return product
        } catch (error) {
            return false
        }
    }

    // delete(id: number): Promise<ICart>;
    // update(id: number, data: ICart): Promise<ICart>;


}