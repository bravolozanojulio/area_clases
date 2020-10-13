// Calcular el area de un Triangulo


class Triangulo {
    private base:number
    private altura:number

    constructor(base:number,altura:number){
        this.base= base
        this.altura= altura
    }
    getbase(){
        return this.base
    }
    getaltura(){
        return this.altura
    }
    getarea(){
       let calculo= this.base * this.altura / 2

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

let tr1:Triangulo
let tr2:Triangulo

tr1= new Triangulo (8,3)
tr2= new Triangulo (15,6)

console.log(`El área del triangulo 1 es ${tr1.getarea()}`)

console.log(`El área del triangulo 2 es ${tr2.getarea()}`)



