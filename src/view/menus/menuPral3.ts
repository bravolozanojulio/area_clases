import { leerTeclado } from '../entradaTeclado'

export const menuPral3 = async () => {
    let b: number
    console.log('1.- Calcular area triangulo \n')
    console.log('2.- Calcular area rectangulo \n')
    console.log('3.- Calcular area circulo \n')
    console.log('4.- Calcular area rombo \n')
    console.log('0.- Salir \n')
    b = parseInt( await leerTeclado('Seleccione una opción') )
    return b
}