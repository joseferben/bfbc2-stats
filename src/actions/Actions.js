import axios from 'axios';

import actionTypes from './ActionTypes.js';
import dispatcher from '../Dispatcher.js';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bfbc2.herokuapp.com/api' : 'http://localhost:8080/api';

console.log(process.env.NODE_ENV);
const Actions = {
    searchPlayer(part) {
        dispatcher.dispatch({
            type: actionTypes.SEARCH_PLAYER_START,
            part,
        });

        if (part.length > 3) {
            axios.get(`${baseUrl}/suggestions/${part}`)
                .then(res => dispatcher.dispatch({
                    type: actionTypes.SEARCH_PLAYER_SUCCEED,
                    suggestions: res.data.suggestions,
                }))
                .catch(err => dispatcher.dispatch({
                    type: actionTypes.SEARCH_PLAYER_FAIL,
                    err: err,
                }));
        } else {
            dispatcher.dispatch({
                type: actionTypes.SEARCH_PLAYER_FAIL,
                err: 'Player name too short!',
            });
        }
    },

    loadPlayer(id) {
        dispatcher.dispatch({
            type: actionTypes.LOAD_PLAYER_START,
            id,
        });

        axios.get(`${baseUrl}/players/${id}`)
            .then(res => dispatcher.dispatch({
                type: actionTypes.LOAD_PLAYER_SUCCEED,
                data: res.data,
            }))
            .catch(err => dispatcher.dispatch({
                type: actionTypes.LOAD_PLAYER_FAIL,
                err: err,
            }));
    },

    loadGeneral() {
        //TODO(implement);
    },
}

export default Actions;
