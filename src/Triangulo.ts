// Calcular el area de un Triangulo


class Triangulo {
    private base:number
    private lado2:number
    private lado3:number
    private altura:number

    constructor(base:number,lado2:number,lado3:number,altura:number){
        this.base= base
        this.lado2= lado2
        this.lado3= lado3
        this.altura= altura
    }
    getbase(){
        return this.base
    }
    getlado2(){
        return this.lado2
    }
    getlado3(){
        return this.lado3
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
    getperi(){
        let calculo= this.base+this.lado2+this.lado3
        let resultado= calculo.toString()

        let decimales=/\d*.\d{0,2}/
        return resultado.match(decimales)
    }
}

let tr1:Triangulo
let tr2:Triangulo

tr1= new Triangulo (8,2,4,3)
tr2= new Triangulo (15,5,6,9)

console.log(`\n El área del triangulo 1 es ${tr1.getarea()}`)
console.log(`\n El área del triangulo 2 es ${tr2.getarea()}`)

console.log(`\n El perimetro del triangulo 1 es ${tr1.getperi()}`)
console.log(`\n El perimetro del triangulo 2 es ${tr2.getperi()}`)



