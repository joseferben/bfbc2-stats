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
        return {
            loading: false,
            wepons: []
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case 'LOAD_PLAYER_START':
                {
                    return {
                        loading: true,
                        weapons: [],
                    };
                }

            case 'LOAD_PLAYER_SUCCEED':
                {
                    return {
                        loading: false,
                        weapons: action.weaponStats,
                    };
                    return action.weaponStats;
                }

            case 'LOAD_PLAYER_FAIL':
                {
                    console.log(`Failed to load player with id ${action.id}, error: ${action.err}`);
                  return {
                    loading: false,
                    weapons: [],
                  };
                }

            default:
                return state;

        }
    }
}
