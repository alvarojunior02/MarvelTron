import axios from 'axios';
import {baseURL, timestamp, publicKey, hash} from '../../config/consts';
import api from '../../services/api';

export const getCharacters = (callback = () => {}) => async (
    dispatch,
) => {
    try {
        axios.get(
            `${baseURL}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
        )
        .then(response => {
            dispatch({
                type: 'GET_CHARACTERS',
                payload: response.data.data.results,
            });
            callback();
        })
        .catch(error => console.log(error));
    } catch (err) {
        console.log(err);
    }
};

export const moreCharacters = (
    characters,
    callback = () => {},
) => async (dispatch) => {
    try{
        const offset = characters.length;
        api.get('/characters', {
                params: {
                    offset,
                }
            }
        )
        .then(response => {
            dispatch({
                type: 'MORE_CHARACTERS',
                payload: [...characters, ...response.data.data.results],
            });
            callback();
        })
        .catch(
            error => console.log(error)
        )
    } catch (error) {
        console.log(error);
    }
};