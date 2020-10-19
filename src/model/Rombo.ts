// Calcular el area de un Rombo


export class Rombo {
    private lado1: number
    private lado2: number
    private lado3: number
    private lado4: number
    private "diagonalg":number
    private "diagonalp":number

    constructor(lado1:number,lado2:number,lado3:number,lado4:number){
        this.lado1= lado1
        this.lado2= lado2
        this.lado3= lado3
        this.lado4= lado4
        // this.diagonalg = diagonalg
        // this.diagonalp = diagonalp
    }
    getLado1(){
        return this.lado1
    }
    getLado2(){
        return this.lado2
    }
    getLado3(){
        return this.lado3
    }
    getLado4(){
        return this.lado4
    }
    getDiagonalg(){
        return this.diagonalg
    }
    getDiagonalp(){
        return this.diagonalp
    }
    set Diagonalg (diagonalg:number){
        if (diagonalg <= 0 || isNaN(diagonalg) == true ){
            throw "Diagonal mayor incorrecta, debe ser mayor o igual que 0"
        }
        this.diagonalg = diagonalg
    }
    set Diagonalp (diagonalp:number){
        if (diagonalp <= 0 || isNaN(diagonalp) == true ){
            throw "Diagonal menor incorrecta, debe ser mayor o igual que 0"
        }
        this.diagonalp = diagonalp
    }
    Area(){
       let calculo= this.diagonalg * this.diagonalp / 2
       if (isNaN(calculo) == true){
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

        let calculo= this.lado1+this.lado2+this.lado3+this.lado4

        if (isNaN(calculo) == true){
            throw "El calculo no se ha realizado correctamente"
        }

        let resultado= calculo.toString()
        let decimales=/\d*.\d{0,2}/
 
        return resultado.match(decimales)
    }
}




