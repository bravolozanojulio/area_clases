// Calcular el área de un circulo

export class Circulo{
    private radio:number
    constructor(radio:number){
        this.radio= radio
    }
    getRadio(){
        return this.radio
    }
    Area(){
        let pi= 3.14159

// Procederemos a utilizar la funcion Match.pow para elevar el radio del circulo

        let calculo= Math.pow(this.radio,2) * pi

        if (calculo == 0){
            throw "El calculo no se ha realizado correctamente"
        }

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

    Perimetro(){
        let pi= 3.14159
        let calculo= 2*pi*this.radio

        if (isNaN(calculo) == true){
            throw "El calculo no se ha realizado correctamente"
        }

        let resultado= calculo.toString()
        let decimales=/\d*.\d{0,2}/

        return resultado.match(decimales)
    }

}

