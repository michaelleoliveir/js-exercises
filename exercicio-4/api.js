export async function cotacaoBRL() {
    const url =
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL";

    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Erro: ${response.status}`)
        } else {
            const data = await response.json();

            return {
                dolar: data.USDBRL.bid,
                euro: data.EURBRL.bid,
                libra: data.GBPBRL.bid,
            }
        }
    } catch(error) {
        console.error("Erro ao buscar cotações: ", error);
        throw error;
    }
}
