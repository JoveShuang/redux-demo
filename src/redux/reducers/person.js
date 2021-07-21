import { WORD_LIST } from "../constants"
const initState = [{
    id: '01',
    name: 'Tom',
    age: 18
}]
export default function person(preState = initState, action) {
    const { type, data } = action
    switch(type) {
        case WORD_LIST.ADD_PERSON:
            return [data, ...preState]
        default:
            return preState 
    }
}