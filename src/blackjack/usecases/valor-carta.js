/**
 * Se le asigna un valor a nuestra carta
 * @param {String} carta Recibe string
 * @returns {Number} retorna valor dependiendo la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A') ? 11 : 10 : valor * 1;
}