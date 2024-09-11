function encontrarMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}
    let quantidade = parseInt(prompt("Quantos números deseja informar?"));

    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = parseFloat(prompt(`Insira o número ${i + 1}:`));
        numeros.push(numero);
    }

    let media = encontrarMedia(numeros);
    
    alert(`A média dos números inseridos é: ${media}`);
