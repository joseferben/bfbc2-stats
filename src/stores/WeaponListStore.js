import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';
import dispatcher from '../Dispatcher';

export default class WeaponListStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case 'LOAD_PLAYER_START':
                {
                    //do nothing, by default show loading bar while state is empty array
                    return state;
                }

            case 'LOAD_PLAYER_SUCCEED':
                {
                    return action.weaponStats;
                }

            case 'LOAD_PLAYER_FAIL':
                {
                    console.log(`Failed to load player with id ${action.id}`);
                    return state;
                }

            default:
                return state;

        }
    }
}
