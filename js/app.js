function iniciar(e) {
    e.preventDefault();

    const h = parseInt(inputHoras.value) || 0;
    const m = parseInt(inputMinutos.value) || 0;
    const s = parseInt(inputSegundos.value) || 0;
    tiempoTotalSeg = h * 3600 + m * 60 + s;
    
    if (tiempoTotalSeg >= 0) {
        clearInterval(intervalo)
        intervalo = setInterval(temporizador, 1000); // Actualizar cada segundo
    }
}

function temporizador() {
    if (tiempoTotalSeg < 0) {
        clearInterval(intervalo);     // Detiene el contador
        console.log('¡Tiempo terminado!');
        return;
    }

    const horas = Math.floor(tiempoTotalSeg / 3600);
    const minutos = Math.floor((tiempoTotalSeg % 3600) / 60);
    const segundos = tiempoTotalSeg % 60;
    contador.textContent =
        `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    tiempoTotalSeg--
}




// *********  DOM *************
// variables
const formulario = document.querySelector('form')
const inputHoras = document.querySelector('#inputHoras')
const inputMinutos = document.querySelector('#inputMinutos')
const inputSegundos = document.querySelector('#inputSegundos')
const contador = document.querySelector('h2');
const btnIniciar = document.querySelector('.btn-warning');
// const btnPausar = document.querySelector('btnPausar');
const btnReiniciar = document.querySelector('.btn-secondary');

let tiempoTotalSeg = 0
let intervalo = 0
//eventos
formulario.addEventListener('submit', iniciar)

