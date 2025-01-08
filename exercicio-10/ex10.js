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
        console.log(`Erro ${error.message}`)
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

        //mudando o background color de acordo com o álbum
        switch(dados.album) {
            case 'Taylor Swift':
                document.body.style.backgroundColor = '	#baffc9';
                break;
            case 'Fearless':
                document.body.style.backgroundColor = '	#ffffba';
                break;
            case 'Speak Now':
                document.body.style.backgroundColor = '	#B9609FFF';
                break;
            case 'Red':
                document.body.style.backgroundColor = '	#CC2E58FF';
                break;
            case '1989':
                document.body.style.backgroundColor = '	#85BCE9FF';
                break;
            case 'Reputation':
                document.body.style.backgroundColor = '	#6B6B6BFF';
                break;
            case 'Lover':
                document.body.style.backgroundColor = '	#f1c0db';
                break;
            case 'Folklore':
                document.body.style.backgroundColor = '	#A19E9EFF';
                break;
            case 'Evermore':
                document.body.style.backgroundColor = '	#b05925';
                break;
            case 'Midnights':
                document.body.style.backgroundColor = ' #4b5a86';
                break;
            case 'The Tortured Poets Department':
                document.body.style.backgroundColor = ' #c7c2b9';
                break;
            default:
                document.body.style.backgroundColor = '#fff';
        }
    }
}

atualizarDOM();
setInterval(atualizarDOM, 5000)
