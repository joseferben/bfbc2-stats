const expect = require('expect.js');
const Connections = require('../Connections.js');

describe('ConnectionTests', () => {

    it('should return 42 given whatever42-42', () => {
        expect(Connections._stripServerId('whatever42-42')).to.be('42');
    });

    it('should return whatever42 given whatever42-42', () => {
        expect(Connections._stripPlayerId('whatever42-42')).to.be('whatever42');
    });


});
