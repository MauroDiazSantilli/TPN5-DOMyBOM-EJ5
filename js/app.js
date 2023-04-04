
let hora = 0;
let minuto = 0;
let segundo = 0;

let crono;

const btnComenzar = document.getElementById('btnComenzar');
const btnPausar = document.getElementById('btnPausar');
const btnReiniciar = document.getElementById('btnReiniciar');

btnComenzar.addEventListener('click', empezar);
btnPausar.addEventListener('click', pausar);
btnReiniciar.addEventListener('click', reiniciar);

function empezar() {
  pausar();
  crono = setInterval(() => {
    timer();
  }, 10);
}

function pausar() {
  clearInterval(crono);
}

function reiniciar() {
  hora = 0;
  minuto = 0;
  segundo = 0;

  document.getElementById('horas').innerText = '00';
  document.getElementById('minutos').innerText = '00';
  document.getElementById('segundos').innerText = '00';
}

function timer() {
  segundo++;
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }

  if (minuto == 60) {
    minuto = 0;
    hora++;
  }

  document.getElementById('horas').innerText = devolver(hora);
  document.getElementById('minutos').innerText = devolver(minuto);
  document.getElementById('segundos').innerText = devolver(segundo);
}

function devolver(datos) {
  return datos >= 10 ? datos.toString() : '0' + datos.toString();
}
