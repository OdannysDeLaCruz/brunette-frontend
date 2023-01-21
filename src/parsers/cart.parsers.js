import { dataCartResponse } from "@/interfaces/dataCartResponse.interface"
import { Cart } from "@/types/cart.type"

const parserCart = (dataCart: dataCartResponse): Cart => {
    return {
        id: dataCart.id,
        products: dataCart.products,
        quantiy: dataCart.quantity
    }
}

// others parsers
// ...

export const Parser = {
    cart: parserCart
}