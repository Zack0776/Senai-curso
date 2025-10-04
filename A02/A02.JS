/*trabalhando com métodos de console 

import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.question('Qual é o seu nome?', (nome) => {
    console.log(`Olá, ${nome}`)
})
 */


/*usando o lete -> respeita o escopo do bloco

if(true){
    let nome = "joao lindao"
    console.log(nome);
}
 console.log(nome)
 */

/*usando var -> não respeita o escopo do bloco
if (true){
   var nome = "JavaScript"
   console.log(nome);
}
console.log(nome)
*/

/*exemplo 3-> dentro de um for
for (let i = 0;i < 3; i++){
   console.log("Dentro de for: ", i)
}
console.log ('dentro do for:') 
*/

/*if else*

let idade = 22
if (idade < 12) {
   console.log("criança")
} else if (idade < 18) {
   console.log("Adolescente")
} else {
   console.log("Adulto")
}

let a= 5
let b = 5
let resultado = (a+b)/2
 console.log (resultado)

 


 import readline from 'readline';

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

rl.question("Digite a nota A ", function (A){
    rl.question("Digite a nota B", function (B){
        rl.question("Digite a nota C", function (C){
            rl.question("Digite a nota D", function (D){
                rl.question("Digite a carga horária(em horas) ", function (cargaHoras) {
                    rl.question("Digite a quantidade de faltas ", function (faltas) {

                  A= Number (A)
                  B= Number


                  */







/*let id = "admin"
let senha = "admin123"

//definindo as informações inseridas pelo usuario
/*let idUsario = "admin"
let senhaUsuario = "admin123"*/

//verificação de login
/*
if (id == idUsario && senha == senhaUsuario) {
    console.log("Usuario logado com sucesso.")
} else {
    console.log("Usuario ou senha incorretos.")
}
*/
/*Switch:case

let codigo = 980;

switch (codigo) {
    case 980: console.log("Kindle")
        break;
    case 332: console.log("BYD Dolphin Mini")
        break;
    case 105: console.log("Aspirador robô")
    default: console.log("item não encontrado. :(")
        break;
}
        

const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(" digite o numero 1: ", function (cofre) 
{
    rl.question(" digite o numero 2: ", function (porquinho) 
    {
        console.log(" 1. adição")
        console.log(" 2. subtração")
        console.log(" 3. multiplicação")
        console.log(" 4. divisão")
        
        


        rl.question("digite a operação: ", function(calculadora)
        {

            cofre = Number(cofre)
        porquinho = Number(porquinho)
        calculadora = Number(calculadora)

            switch (calculadora) 
            {
    case 1:
        resultadoSoma = cofre +  porquinho
        console.log("resultado: " + resultadoSoma)
        break;
    case 2:
        resultadoSub = cofre -  porquinho
        console.log("resultado: " + resultadoSub)
        break;
    case 3:
        resultadoMul = cofre *  porquinho
        console.log("resultado: " + resultadoMul)
        break;
    case 4:
        resultadoDiv = cofre /  porquinho
        console.log("resultado: " + resultadoDiv)
        break;
        default:
            console.log("operação invalida")
            break;
          } rl.close ();

        })
       
    })
}) */

/*FOR - Repetição

for (let i = 10; i >= 0; i--){
    console.log("Contador:", i)
}


for (let i = 0; i <=20; i+=2){
    console.log(i);
}
    

for (let i = 1; i <=20; i+=2){
    console.log(i);
}
    


let numero = 8;

while (numero < 10) {
     console.log("número menor que 10.")
}


import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: proces.stdout
})
while (numero < 10){
rl.question("Digite um número: " , function(numero){
    console.log("Número ínvalido. tente de novo")
})
}

*/

 function delay (ms){
    //cria uma rotina que fica "resolvendo" algo, nesse caso,
    //fica esperando milisegundos definidos pelo usuario e
    //exibe o comando no console
    return new Promise(resolve => setTimeout(resolve,ms));
 }

let i = 1

while(i <= 5){
    console.log(i) // escrever o numero na tela
    i++ //incrementar o numero
    await delay (1000)
}