import { GameMap } from '/static/js/game_map/base.js';
import { Player } from '/static/js/player/base.js';

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);
        this.players = [
            new Player(this, {
                id: 0,
                x: 0,
                y: 0,
                width: 150,
                height: 200,
                color: 'blue',
            }),
            new Player(this, {
                id: 1,
                x: 500,
                y: 0,
                width: 150,
                height: 200,
                color: 'red',
            }),
        ];
    }
}

export {
    KOF
}