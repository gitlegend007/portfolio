function contador(palavras, pEspecifica) {
    let contagem = 0;
    
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === pEspecifica) {
            contagem++;
        }
    }
    
    return contagem; 
}

    let quantidade = parseInt(prompt("Quantas palavras deseja informar?"));
    let palavras = [];

    for (let i = 0; i < quantidade; i++) {
        let palavra = prompt("Insira a palavra:"+(i+1));
        palavras.push(palavra);
    }

    let pEspecifica = prompt("Informe a palavra específica para contagem:");
    
    let contagem = contador(palavras, pEspecifica);
    
    alert("A palavra "+pEspecifica+" aparece "+contagem+" vezes no vetor.");
