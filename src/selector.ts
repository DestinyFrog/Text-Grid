import { Actions } from "./behavior.js";

export class Selector {
    static element = document.getElementById("selector");
    // static list = ["❌","🐪","🌾","💧"];
    static list = [ "❌", ...Object.entries( Actions ).map( o => o[0] ) ];
    private static index = 0;
    private static current:string = this.list[0];

    static getCurrent() {
        return ( this.current == "❌" ) ? "" : this.current
    }

    static NextValue() {
        this.index++;
        if ( this.index >= this.list.length ) { this.index = 0; }
        this.current = this.list[this.index];
        this.element.textContent = this.current;
    }

    static PrevValue() {
        this.index--;
        if ( this.index < 0 ) { this.index = this.list.length-1; }
        this.current = this.list[this.index];
        this.element.textContent = this.current;
    }
}

Selector.element.textContent = "❌";

document.addEventListener( 'keydown', ({key}) => {
    if ( key == "ArrowUp" )   Selector.NextValue();
    if ( key == "ArrowDown" ) Selector.PrevValue();
} );

document.getElementById("selector")
.addEventListener( 'click', ()=>Selector.NextValue() )