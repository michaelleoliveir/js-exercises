// pegando os elementos do frontend
const filterElement = document.querySelector("#filter");
const cards = document.querySelectorAll(".cards li");

// colocando um evento no input do filter
filterElement.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    if(filterElement.value !== '') {
        for(let card of cards) {
            let titulo = card.querySelector("h2")
        }
    }
}