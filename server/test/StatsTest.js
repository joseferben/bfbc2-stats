const expect = require('expect.js');

const Stats = require('../Stats.js');
const Mocks = require('./Mocks.js');

describe('StatsTest ', () => {

    describe('getWeaponStats ', () => {

        it('should return empty array given empty array', () => {
            const sut = Stats;
            const actual = sut.getWeaponStats([]);

            expect(actual).to.be.an('array');
            expect(actual).to.eql([]);
        });

        it('should return stats for each weapon given an array of kills', () => {
          const sut = Stats;
          const actual = sut.getWeaponStats(Mocks.simpleKills());
          const expected = Mocks.weaponStats();

          expect(actual).to.eql(expected);
        });

    });

});
