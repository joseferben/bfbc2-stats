import expect from 'expect.js';

import PlayerStore from '../PlayerStore';
import actionTypes from '../../actions/ActionTypes';


describe('PlayerStore', () => {

    let sut = new PlayerStore();
    beforeEach(() => {
        sut = new PlayerStore();
    });

    it('should be loading weapon list given LOAD_PLAYER_START and initial state', () => {
        const state = {
            loading: false,
            overall: {},
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_START
        };
        const expected = {
            loading: true,
            overall: {},
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual.loading).to.be(true);
    });

    it('should not be loading weapon list given LOAD_PLAYER_SUCCEED and state with loading', () => {
        const state = {
            loading: true,
            overall: {},
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_SUCCEED,
            data: {}
        };

        const actual = sut.reduce(state, action);
        expect(actual.loading).to.be(false);
    });

    it('should not be loading weapon list given LOAD_PLAYER_FAIL and state with loading', () => {
        const state = {
            loading: true,
            overall: {},
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_SUCCEED,
            data: {}
        };
        const expected = {
            loading: false,
            overall: {},
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual.loading).to.be(false);
    });


});
