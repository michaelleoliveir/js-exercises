// selecionar os elementos que contém o relógio
const elementos = {
    horas: document.querySelectorAll(".timer-num .zero")[0],
    minutos: document.querySelectorAll(".timer-num .zero")[1],
    segundos: document.querySelectorAll(".timer-num .zero")[2],
};

const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");
const botaoReinic = document.getElementById("reiniciar");

let intervalo;
let segundosTotais = 0;

// função que atualiza o timer
function updateTimer() {
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segs = segundosTotais % 60;

    elementos.horas.textContent = String(horas).padStart(2, '0');
    elementos.minutos.textContent = String(minutos).padStart(2, '0');
    elementos.segundos.textContent = String(segs).padStart(2, '0')
}

function startTimer() {
    intervalo = setInterval(() => {
        segundosTotais++;
        updateTimer();
    }, 1000) //incrementa a cada 1 segundo
}

function stopTimer() {
    clearInterval(intervalo)
}

function restartTimer() {
    clearInterval(intervalo);
    segundosTotais = 0;
    updateTimer();
}

botaoIniciar.addEventListener('click', startTimer);
botaoPausar.addEventListener('click', stopTimer);
botaoReinic.addEventListener('click', restartTimer);

updateTimer();