let ramdom = Math.floor(Math.random() * 10) + 1;
let nume

do{
    nume = parseInt(prompt("adivinhe o numero de 1 a 10:"))
    
  } while(nume !== ramdom);

alert("você acertou!! o numero era:"+ramdom)