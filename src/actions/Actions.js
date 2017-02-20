import axios from 'axios';

import actionTypes from './ActionTypes.js';
import dispatcher from '../Dispatcher.js';

const baseUrl = 'http://localhost:8080/api';

const Actions = {
  searchPlayer(part, timeStamp) {
        dispatcher.dispatch({
            type: actionTypes.SEARCH_PLAYER_START,
            part,
        });

        axios.get(`${baseUrl}/suggestions/${part}`)
            .then(res => dispatcher.dispatch({
                type: actionTypes.SEARCH_PLAYER_SUCCEED,
                suggestions: res.data.suggestions,
            }))
            .catch(err => dispatcher.dispatch({
                type: actionTypes.SEARCH_PLAYER_FAIL,
                err: err,
            }));
    },

    loadPlayer(id) {
        //TODO(implement);
    },

    loadGeneral() {
        //TODO(implement);
    }
}

export default Actions;
