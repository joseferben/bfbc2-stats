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
        if (err) throw err;
        resolve(res);
      });
    });

  }

    getKills() {
      return this._query('SELECT COUNT(*) AS kills from kills');
    }

    getAllPlayerNames() {
      return this._query('SELECT name, id FROM clients UNION ALL SELECT alias, client_id FROM aliases');
    }
};
