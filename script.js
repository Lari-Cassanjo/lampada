const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lampada = document.getElementById("lampada");

function estaQuebrada() {
    return lampada.src.indexOf("quebrada") > -1;
}

function acender() {
    if (!estaQuebrada()) {
        lampada.src = "./img/acesa.png";
    }
}
function apagar() {
    if (!estaQuebrada()) {
        lampada.src = "./img/desligada.png";
    }
}
function quebrar() {
    lampada.src = "./img/quebrada.png";
}

ligar.addEventListener("click", acender);
desligar.addEventListener("click", apagar);
lampada.addEventListener("dblclick", quebrar);
