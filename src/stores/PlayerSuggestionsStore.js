import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';
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
            case 'SEARCH_PLAYER_START':
                {
                    return {
                        loading: true,
                        suggestions: [],
                    };
                }

            case 'SEARCH_PLAYER_SUCCEED':
                {
                    console.log(action);
                    return {
                        loading: false,
                        suggestions: action.suggestions,
                    };
                }

            case 'SEARCH_PLAYER_FAIL':
                {
                    console.log(`Failed to load suggestions with string ${action.part}, err: ${action.err}`);
                    return {
                        loading: false,
                        suggestions: [],
                    };
                }

            default:
                return state;

        }
    }

}
