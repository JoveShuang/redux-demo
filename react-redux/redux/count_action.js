import { WORD_LIST } from "./constants"

export const createIncrement = data => ({ type: WORD_LIST.INCREMENT, data })

export const createDecrement = data => ({ type: WORD_LIST.DECREMENT, data })

export const createIncrementAsync = (data, time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(createIncrement(data))
        }, time)
    }
}