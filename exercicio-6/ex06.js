import CONFIG from "./config.js"

const infosPartidaEl = document.getElementById('resultSection')
const escudoTime1 = document.getElementById('timeUm')
const escudoTime2 = document.getElementById('timeDois')
const golsTime1 = document.getElementById('golsUm')
const golsTime2 = document.getElementById('golsDois')

// acessando a API
const baseUrl = "https://api-football-v1.p.rapidapi.com/v3";
let infosPartida = {};

async function buscarInfo() {
    const ano = document.getElementById('anoSelecionado').value;

    if (!ano) return;

    const params = {
        league: 13, // refere-se a Copa Libertadores
        season: ano, // refere-se ao ano que ocorreu 
        last: 1 // último jogo, já que queremos a final
    };

    const searchParams = new URLSearchParams(params)

    // qual o endpoint que estamos usando
    const endpoint = "/fixtures"

    const options = {
        method: 'get',
        headers: {
            'X-RapidAPI-Key': CONFIG.API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(baseUrl + endpoint + '?' + searchParams, options);
        const responseData = await response.json();

        if (responseData && responseData.response && responseData.response[0]) {
            infosPartida = responseData.response[0]; // Preenche o objeto com as informações da partida
        } else {
            alert('Nenhum dado encontrado para o ano selecionado.');
        }
    } catch (error) {
        console.error('Erro ao buscar informações:', error);
    }
}

// informações obtidas a partir da API
function revelarTimes() {
    escudoTime1.src = infosPartida.teams.home.logo
    escudoTime2.src = infosPartida.teams.away.logo
}

function revelarResultados() {
    golsTime1.innerText = infosPartida.goals.home
    golsTime2.innerText = infosPartida.goals.away
}

buscarInfo();

document.getElementById('show-teams').addEventListener('click', revelarTimes);
document.getElementById('show-score').addEventListener('click', revelarResultados);
document.getElementById('anoSelecionado').addEventListener('change', buscarInfo);
