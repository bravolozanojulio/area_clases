// Calcular el area de un Rombo


class Rombo {
    private lado1: number
    private lado2: number
    private lado3: number
    private lado4: number
    private diagonalg:number
    private diagonalp:number

    constructor(lado1:number,lado2:number,lado3:number,lado4:number,diagonalg:number,diagonalp:number){
        this.lado1= lado1
        this.lado2= lado2
        this.lado3= lado3
        this.lado4= lado4
        this.diagonalg = diagonalg
        this.diagonalp = diagonalp
    }
    getlado1(){
        return this.lado1
    }
    getlado2(){
        return this.lado2
    }
    getlado3(){
        return this.lado3
    }
    getlado4(){
        return this.lado4
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

    getperi(){
        let calculo= this.lado1+this.lado2+this.lado3+this.lado4
        
        let resultado= calculo.toString()
        let decimales=/\d*.\d{0,2}/
 
        return resultado.match(decimales)
    }
}

let rom1:Rombo
let rom2:Rombo

rom1= new Rombo (2,5,6,1,6,3)
rom2= new Rombo (3.5,6,7,8,7.80,4.20)

console.log(`\n El área del rombo 1 es ${rom1.getarea()}`)
console.log(`\n El área del rombo 2 es ${rom2.getarea()}`)

console.log(`\n El perimetro del rombo 1 es ${rom1.getperi()}`)
console.log(`\n El perimetro del rombo 2 es ${rom2.getperi()}`)




