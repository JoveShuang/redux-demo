import { WORD_LIST } from "../constants";

export const addPerson = personObj => ({
    type: WORD_LIST.ADD_PERSON,
    data: personObj
})