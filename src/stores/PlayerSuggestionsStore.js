import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';
import actionTypes from '../actions/ActionTypes';

import dispatcher from '../Dispatcher';

export default class PlayerSuggestionsStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return {
            loading: false,
            suggestions: []
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case actionTypes.SEARCH_PLAYER_START:
                {
                    return {
                        loading: true,
                        suggestions: [],
                    };
                }

            case actionTypes.SEARCH_PLAYER_SUCCEED:
                {
                    return {
                        loading: false,
                        suggestions: action.suggestions,
                    };
                }

            case actionTypes.SEARCH_PLAYER_FAIL:
                {
                    console.log(`Failed to load suggestions with string ${action.part}, err: ${action.err}`);
                    return {
                        loading: false,
                        suggestions: [],
                    };
                }

            case actionTypes.LOAD_PLAYER_START:
                {
                    return {
                        loading: state.loading,
                        suggestions: []
                    };
                }

            default:
                return state;

        }
    }

}
