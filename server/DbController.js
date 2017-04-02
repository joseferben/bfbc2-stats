const mysql = require('mysql');

const credentials = require('./DbCredentials.js');
const Connections = require('./Connections.js');

const UPDATE_INTERVAL = 600000;

class DbController {

    constructor() {
        this.connections = new Connections();
        this.players = -1;
    }

    connect() {
        this.connections.connectAll();
        return this;
    }

    disconnect() {
        this.connections.disconnectAll();
        return this;
    }

    _query(conn, sql) {
        return new Promise((resolve, reject) => {
            conn.query(sql, (err, res, fields) => {
                if (err) reject(`Could not run query ${sql}, `, err);
                resolve(res);
            });
        });
    }

    _queryAll(sql) {
        return this.connections.getConnections().map(cur => this._query(cur, sql));
    }

    getKills() {
        return this._queryAll(`SELECT COUNT(*) AS kills from kills`);
    }

    getPlayerAmount() {
        return this._queryAll(`SELECT COUNT(*) AS players from clients`);
    }

    getHeadshotAmount() {
        return this._queryAll(`SELECT COUNT(*) AS kills from kills WHERE hit_loc = 'head'`);
    }


    getMatchingPlayerNames(name) {
        // Make sure register job on event loop only once
        if (this.players === -1) {
            this._updatePlayerNames();
            setInterval(() => this._updatePlayerNames(), UPDATE_INTERVAL);
        }
        return this.players;
    }

    _updatePlayerNames() {
        this.players = this._queryAllPlayerNames();
    }

    _queryAllPlayerNames() {
        return this._queryAll(`SELECT name, id FROM clients`);
    }

    getAllAffectingKills(id) {
        return this._query(this.connections.getConnection(id), `SELECT * FROM kills WHERE killer_id = ${mysql.escape(id)} OR victim_id = ${id}`);
    }

    getAllSessions(id) {
        return this._query(this.connections.getConnection(id), `SELECT * FROM sessions WHERE player_id = ${mysql.escape(id)}`);
    }

    getName(id) {
        return this._query(this.connections.getConnection(id), `SELECT name FROM clients WHERE id = ${mysql.escape(id)}`);
    }
};

const controller = new DbController().connect();
module.exports = controller;
