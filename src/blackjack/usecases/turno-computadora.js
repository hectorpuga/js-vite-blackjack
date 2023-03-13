import { acumularPuntos } from "./acumula-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos,deck,puntosJugadores,puntosHTML,divCartasJugadores) => {

    if(!puntosMinimos)throw new Error('Puntos minimos son necesarios');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1,puntosJugadores,puntosHTML);

        crearCarta(carta, puntosJugadores.length - 1,divCartasJugadores);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}