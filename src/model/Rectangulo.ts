// Calcular el área de un rectángulo 

export class Rectangulo {
    private base: number
    private altura: number

    constructor(base:number,altura:number){
        this.base= base
        this.altura= altura
    }

    getBase(){
        return this.base
    }
    getAltura(){
        return this.altura
    }
    
    Area(){
        let calculo= this.altura * this.base

        if (isNaN(calculo) == true ){
            throw "El calculo no se ha realizado correctamente"
        }

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

    Perimetro(){
        let calculo= 2*this.base*this.altura

        if (isNaN(calculo) == true){
            throw "El calculo no se ha realizado correctamente"
        }

        let resultado= calculo.toString()
        let decimales = /\d*.\d{0,2}/

        return resultado.match(decimales)
    }
}





