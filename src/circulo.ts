// Calcular el área de un circulo

class Circulo{
    private radio:number
    constructor(radio:number){
        this.radio= radio
    }
    getradio(){
        return this.radio
    }
    getarea(){
        let pi= 3.14159

// Procederemos a utilizar la funcion Match.pow para elevar el radio del circulo

        let calculo= Math.pow(this.radio,2) * pi



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

// A continuacion, crearemos el calculo del perimetro, para ello, utilizaremos los pasos anteriores.

    getperi(){
        let pi= 3.14159
        let calculo= 2*pi*this.radio

        let resultado= calculo.toString()
        let decimales=/\d*.\d{0,2}/

        return resultado.match(decimales)
    }

}

let cir1: Circulo
let cir2: Circulo

cir1= new Circulo(9)
cir2= new Circulo(16.24)

console.log(`\n El área del circulo 1 es ${cir1.getarea()}`)
console.log(`\n El área del circulo 2 es ${cir2.getarea()}`)

console.log(`\n El perimetro del circulo 1 es ${cir1.getperi()}`)
console.log(`\n El perimetro del circulo 2 es ${cir2.getperi()}`)


