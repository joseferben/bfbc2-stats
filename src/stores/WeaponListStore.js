import {
    Action
} from '../actions/Actions';

import {
    ReduceStore
} from 'flux/utils';
import Dispatcher from '../Dispatcher';

class WeaponListStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        //TODO(implement suggestions loading)
        return [];
    }
}
