/**
 * Pide una carta de nuestro deck
 * @param {Array<String>} deck Ejemplo: ['C', 'D', 'H', 'S']
 * @returns {String} Retorna un string 
 */
export const pedirCarta = (deck) => {
console.log("deck2",deck);
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}