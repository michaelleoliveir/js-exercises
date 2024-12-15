import { cotacaoBRL } from "./api.js"

const moedas = document.getElementsByClassName("moedas")
const imagens = document.getElementsByClassName("img")
const numero = document.getElementById("dinheiro")
const conversaoNum = document.getElementById("conversao")

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
                console.log(`Dólar: ${cotacoes.dolar} BRL`);
                console.log(`Euro: ${cotacoes.euro} BRL`);
                console.log(`Libra: ${cotacoes.libra} BRL`);
            } catch(error) {
                console.error("Erro: ", error)
            }
        }

        calcularCotacao();
    }
})

