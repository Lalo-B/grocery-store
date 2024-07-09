const ADD_TO_CART = 'store/cart/add'
const REMOVE_FROM_CART = 'store/cart/remove'

export const addToCart = (produceId) => {
    return {
        type: ADD_TO_CART,
        produceId
    }
}



export const removeFromCart = (produceId) => {
    return {
        type: REMOVE_FROM_CART,
        produceId
    }
}

export function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const newState = {...state};
            newState[action.produceId] = {id: action.produceId, count: 1}
            return newState
        }
        case REMOVE_FROM_CART: {
            const newState = {}
            for (let id in state) {
                if ( +id !== action.produceId) {
                    newState[id] = state[id]
                }
            }
            return newState;
        }
        default:
            return state
    }

}
