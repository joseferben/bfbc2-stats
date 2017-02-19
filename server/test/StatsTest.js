const expect = require('expect.js');

const Stats = require('../Stats.js');
const KillMocks = require('./mocks/KillMocks.js');
const SessionMocks = require('./mocks/SessionMocks.js');

const sut = Stats;

describe('StatsTest ', () => {

    describe('getWeaponStats ', () => {

        it('should return empty array given empty array', () => {
            const actual = sut.getWeaponStats([]);

            expect(actual).to.be.an('array');
            expect(actual).to.eql([]);
        });

        it('should return stats for each weapon given an array of kills', () => {
            const actual = sut.getWeaponStats(KillMocks.simpleKills());
            const expected = KillMocks.weaponStats();

            expect(actual).to.eql(expected);
        });

    });

    describe('_getConnections ', () => {

        it('should return zero connections given an empty array of sessions', () => {
            const actual = sut._getConnections([]);

            expect(actual).to.be.an('number');
            expect(actual).to.eql(0);
        });

        it('should return 5 connections given an array of 5 sessions', () => {
            const actual = sut._getConnections(SessionMocks.sessions());

            expect(actual).to.eql(5);
        });

    });

    describe('_getTimePlayed ', () => {

        it('should return zero seconds given an empty array of sessions', () => {
            const actual = sut._getTimePlayed([]);

            expect(actual).to.be.an('number');
            expect(actual).to.eql(0);
        });

        it('should 18 given an array of sessions with total time played of 18', () => {
            const actual = sut._getTimePlayed(SessionMocks.sessions());

            expect(actual).to.be.an('number');
            expect(actual).to.eql(18);
        });

    });

    describe('_getTotalScore ', () => {

        it('should return zero seconds given an empty array of sessions', () => {
            const actual = sut._getTotalScore([]);

            expect(actual).to.be.an('number');
            expect(actual).to.eql(0);
        });

        it('should return 26 given an array of sessions with total time played of 26', () => {
            const actual = sut._getTotalScore(SessionMocks.sessions());

            expect(actual).to.be.an('number');
            expect(actual).to.eql(26);
        });

    });

});
