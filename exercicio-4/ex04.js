const moedas = document.getElementsByClassName("moedas")
const imagens = document.getElementsByClassName("img")
const numero = document.getElementById("dinheiro")

for(let i = 0; i < moedas.length; i++) {
    const moeda = moedas[i];
    const imagem = imagens[i];

    const span = document.createElement("span");
    span.textContent = moeda.dataset.nome;
    moeda.appendChild(span)

    imagem.addEventListener("mouseover", () => {
        span.style.display = "block"
    })

    imagem.addEventListener("mouseout", () => {
        span.style.display = "none"
    })
}

