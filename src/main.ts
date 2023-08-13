import { Celula } from "./cell.js";
import { Selector } from "./selector.js";
import { parseID } from "./util.js";

const DELAY = 60;
export const Celulas = [];
const Rows = 13;

const start = () => {
    document.getElementById('content').style.gridTemplateColumns = `repeat(${Rows},1fr)`;

    for ( let c = 0; c < Rows; c++ ) {
        for ( let r = 0; r < Rows; r++ ) {
            Celulas.push( new Celula( parseID( c, r ) ) )
        }
    }
}

const update = () => Celulas.forEach( obj => obj.update() );

async function main() {
    update()
    setTimeout( () => requestAnimationFrame( main ), DELAY );
} start(); main();