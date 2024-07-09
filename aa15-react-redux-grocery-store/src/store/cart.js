const ADD_TO_CART = 'store/cart'

export const addToCart = (produceId) => {
    return {
        type: ADD_TO_CART,
        produceId
    }
}
export function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            // console.log('action nnnnnnnn', action)
            // console.log("🚀 ~ cartReducer ~ state:", state)
            const produceId = action.produceId
            const newnewstate = {
                ...state,
                
            }

            return newState
        }
        default:
            return state
    }

}
