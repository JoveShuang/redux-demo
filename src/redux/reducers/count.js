import { WORD_LIST } from "../constants"

const initState = 0

export default function count_reducer(preState = initState, action) {
    const { type, data } = action
    switch(type) {
        case WORD_LIST.INCREMENT:
            return preState + data
        case WORD_LIST.DECREMENT:
            return preState - data
        default:
            return preState
    }
}
