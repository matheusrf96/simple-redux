
const initialState = {
    min: 0,
    max: 10,
}

const numbersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ALTER_MIN_NUMBER':
            return {
                ...state,
                min: action.payload,
            }
        case "ALTER_MAX_NUMBER":
            return {
                ...state,
                max: action.payload,
            }
        default:
            return state
    }
}

export default numbersReducer
