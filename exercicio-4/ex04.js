import { cotacaoBRL } from "./api.js"

const moedas = document.getElementsByClassName("moedas")
const imagens = document.getElementsByClassName("img")
const numero = document.getElementById("dinheiro")
const conversaoNum = document.getElementById("conversao")
const recarregar = document.getElementById("reloadPage")

let moedaSelecionada = "";

for (let i = 0; i < moedas.length; i++) {
    const moeda = moedas[i];
    const imagem = imagens[i];

    //adicionando o nome da moeda no centro da imagem
    const span = document.createElement("span");
    span.textContent = moeda.dataset.nome;
    moeda.appendChild(span)

    imagem.addEventListener("mouseover", () => {
        if (!moeda.classList.contains("selecionado")) {
            span.style.display = "block"
        }
    })

    imagem.addEventListener("mouseout", () => {
        if (!moeda.classList.contains("selecionado")) {
            span.style.display = "none"
        }
    })

    imagem.addEventListener("click", () => {
        for (let m of moedas) {
            m.classList.remove("selecionado")
            m.querySelector("span").style.display = "none"
        }
        moeda.classList.add("selecionado")
        span.style.display = "block"
        moedaSelecionada = moeda.dataset.nome;
        console.log(moedaSelecionada)
    })
}

numero.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        async function calcularCotacao() {
            try {
                const cotacoes = await cotacaoBRL();
                let valorDigitado = parseInt(numero.value);
                let resultado;
                let simbolo = "";

                if(isNaN(valorDigitado) || valorDigitado <= 0) {
                    alert("Digite um valor válido para realizar a conversão");
                    return;
                }

                if(!moedaSelecionada) {
                    alert("Selecione um tipo de moeda");
                    return;
                }
                
                if(moedaSelecionada === "Dólar"){
                    resultado = valorDigitado / cotacoes.dolar;
                    simbolo = "USD"
                } else if (moedaSelecionada === "Euro") {
                    resultado = valorDigitado / cotacoes.euro;
                    simbolo = "EUR"
                } else if(moedaSelecionada === "Libra") {
                    resultado = valorDigitado / cotacoes.libra;
                    simbolo = "GBP"
                }

                conversaoNum.innerText = `${valorDigitado.toFixed(2)} BRL = ${resultado.toFixed(2)} ${simbolo}`;
                recarregar.style.display = "flex"
            } catch(error) {
                console.error("Erro: ", error)
            }
        }

        calcularCotacao();
    }
});

recarregar.addEventListener("click", () => {
    location.reload();
})
