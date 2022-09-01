//Crie a const para a frase aqui 

//A partir da frase a seguir, faça o que se pede

//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const codigo=("Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair")
//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const codigo1=codigo.replace("verde","rosa").replace("azul","laranja")
//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(codigo1)
//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const codigo3 = "mas não deixe o gato sair".toUpperCase()
console.log(`${codigo.replace('mas não deixe o gato sair', codigo3)}`)