module.exports = class Stats {

    static getWeaponStats(kills, id) {
        var weapons = kills.reduce(function(a, b) {
            if (!_hasWeaponLabel(b.weapon_name, a)) {
               return a.concat(_getWeaponStatFromKill(b, id)); 
            } else {
                return _addKill(a, b);
            }
        }, [])
    }

    static _hasWeaponLabel(label, weapons) {
        return false;
    }

    static _getWeaponStatFromKill(kill, id) {

    }

    static _addKill(weapons, kill) {

    }

    static getOverallStats(arr) {
        return {};
        // TODO(implement)

    }

    static _getConnections(sessions) {
        return sessions.length;
    }

    static _getTimePlayed(sessions) {
        return sessions.reduce(function(a, b) {
            return a + b.length;
        }, 0);
    }

    static _getTotalScore(sessions) {
        return sessions.reduce(function(a, b) {
            return a + b.score;
        }, 0);
    }
}
