import { Actions } from "./behavior.js";
import { Selector } from "./selector.js";

export class Celula {
    celula: HTMLDivElement;

    constructor( public id:string, public value = "" ){
        this.celula = document.createElement( 'div' );
        this.celula.className = "cell";

        this.celula.addEventListener( 'click', (_ev) => {
            this.setValue();
        } );

        document.getElementById( "content" ).appendChild( this.celula );
    };

    setValue( newValue:string = Selector.getCurrent() ) {
        this.value = newValue;
    }

    update():void {
        this.celula.textContent = this.value;
        if ( Actions[this.value] ) Actions[this.value]( this.id );
    }
}
