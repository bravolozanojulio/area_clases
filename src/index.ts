// Importaremos los menus creados 

import { menuPral } from './view/menus/menuPral'
import { menuPral2 } from './view/menus/menuPral2'
import { menuPral3 } from './view/menus/menuPral3'



// Importaremos las clases de nuestras figuras geometricas para poder utilizarlas

import {Triangulo} from './model/Triangulo'
import {Rectangulo} from './model/Rectangulo'
import {Rombo} from './model/Rombo'
import {Circulo} from './model/Circulo'


// Importaremos la funcion leer tecaldo para obtener los datos de nuestras figuras geometricas

import {leerTeclado} from './view/entradaTeclado'




// A continuacion, procederemos a desarrollar la funcion principal de nuestra aplicacion

// Utilizaremos el menu principal, y utilizando el "Case" para programar que debe hacer cada opción

const main = async () => {
    let n: number
    let b: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Usted ha seleccionado la opción calcular perimetro: \n")
                b = await menuPral2()
                switch(b){
                            case 1:

                                // Imprimimos un mensaje informativo

                                console.log("\n Usted va a calcular el perimetro de un triangulo")

                                // Definimos las variables, y le asignamos el tipo que corresponda

                                let base:number,lado2:number,lado3:number,altura:number
                                let tr: Triangulo


                                // Solicitamos que nos ingrese los datos por teclado

                                base=  parseInt( await leerTeclado('Introduzca la base'))
                                lado2= parseInt( await leerTeclado('Introduzca un lado'))
                                lado3= parseInt( await leerTeclado('Introduzca el otro lado'))

                                // Solicitamos la creación de un nuevo triangulo en la variable declarada anterioremente

                                tr= new Triangulo(base,lado2,lado3)

                                // Imprimimos el resultado del perimetro con el metodo programado en el triangulo

                                console.log(`El perimetro del triangulo es ${tr.Perimetro()} cm`)
                                break

                            case 2:
                                console.log("\n Usted va a calcular el perimetro de un rectangulo")

                                let baserec:number,alturarec:number 
                                let rec: Rectangulo

                                baserec= parseInt  (await leerTeclado('Introduzca la altura'))
                                alturarec= parseInt (await leerTeclado('Introduzca la base'))
                             
                                rec= new Rectangulo(baserec,alturarec)
                                console.log(`El perimetro del rectangulo es ${rec.Perimetro()} cm`)

                                break

                            case 3:
                                console.log("\n Usted va a calcular el perimetro de un circulo")

                                let radio:number
                                let circ: Circulo

                                radio= parseInt (await leerTeclado('Introduzca el radio'))

                                circ= new Circulo(radio)
                                console.log(`El perimetro del circulo es ${circ.Perimetro()} cm`)
                                break
                                
                            case 4:
                                console.log("\n Usted va a calcular el perimetro de un Rombo")

                                let lado1rom:number,lado2rom:number,lado3rom:number,lado4rom:number
                                let rom: Rombo

                                lado1rom= parseInt (await leerTeclado('Introduzca el primer lado'))
                                lado2rom= parseInt (await leerTeclado('Introduzca el segundo lado'))
                                lado3rom= parseInt (await leerTeclado('Introduzca el tercer lado'))
                                lado4rom= parseInt (await leerTeclado('Introduzca el cuarto lado'))

                                rom= new Rombo(lado1rom,lado2rom,lado3rom,lado4rom)
                                console.log(`El perimetro del circulo es ${rom.Perimetro()} cm`)
                                break
                                
                }
                break
              case 2:
                    console.log("Usted ha seleccionado la opción calcular area \n ")
                    b = await menuPral3()
                    switch(b){
                             case 1:

                                 console.log("\n Usted va a calcular el area de un triangulo")

                                 // En nuestro caso asignaremos el valor 0 por que hemos realizado las operaciones
                                 // de calculo separadas en perimetro y area

                                 let base:number,altura:number,lado1=0,lado2=0
                                 let tr: Triangulo

                                 base= parseInt( await leerTeclado('Introduzca la base'))
                                 altura= parseInt( await leerTeclado('Introduzca la altura'))

                                 tr= new Triangulo(base,lado1,lado2)

                                 
                                 // Al declarar en la clase que la altura es opcional (calculo perimetro), 
                                 // la asignamos com el metodo set declarado en la case

                                 //Invocamos al método altura si salta la excepción nos vamos a la parte del catch.
                                 // En este caso comunicamos el errore inicializamos el triángulo 
                                 
                                 try {
                                    tr.Altura = altura
                                }catch(error){
                                    console.log(error)
                                    altura= parseInt( await leerTeclado('Introduzca la altura'))
                                }
                                 
                                 console.log(`El perimetro del circulo es ${tr.Area()} cm2`)

                                 break
                            case 2:
                                 console.log("\n Usted va a calcular el area de un rectangulo")

                                 let baserec:number,alturarec:number
                                 let rec: Rectangulo
                                
                             
                                 baserec= parseInt( await leerTeclado('Introduzca la base'))
                                 alturarec= parseInt( await leerTeclado('Introduzca la altura'))
                              

                                 rec= new Rectangulo(baserec,alturarec)

                                 console.log(`El area del rectangulo es ${rec.Area()} cm2`)
                                 break

                            case 3:
                                  console.log("\n Usted va a calcular el area de un circulo")

                                  let radio:number
                                  let circ: Circulo
                                
                                  radio= parseInt( await leerTeclado('Introduzca el radio'))

                                  circ= new Circulo(radio)
                                  console.log(`El area del rectangulo es ${circ.Area()} cm2`)
                                  
                                 break
                            case 4:
                                console.log("\n Usted va a calcular el area de un rombo")

                                let diagonalg:number,diagonalp:number,lado1rom=0,lado2rom=0,lado3rom=0,lado4rom=0
                                let rom: Rombo

                                diagonalg= parseInt(await leerTeclado('Introduzca la diagonal mayor'))
                                diagonalp= parseInt(await leerTeclado('Introduzca la diagonal menor'))

                                rom=new Rombo(lado1rom,lado2rom,lado3rom,lado4rom)

                                 // Al declarar en la clase que la diagonal mayor y menor son opcionales opcional (calculo perimetro),
                                 // la asignamos com el metodo set declarado en la clase
                                
                                try{
                                rom.Diagonalg = diagonalg
                                }catch(error){
                                console.log(error)
                                diagonalg= parseInt(await leerTeclado('Introduzca la diagonal mayor'))
                                }
                                
                                try{
                                rom.Diagonalp = diagonalp
                                }catch(error){
                                    console.log(error)
                                    diagonalp= parseInt(await leerTeclado('Introduzca la diagonal menor'))
                                }

                                console.log(`El area del rombo es ${rom.Area()} cm2`)

                    }
                    break
            case 0:
                console.log('\n Gracias por utilizar nuestro programa ')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}


// Ejecutamos la funcion

main()



