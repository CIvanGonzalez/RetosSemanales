/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */


function tranformarTexto(texto){

    const leet={
        'a': '4',
        'b': '8',
        'c': '<',
        'e': '3',
        'g': '9',
        'h': '#',
        'i': '1',
        'l': '|',
        'o': '0',
        's': '$',
        't': '7',
        'z': '2'
    };

    let leetTexto = '';

    /*se convierte cada caracter del texto a minuscula y se busca si tiene su correspondiente en la tabla leet ,
      si existe se reemplaza, si no se mantiene el mismo caracter*/
    for (let char of texto.toLowerCase()){
        leetTexto += leet[char] || char;
    }

    return leetTexto;
}

const textoOriginal = ("Hola me llamo Cristian y soy programador");
const textoLeet = tranformarTexto(textoOriginal);
console.log(textoLeet);
