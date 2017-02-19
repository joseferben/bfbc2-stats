import {
    Action
} from '../Actions';

import {
    ReduceStore
} from 'flux/utils';
import Dispatcher from '../Dispatcher';

class PlayerStatsStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }
}
