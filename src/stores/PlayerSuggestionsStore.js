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
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case 'SEARCH_PLAYER_START':
                {
                    //do nothing, by default show loading bar while state is empty array
                    return state;
                }

            case 'SEARCH_PLAYER_SUCCEED':
                {
                    console.log(action);
                    return action.suggestions;
                }

            case 'SEARCH_PLAYER_FAIL':
                {
                    console.log(`Failed to load suggestions with string ${action.part}`);
                    return state;
                }

            default:
                return state;

        }
    }

}
