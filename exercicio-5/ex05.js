function formatar(input) {
    // Remove caracteres não numéricos
    let valor = input.value.replace(/\D/g, "");
    
    if (valor.length > 5) {
        valor = valor.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    }

    input.value = valor;
}
