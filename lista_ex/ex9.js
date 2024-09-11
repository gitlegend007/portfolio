function filtrarNumerosMaiores(numeros, valorEspecifico) {
    let novoVetor = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > valorEspecifico) {
            novoVetor.push(numeros[i]);
        }
    }  
return novoVetor; 
}
        let quantidade = parseInt(prompt("Quantos números deseja informar?"));
    let numeros = []; 

    for (let i = 0; i < quantidade; i++) {
        let numero = parseFloat(prompt(`Insira o número ${i + 1}:`));
        numeros.push(numero);
    }

    let valorEspecifico = parseFloat(prompt("Informe o valor específico para comparação:"));
    
    let numerosFiltrados = filtrarNumerosMaiores(numeros, valorEspecifico);
    
    alert("Os números maiores que "+valorEspecifico+" são: "+numerosFiltrados.join(", "));
