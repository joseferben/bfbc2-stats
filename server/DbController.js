const mysql = require('mysql');

module.exports = class DbController {

    constructor() {
        this.conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'pass',
            database: 'b3_ea',
        });
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

    getAllPlayerNames() {
        return this._query(`SELECT name, id FROM clients UNION ALL SELECT alias, client_id FROM aliases`);
    }

    getAllAffectingKills(id) {
        return this._query(`SELECT * FROM kills WHERE killer_id = ${id} OR victim_id = ${id}`);
    }

    getAllSessions(id) {
        return this._query(`SELECT * FROM sessions WHERE player_id = ${id}`);
    }
};