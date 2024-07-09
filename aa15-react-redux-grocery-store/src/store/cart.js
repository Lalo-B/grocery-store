const ADD_TO_CART = 'store/cart/add'
const REMOVE_FROM_CART = 'store/cart/remove'
const ADD_ONE = 'store/cart/add1'
const MINUS_ONE = 'store/cart/minus1'

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

export const addOne = (produceId) => {
    return {
        type: ADD_ONE,
        produceId
    }
}

export const minusOne = (produceId) => {
    return {
        type: MINUS_ONE,
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
        case ADD_ONE: {
            const newState = {...state}
            let count = state[action.produceId].count
            newState[action.produceId] = {id: action.produceId, count: ++count}
            return newState
        }
        case MINUS_ONE: {
            let newState = {}
            let count = state[action.produceId].count
            if(count > 1){
                newState = {...state}
                newState[action.produceId] = {id: action.produceId, count: --count}
            } else {
                for (let id in state) {
                    if ( +id !== action.produceId) {
                        newState[id] = state[id]
                    }
                }

            }
            return newState
        }
        default:
            return state
    }

}
