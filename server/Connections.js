const mysql = require('mysql');

const credentials = require('./DbCredentials.js');
const Stats = require('./Stats.js');

module.exports = class Connections {

    constructor() {
        this.connections = credentials.map(cur => mysql.createConnection(cur));
    }

    connectAll() {
        try {
            this.connections.forEach(cur => cur.connect());
        } catch (e) {
            console.log(`Can not connect to DB: ${e}`);
        }
    }

    disconnectAll() {
        try {
            this.connections.forEach(cur => cur.end());
        } catch (e) {
            console.log(`Disconnecting failed: ${e}`);
        }
    }

    getConnections() {
        return this.connections;
    }

    getConnection(playerId) {
        return this.connections[Stats._stripServerId(playerId)];
    }
};
