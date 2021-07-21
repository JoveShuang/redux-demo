import { WORD_LIST } from "../constants"

export const increment = data => ({ type: WORD_LIST.INCREMENT, data })

export const decrement = data => ({ type: WORD_LIST.DECREMENT, data })

export const incrementAsync = (data, time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}