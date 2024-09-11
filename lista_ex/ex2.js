var idade = parseInt(prompt("Digite sua idade:"));

if(idade <=0){
    alert("man tu não existe");
}else if(idade <=12){
    alert("você é uma criança")
}else if(idade <=17){
    alert("você é um adolecente");
}else if(idade <=64){
    alert("você é um adulto");
}else if(idade >=65){
    alert("você é um idoso")
}else if(idade !==0){
    alert("coloque sua idade não seu nome")
}