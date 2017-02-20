import expect from 'expect.js';

import WeaponListStore from '../WeaponListStore';
import actionTypes from '../../actions/ActionTypes';

const sut = new WeaponListStore();

describe('WeaponListStore', () => {

    it('should be loading weapon list given LOAD_PLAYER_START and initial state', () => {
        const state = {
            loading: false,
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_START
        };
        const expected = {
            loading: true,
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual).to.eql(expected);
    });
});
