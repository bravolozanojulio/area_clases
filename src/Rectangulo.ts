// Calcular el área de un rectángulo 

class Rectangulo {
    private base: number
    private altura: number

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
        let calculo= this.altura * this.base

// A continuación, vamos a convertir el resultado a string con la funcion tostring(), para posteriormente,
// utilizando la funcion match mostremos los caracteres que nos interesan, y mostraremos los decimales deseados.


// ATENCION: Al convertir el numero en string, no podremos seguir realizando calculos, en caso de querer realizar
// calculos, deberemos convertir el string a numero.


// La función match compara nuestra cadena con una expresion regular para seleccionar los que deseeamos, en este caso,
// queremos seleccionar todos los digitos antes del punto (delimitador), solo 2 digitos después del punto (delimitador).

        let resultado= calculo.toString()
        let decimales = /\d*.\d{0,2}/
        
        return resultado.match(decimales)

    }

    getperi(){
        let calculo= 2*this.base*this.altura

        let resultado= calculo.toString()
        let decimales = /\d*.\d{0,2}/

        return resultado.match(decimales)
    }
}

let r1: Rectangulo
let r2: Rectangulo


r1= new Rectangulo(6,5)
r2= new Rectangulo(10,2)

console.log(`\n El área del rectangulo 1 es ${r1.getarea()}`)
console.log(`\n El área del rectangulo 2 es ${r2.getarea()}`)

console.log(`\n El perimetro del rectangulo 1 es ${r1.getperi()}`)
console.log(`\n El perimetro del rectangulo 2 es ${r2.getperi()}`)




