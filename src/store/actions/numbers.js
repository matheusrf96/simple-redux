
import {
    ALTER_MIN_NUMBER,
    ALTER_MAX_NUMBER,
} from './actionTypes'

// Action Creator
export const alterMinNumber = (newNumber) => {
    return {
        type: ALTER_MIN_NUMBER,
        payload: newNumber,
    }
}

export const alterMaxNumber = (newNumber) => {
    return {
        type: ALTER_MAX_NUMBER,
        payload: newNumber,
    }
}