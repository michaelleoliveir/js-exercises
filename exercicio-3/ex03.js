let telaInicio = document.getElementById("inicio")
let telaTabuada = document.getElementById("tabuada")
let num = document.getElementById("numero")
let listaTabuada = document.getElementById("lista")
let aviso = document.getElementById("aviso")

function calcular() {
    telaInicio.style.display = "none"
    telaTabuada.style.display = "flex"
    numero = num.value

    if (numero === "") {
        aviso.style.display = "flex"
        num.style.borderColor = "#cf6060"
        voltar();
        return;
    } else {
        for(let i = 0; i <= 10; i++) {
            let item = document.createElement("li");
            item.textContent = `${numero} x ${i} = ${numero * i}`;
            listaTabuada.appendChild(item);
        }

        aviso.style.display = "none"
    }
}

function voltar() {
    telaInicio.style.display = "flex"
    telaTabuada.style.display = "none"
    num.value = ""
    listaTabuada.innerHTML = ""
}