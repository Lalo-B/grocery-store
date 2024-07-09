import produce from '../mockData/produce.json'


const POPULATE_PRODUCE = 'produce/POPULATE'

export const populateProduce = () => {
    return {
        type: POPULATE_PRODUCE,
        produce
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type){
        case POPULATE_PRODUCE:{
            const newState = {}
            action.produce.forEach(produce => {
                newState[produce.id] = produce
            })
            return newState
        }
        default:
            return state;
    }
}
