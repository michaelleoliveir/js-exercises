const URL = 'https://taylorswiftapi.onrender.com/get'

async function acessarQuote() {
    try {
        const resposta = await fetch(URL)
        
        if(resposta.status === 200) {
            const objeto = await resposta.json()
                return {
                    quote: objeto.quote,
                    musica: objeto.song,
                    album: objeto.album
                }
        }
    } catch (error) {
        console.log(`Erro ${error.status} - ${error.statusText}`)
    }
}

async function atualizarDOM() {
    const dados = await acessarQuote();
    
    if(dados) {
        // pegando os elementos do HTML
        const nota = document.getElementById("quote");
        const musica = document.getElementById("music");
        const album = document.getElementById("album");

        // atualizando os elementos com as informações fornecidas pela API
        nota.textContent = dados.quote;
        musica.textContent = dados.musica;
        album.textContent = dados.album
    }
}

acessarQuote();
atualizarDOM();
