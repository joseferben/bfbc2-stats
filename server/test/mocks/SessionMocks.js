module.exports = class SessionsMocks {
    static sessions() {
        return [{
            player_id: 1,
            length: 1,
            score: 1,
            date_time: '2017-01-16 18:02:19'
        }, {
            player_id: 1,
            length: 5,
            score: 0,
            date_time: '2017-01-17 18:31:37'
        }, {
            player_id: 1,
            length: 10,
            score: 20,
            date_time: '2017-01-19 10:37:44'
        }, {
            player_id: 1,
            length: 2,
            score: 5,
            date_time: '2017-01-19 14:42:34'
        }, {
            player_id: 1,
            length: 0,
            score: 0,
            date_time: '2017-01-25 21:11:53'
        }];
    }

    static overallStats() {
        return {
            kills: 8,
            deaths: 2,
            hs: 5,
            seconds: 18,
            score: 26,
            connections: 5,
        };
    }
}
