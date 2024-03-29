import { GameMap } from '/static/js/game_map/base.js';
import { Player } from '/static/js/player/base.js';
import { Kyo } from '/static/js/player/kyo.js';

class KOF {
    constructor(id) {
        this.$kof = $('#'+id);  // 通过id筛选标签
        this.game_map = new GameMap(this);
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue'
            }),

            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),

            
        ];
    }
}

export {
    KOF
}