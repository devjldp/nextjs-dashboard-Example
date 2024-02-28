// Importando la fuente:
import { Lusitana, Montserrat, Indie_Flower  } from 'next/font/google'


/* Exportando la fuente:
    Quiero exportar la constante montserrat y le voy a pasar parametros:
        -subsets: que caracteres y simbolos vamos a cargar
        - weight: si quiero anadir algun weight a la fuente
*/

export const montserrat = Montserrat({subsets: ['latin']})

export const lusitana = Lusitana({
    weight: ['400','700'], 
    subsets: ['latin']
})

export const indie = Indie_Flower({
    weight: ['400'],
    subsets: ['latin']
})


