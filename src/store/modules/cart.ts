const state = () => ({
    cart: [],
    showCart: false
})

const getters = {
    getCart(state: any) {
        return state.cart
    }
}

const actions = {
    
}

const mutations = {
    handleShowCart( state: any ) {
        state.showCart = !state.showCart
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}