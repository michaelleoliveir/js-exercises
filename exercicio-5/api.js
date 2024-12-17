export async function apiCEP(variavel){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${variavel}/json/`);

        if(!response.ok){
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error("Erro ao buscar CEP: ", error);
        throw error;
    }
}