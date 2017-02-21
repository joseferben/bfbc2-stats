import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';

import actionTypes from '../actions/ActionTypes';

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
            case actionTypes.LOAD_PLAYER_START:
                {
                    return {
                        loading: true,
                        weapons: [],
                    };
                }

            case actionTypes.LOAD_PLAYER_SUCCEED:
                {
                    return {
                        loading: false,
                        weapons: action.weapons,
                    };
                    return action.weapons;
                }

            case actionTypes.LOAD_PLAYER_FAIL:
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
