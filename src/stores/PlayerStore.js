import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';

import actionTypes from '../actions/ActionTypes';
import dispatcher from '../Dispatcher';

const SEPARATING_CHAR = '-';

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
            case actionTypes.SORT_WEAPON_STATS:
                {
                    return {
                        loading: state.loading,
                        overall: state.overall,
                        weapons: this.sortWeaponStats(state.weapons, action.key)
                    };
                }

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

    sortWeaponStats(weapons, key) {
        if (weapons[0][key] != null) {
            return weapons.sort((a, b) => b[key] - a[key]);
        } else {
            return weapons.sort((a, b) => PlayerStore.getCalculatedValue(b, key) - PlayerStore.getCalculatedValue(a, key));
        }
    }

    static getCalculatedValue(weapon, key) {
        const secondVal = weapon[this.stripSecondKey(key)];
        return secondVal === 0 ? 0 : weapon[this.stripFirstKey(key)] / secondVal;
    }

    static stripFirstKey(key) {
        return key.substring(0, [key.indexOf(SEPARATING_CHAR)]);
    }

    static stripSecondKey(key) {
        return key.substring(key.indexOf(SEPARATING_CHAR) + 1, key.length);
    }
}
