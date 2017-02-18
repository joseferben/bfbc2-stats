const expect = require('expect.js');

const Stats = require('../Stats.js');
const FakeKillsSimple = require('./fake-kills-simple.json');
const FakeKillsSimpleExpected = require('./fake-kills-simple-expected.json');

describe('StatsTest', () => {

    it('should return empty array given empty array', () => {
      const sut = Stats;

      expect([]).to.be.an('array');
    });
});
