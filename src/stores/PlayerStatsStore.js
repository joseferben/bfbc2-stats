import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';
import Dispatcher from '../Dispatcher';

class PlayerStatsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {
        //TODO(implement player loading)
        return {};
    }

}
