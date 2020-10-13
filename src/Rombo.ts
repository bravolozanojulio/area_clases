// Calcular el area de un Rombo


class Rombo {
    private diagonalg:number
    private diagonalp:number

    constructor(diagonalg:number,diagonalp:number){
        this.diagonalg = diagonalg
        this.diagonalp = diagonalp
    }
    getdiagonalg(){
        return this.diagonalg
    }
    getdiagonalp(){
        return this.diagonalp
    }
    getarea(){
       let calculo= this.diagonalg * this.diagonalp / 2

// A continuación, vamos a convertir el resultado a string con la funcion tostring(), para posteriormente,
// utilizando la funcion match mostremos los caracteres que nos interesan, y mostraremos los decimales deseados.


// ATENCION: Al convertir el numero en string, no podremos seguir realizando calculos, en caso de querer realizar
// calculos, deberemos convertir el string a numero.


// La función match compara nuestra cadena con una expresion regular para seleccionar los que deseeamos, en este caso,
// queremos seleccionar todos los digitos antes del punto (delimitador), solo 2 digitos después del punto (delimitador).


       let resultado= calculo.toString()
       let decimales=/\d*.\d{0,2}/

       return resultado.match(decimales)
    } 
}

let rom1:Rombo
let rom2:Rombo

rom1= new Rombo (6.57,3.50)
rom2= new Rombo (7.80,4.20)

console.log(`El área del rombo 1 es ${rom1.getarea()}`)

console.log(`El área del rombo 2 es ${rom2.getarea()}`)



