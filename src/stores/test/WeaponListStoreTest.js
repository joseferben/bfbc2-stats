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

    it('should not be loading weapon list given LOAD_PLAYER_SUCCEED and state with loading', () => {
        const state = {
            loading: true,
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_SUCCEED,
            weapons: []
        };
        const expected = {
            loading: false,
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual).to.eql(expected);
    });

    it('should not be loading weapon list given LOAD_PLAYER_FAIL and state with loading', () => {
        const state = {
            loading: true,
            weapons: []
        };
        const action = {
          type: actionTypes.LOAD_PLAYER_SUCCEED,
          weapons: []
        };
        const expected = {
            loading: false,
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual).to.eql(expected);
    });


});
