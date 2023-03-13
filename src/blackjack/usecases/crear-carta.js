 
     export const crearCarta = (carta, turno,divCartasJugadores) => {

        console.log(turno
        );
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    }