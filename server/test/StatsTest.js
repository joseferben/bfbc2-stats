const expect = require('expect.js');

const Stats = require('../Stats.js');
const KillMocks = require('./mocks/KillMocks.js');
const SessionMocks = require('./mocks/SessionMocks.js');

const sut = Stats;

describe('StatsTest ', () => {

    describe('getWeaponStats ', () => {

        it('should return empty array given empty array and invalid id', () => {
            const actual = sut.getWeaponStats([], -1);

            expect(actual).to.be.an('array');
            expect(actual).to.eql([]);
        });

        it('should return stats for each weapon given an array of kills and id of 1', () => {
            const expected = KillMocks.weaponStats().weapons;

            const actual = sut.getWeaponStats(KillMocks.simpleKills().kills, 1);

            expect(actual).to.eql(expected);
        });

    });

    describe('_hasWeaponLabel', () => {

        it('should return false given empty label and empty array of weapons', () => {
            const actual = sut._hasWeaponLabel('', []);

            expect(actual).to.be(false);
        });

        it('should return false given weapon label is not contained in array of weapons', () => {
            const weapons = [{
                label: 'weapon1'
            }, {
                label: 'weapon2'
            }];
            const actual = sut._hasWeaponLabel('testLabel', weapons);

            expect(actual).to.be(false);
        });

        it('should return true given weapon label is contained in array of weapons', () => {
            const weapons = [{
                label: 'weapon1'
            }, {
                label: 'weapon2'
            }];
            const actual = sut._hasWeaponLabel('weapon2', weapons);

            expect(actual).to.be(true);
        });
    });

    describe('_getWeaponStatFromKill', () => {

        it('should return valid weapon stat given valid kill and id is killer_id', () => {
            const kill = {
                killer_id: 42,
                victim_id: 2,
                weapon_name: 'weapon3',
                hit_loc: 'head'
            };

            const expected = {
                label: 'weapon3',
                kills: 1,
                deaths: 0,
                hs: 1
            };

            const actual = sut._getWeaponStatFromKill(kill, 42);

            expect(actual).to.eql(expected);
        });

        it('should return valid weapon stat given valid kill and id is victim_id', () => {
            const kill = {
                killer_id: 42,
                victim_id: 2,
                weapon_name: 'weapon3',
                hit_loc: 'torso'
            };

            const expected = {
                label: 'weapon3',
                kills: 0,
                deaths: 1,
                hs: 0
            };

            const actual = sut._getWeaponStatFromKill(kill, 2);

            expect(actual).to.eql(expected);
        });

        it('should return valid weapon stat given valid kill and id is not contained id', () => {
            const kill = {
                killer_id: 42,
                victim_id: 2,
                weapon_name: 'weapon3',
                hit_loc: 'torso'
            };

            const expected = {
                label: 'weapon3',
                kills: 0,
                deaths: 0,
                hs: 0
            };

            const actual = sut._getWeaponStatFromKill(kill, 61);

            expect(actual).to.eql(expected);
        });
    });

    describe('_addKill', () => {

        it('should return the same weapon stats as the given valid weapon stats given empty kill and invalid id', () => {
            const kill = {
                killer_id: 42,
                victim_id: 2,
                weapon_name: 'weapon3',
                hit_loc: 'torso'
            };

            const actual = sut._addKill(KillMocks.weaponStats().weapons, kill, -1);

            expect(actual).to.eql(KillMocks.weaponStats().weapons);

        });

        it('should return the added weapon stats to the given valid weapon stats given valid kill where killer_id equals id', () => {
            const kill = {
                killer_id: 42,
                victim_id: 2,
                weapon_name: 'weapon3',
                hit_loc: 'head'
            };

            const expected = [{
                label: "weapon1",
                kills: 4,
                hs: 3,
                deaths: 2
            }, {
                label: "weapon2",
                kills: 3,
                hs: 2,
                deaths: 0
            }, {
                label: "weapon3",
                kills: 2,
                hs: 1,
                deaths: 0
            }];

            const actual = sut._addKill(KillMocks.weaponStats().weapons, kill, 42);

            expect(actual).to.eql(expected);

        });

        it('should return the added weapon stats to the given valid weapon stats given valid kill where victim_id equals id', () => {
            const kill = {
                killer_id: 42,
                victim_id: 2,
                weapon_name: 'weapon3',
                hit_loc: 'torso'
            };

            const expected = [{
                label: "weapon1",
                kills: 4,
                hs: 3,
                deaths: 2
            }, {
                label: "weapon2",
                kills: 3,
                hs: 2,
                deaths: 0
            }, {
                label: "weapon3",
                kills: 1,
                hs: 0,
                deaths: 1
            }];

            const actual = sut._addKill(KillMocks.weaponStats().weapons, kill, 2);

            expect(actual).to.eql(expected);

        });
    });

    describe('getOverallStats ', () => {

        it('should return empty object given empty array', () => {
          const actual = sut.getOverallStats([[], []], 1);

            expect(actual).to.be.an('object');
            expect(actual).to.eql({
                kills: 0,
                deaths: 0,
                hs: 0,
                connections: 0,
                score: 0,
                seconds: 0
            });
        });

        it('should return overall stats for given an array of sessions', () => {
            const actual = sut.getOverallStats([KillMocks.simpleKills().kills, SessionMocks.sessions()], 1);
            const expected = SessionMocks.overallStats();

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
