import { leerTeclado } from '../entradaTeclado'

export const menuPral2 = async () => {
    let b: number
    console.log('1.- Calcular perimetro triangulo \n')
    console.log('2.- Calcular perimetro rectangulo \n')
    console.log('3.- Calcular perimetro circulo \n')
    console.log('4.- Calcular perimetro Rombo \n')
    console.log('0.- Salir \n')
    b = parseInt( await leerTeclado('Seleccione una opción') )
    return b
}