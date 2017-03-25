import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';

import actionTypes from '../actions/ActionTypes';
import dispatcher from '../Dispatcher';

export default class PlayerStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return {
            loading: false,
            overall: {},
            weapons: [],
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case actionTypes.LOAD_PLAYER_START:
                {
                    return {
                        loading: true,
                        overall: {},
                        weapons: [],
                    };
                }

            case actionTypes.LOAD_PLAYER_SUCCEED:
                {
                    return {
                        loading: false,
                        overall: {
                            kills: action.data.kills,
                            deaths: action.data.deaths,
                            hs: action.data.hs,
                            seconds: action.data.seconds,
                            score: action.data.score,
                            connections: action.data.connections,
                            name: action.data.name,
                        },
                        weapons: action.data.weapons,
                    };
                }

            case actionTypes.LOAD_PLAYER_FAIL:
                {
                    console.log(`Failed to load player with id ${action.id}, error: ${action.err}`);
                    return {
                        loading: false,
                        overall: {},
                        weapons: [],
                    };
                }

            default:
                return state;
        }
    }
}
