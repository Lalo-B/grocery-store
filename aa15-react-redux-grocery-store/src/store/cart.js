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
            const newState = {...state};
            newState[action.produceId] = {id: action.produceId, count: 1}
            return newState
        }
        default:
            return state
    }

}
