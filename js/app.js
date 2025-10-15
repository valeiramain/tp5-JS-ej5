function iniciar(e) {
    e.preventDefault();

//eventos

    const h = parseInt(inputHoras.value) || 0;
    const m = parseInt(inputMinutos.value) || 0;
    const s = parseInt(inputSegundos.value) || 0;
    tiempoTotalSeg = h * 3600 + m * 60 + s; // calcula la cantidad de veces que correra el temporizador

    if (tiempoTotalSeg >= 0) {
        clearInterval(intervalo)
        intervalo = setInterval(temporizador, 1000); // ejecuta temporizador() cada segundo
        console.log(intervalo)
    }
}

function temporizador() {
    if (tiempoTotalSeg < 0) {
        clearInterval(intervalo);     // Detiene el setInterval
        console.log('¡Tiempo terminado!');
        formulario.reset()
        return;
    }

    // arma como va mostrando el reloj en pantalla con cada segundo
    const horas = Math.floor(tiempoTotalSeg / 3600);
    const minutos = Math.floor((tiempoTotalSeg % 3600) / 60);
    const segundos = tiempoTotalSeg % 60;
    contador.textContent = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    tiempoTotalSeg--
}

function pausar() {
    clearInterval(intervalo);
}

function reIniciar() {
    // si el tiempo es mayor a 0, vuelve a correr
    if (tiempoTotalSeg > 0) {
        clearInterval(intervalo);
        intervalo = setInterval(temporizador, 1000);
    }
}


// *********  DOM *************
// variables
const formulario = document.querySelector('form')
const inputHoras = document.querySelector('#inputHoras')
const inputMinutos = document.querySelector('#inputMinutos')
const inputSegundos = document.querySelector('#inputSegundos')
const contador = document.querySelector('h2');
const btnIniciar = document.querySelector('.colorBtnIniciar');
const btnPausar = document.querySelector('.colorBtnPausar');
const btnReiniciar = document.querySelector('.colorBtnReIniciar');

let tiempoTotalSeg = 0
let intervalo = 0 //ID para detener el setInterval con clearInterval
contador.textContent = '00:00:00'

// btnPausar.classList.add('disabled')
// btnReiniciar.classList.add('disabled')

//eventos
formulario.addEventListener('submit',iniciar)

btnPausar.addEventListener('click', pausar)
btnReiniciar.addEventListener('click', reIniciar)

