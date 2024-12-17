import { apiCEP } from './api.js';

const pesquisarCEP = document.getElementById("pesquisar")
const limparCEP = document.getElementById("limpar")
const valorCEP = document.getElementById("cep")

function atribuirDados(data) {
    const rua = document.getElementById("rua");
    const complemento = document.getElementById("complemento");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

// delimitando o tamanho do input do CEP
valorCEP.addEventListener("input", () =>{
    const tamanhoMax = 8;
    
    if(valorCEP.value.length > tamanhoMax){
        valorCEP.value = valorCEP.value.slice(0, tamanhoMax)
    }
});

pesquisarCEP.addEventListener("click", async event =>{
    event.preventDefault(); //cancelar comportamento natural do botão de submeter uma informação para o servidor

    const CEP = valorCEP.value
    
    try{
        const dadosCEP = await apiCEP(CEP);

        if(dadosCEP.erro) {
            alert("CEP não encontrado");
            return;
        }

        atribuirDados(dadosCEP)
    } catch(error){
        console.error("Erro ao buscar CEP")
    }
});

limparCEP.addEventListener("click", () => {
    valorCEP.value = "";
    rua.value = "";
    complemento.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
})
