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

    getKills() {
        return new Promise((resolve, reject) => {
            this.conn.query('SELECT COUNT(*) AS kills from kills', (err, res, fields) => {
                if (err) throw err;
                resolve(res);
            });
        });
    }
};
