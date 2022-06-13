function  obterPokemons ( )  {
    var  xhr  =  new  XMLHttpRequest ( ) ;
    var  nomePokemon  =  document . getElementById ( `nome` ) . valor ;
    xh . open ( 'GET' ,  `https://pokeapi.co/api/v2/pokemon/ ${ nomePokemon } ` ) ;
    xh . carregar  =  função  ( )  {
        documento . getElementById ( `resultado` ) . innerHTML = `<img src=" ${ JSON . parse ( xhr . response ) . sprites . front_default } ">`
    } ;
    xh . enviar ( ) ;
}