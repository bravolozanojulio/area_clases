import { leerTeclado } from '../entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Calcular perimetro \n')
    console.log('2.- Calcular area \n')
    console.log('0.- Salir \n')
    n = parseInt( await leerTeclado('Seleccione una opcion de nuestro programa') )
    return n
}