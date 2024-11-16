const mensagemErro = document.getElementById("mensagem-erro");
const resultado = document.getElementById("resultado");
const botaoRecalc = document.getElementById("recalcular");
const inputAno = document.getElementById("ano");

function calcular() {
    const ano = inputAno.value;

    if (!ano) {
        mensagemErro.style.display = "block";
        mensagemErro.textContent = "Insira um número válido";
        return;
    }
    mensagemErro.style.display = "none";

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();

    if (ano > anoAtual) {
        mensagemErro.style.display = "block";
        mensagemErro.textContent = "O ano inserido é inválido";
    } else {
        const idade = anoAtual - ano;
        resultado.textContent = `Você tem ${idade} anos`;
        botaoRecalc.style.display = "block";
    }
}

function limpar() {
    mensagemErro.style.display = "none";
    resultado.textContent = "";
    botaoRecalc.style.display = "none";
    inputAno.value = "";
}
