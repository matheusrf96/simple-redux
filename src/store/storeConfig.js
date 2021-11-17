import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        switch(action.type) {
            case 'ALTER_MIN_NUMBER':
                return {
                    ...state,
                    min: action.payload,
                }
            default:
                return {
                    min: 7,
                    max: 31,
                }
        }

    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
