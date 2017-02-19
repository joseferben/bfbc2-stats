module.exports = class Mocks {
    static simpleKills() {
        return {
            kills: [{
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon1",
                    hit_loc: "torso"
                }, {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon1",
                    hit_loc: "head"
                },

                {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon1",
                    hit_loc: "head"
                },

                {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon1",
                    hit_loc: "head"
                },

                {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon2",
                    hit_loc: "torso"
                },

                {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon2",
                    hit_loc: "head"
                },

                {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon2",
                    hit_loc: "head"
                },

                {
                    killer_id: 1,
                    victim_id: 2,
                    weapon_name: "weapon3",
                    hit_loc: "torso"
                },

                {
                    killer_id: 42,
                    victim_id: 1,
                    weapon_name: "weapon1",
                    hit_loc: "torso"
                },

                {
                    killer_id: 3,
                    victim_id: 1,
                    weapon_name: "weapon1",
                    hit_loc: "head"
                },

                {
                    killer_id: 42,
                    victim_id: 2,
                    weapon_name: "weapon3",
                    hit_loc: "head"
                }
            ]
        };
    }

    static weaponStats() {
        return {
            weapons: [{
                label: "weapon1",
                kills: 4,
                hs: 3,
                deaths: 2
            }, {
                label: "weapon2",
                kills: 3,
                hs: 2,
                deaths: 0
            }, {
                label: "weapon3",
                kills: 1,
                hs: 0,
                deaths: 1
            }],
        };
    }

}
