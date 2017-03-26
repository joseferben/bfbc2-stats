const mysql = require('mysql');
const credentials = require('./DbCredentials.js');
const UPDATE_INTERVAL = 10000;

class DbController {

    constructor() {
        this.conn = mysql.createConnection(credentials);
        this.players = -1;
    }

    connect() {
        this.conn.connect();
        return this;
    }

    disconnect() {
        this.conn.end();
        return this;
    }

    _query(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, res, fields) => {
                if (err) reject(`Could not run query ${sql}, `, err);
                resolve(res);
            });
        });

    }

    getKills() {
        return this._query(`SELECT COUNT(*) AS kills from kills`);
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
        return this._query(`SELECT name, id FROM clients`);
    }

    getAllAffectingKills(id) {
        return this._query(`SELECT * FROM kills WHERE killer_id = ${id} OR victim_id = ${id}`);
    }

    getAllSessions(id) {
        return this._query(`SELECT * FROM sessions WHERE player_id = ${id}`);
    }

    getName(id) {
        return this._query(`SELECT name FROM clients WHERE id = ${id}`);
    }
};

const controller = new DbController().connect();
module.exports = controller;
