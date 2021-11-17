
// Action Creator
export const alterMinNumber = (newNumber) => {
    return {
        type: 'ALTER_MIN_NUMBER',
        payload: newNumber,
    }
}