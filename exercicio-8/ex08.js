// pegando os elementos do frontend
const filterElement = document.querySelector("#filter");
const cards = document.querySelectorAll(".cards li");

// colocando um evento no input do filter
filterElement.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    if(filterElement.value !== '') {
        for(let card of cards) {

            // passando os elementos para lower case
            let titulo = card.querySelector("h2").textContent.toLowerCase();
            let pesquisa = filterElement.value.toLowerCase();

            // caso o título contenha o texto inserido na pesquisa, o display dos cards muda
            if(!titulo.includes(pesquisa)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "block"
            }
        }
    } else {
        for(let card of cards) {
            card.style.display = "block"
        }
    }
}