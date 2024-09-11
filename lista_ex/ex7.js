let numeros = Array()

for(let i=0; i<5; i++){
    numeros[i] = parseInt(prompt("digite cinco numeros inteiro"))

    
}
numeros.sort((a, b) => a - b)

alert("o mairo numero é "+numeros[4]+", e o menor numero é"+numeros[0])