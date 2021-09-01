import * as t from "../types"

const initialState = {
    userInfo: {
        name: "Quest"
    },
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case t.SET_NAME:
            return{ ...state, userInfo: {name: action.payload}}
        default:
            return {...state}
    }
}

export default main