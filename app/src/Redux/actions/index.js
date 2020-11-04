import axios from 'axios'

export const GET_CARDS_START = 'GET_CARDS_START';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAIL = 'GET_CARDS_FAIL';

export const getCards = () => dispatch => {
    //Set state to getting cards...
    dispatch({ type: GET_CARDS_START });

    //Make axios request and dispatch appropriate data dependant upon result
    axios.get('https://api.magicthegathering.io/v1/cards?random') 
        .then(res => {
            console.log(res);
            dispatch({ type: GET_CARDS_SUCCESS, payload: res.data.cards});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_CARDS_FAIL, payload: err});
        })
}

export const searchCards = (cardName) => dispatch => {
    //Set state to getting cards...
    dispatch({ type: GET_CARDS_START });

    //Make axios request and dispatch appropriate data dependant upon result
    axios.get(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_CARDS_SUCCESS, payload: res.data.cards});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_CARDS_FAIL, payload: err});
        })
}