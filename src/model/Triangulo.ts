// Calcular el area de un Triangulo


export class Triangulo {
    private base:number
    private lado2:number
    private lado3:number
    private "altura":number

    constructor(base:number,lado2:number,lado3:number){
        this.base= base
        this.lado2= lado2
        this.lado3= lado3
       // Comento la siguiente linea para que no sea obligatorio introducir una altura
       //this.altura= altura
    }
    getBase(){
        return this.base
    }
    getLado2(){
        return this.lado2
    }
    getLado3(){
        return this.lado3
    }
    getAltura(){
        return this.altura
    }
    set Altura (altura:number){

        // Vamos a realizar un control de errores, en el que si la altura es menor o igual a 0, 
        // o no es un numero nos devolvera un mensaje de error e interrumpira la ejecucion


        // En caso de que la altura sea mayor a 0, el programa definira la altura

        if (altura <= 0 || isNaN(altura)){
            throw "Altura incorrecta, debe ser mayor o igual que 0"
        }
        this.altura = altura
    }


    Area(){
       let calculo= this.base * this.altura / 2
       if (isNaN(calculo) == true) {
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

    Perimetro(){

        let calculo= this.base+this.lado2+this.lado3

        if (isNaN(calculo) == true) {
            throw "El calculo no se ha realizado correctamente"
           }
        let resultado= calculo.toString()
        let decimales=/\d*.\d{0,2}/
        return resultado.match(decimales)
    }
}



