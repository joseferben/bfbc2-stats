import expect from 'expect.js';

import WeaponListStore from '../WeaponListStore';
import sctionTypes from '../../actions/ActionTypes';

const sut = WeaponListStore;

describe('WeaponListStore', () => {

    it('should be loading weapon list given LOAD_PLAYER_START and initial state', () => {
        const action = {
            type: actionTypes.LOAD_PLAUER_START
        };

        const actual = sut.reduce(sut.getInitialState(), action);

        expect(actual.loading).to.be(true);
    });
});
