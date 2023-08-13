
export function IDtoString ( id:string ):[string,number] {
    var [ letter, ...number ] = id.split('');
    return [ letter, parseInt( number.join('') ) ];
}

// Função que converte Vetor( x,y ) em ID( a1 )
export function parseID ( row:number, col:number ):string {
    return `${String.fromCharCode(96+row)}${col.toString()}`
}
