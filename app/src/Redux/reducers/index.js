import { GET_CARDS_START, GET_CARDS_SUCCESS, GET_CARDS_FAIL } from '../actions'


//Initialize Program State
export const initialState = {
    cards: [],
    isFetching: false,
    error: ''
}

//Reducer
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_CARDS_SUCCESS:
            return {
                ...state,
                cards: action.payload,
                isFetching: false,
                error: ''
            }
        case GET_CARDS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}