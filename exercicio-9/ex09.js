const palavras = document.getElementById('textoInserido')
const contadorPalavras = document.getElementById('contador')

palavras.addEventListener('input', () => {
    const numCaracteres = (palavras.value).length
    contadorPalavras.textContent = `Contador: ${numCaracteres}`
    contadorPalavras.style.display = 'block'
})