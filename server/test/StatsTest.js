const expect = require('expect.js');

const Stats = require('../Stats.js');
const KillMocks = require('./mocks/KillMocks.js');

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

    });

    describe('_getTimePlayed ', () => {

        it('should return zero seconds given an empty array of sessions', () => {
            const actual = sut._getTimePlayed([]);

            expect(actual).to.be.an('number');
            expect(actual).to.eql(0);
        });

    });


});
