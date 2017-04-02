import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';

import actionTypes from '../actions/ActionTypes';
import dispatcher from '../Dispatcher';

export default class OverviewStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return {
            loading: false,
            overview: {
                kills: 0,
                time: 0,
                players: 0,
                hs: 0
            }
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case actionTypes.LOAD_OVERVIEW_START:
                {
                    return {
                        loading: true,
                        overview: state.overview
                    };
                }
            case actionTypes.LOAD_OVERVIEW_SUCCEED:
                {
                    return {
                        loading: false,
                        overview: action.data
                    };

                }
            case actionTypes.LOAD_OVERVIEW_FAIL:
                {
                    console.log(`Failed to load overview stats: ${action.err}`);
                    return {
                        loading: false,
                        overview: {}
                    };
                }
            default:
                return state;
        }
    }
}
