/*como criar variaveis em JS*/
/*toda variavel precisa de: nome e tipo */
/*String nome = precisa de: nome e tipo */
/* sintaxe: let <nome-variavel*/


/*let idade variavel idade criada mas nenhum valor ou tipo foi passado para a variavel*/

/*let numero = 15 /*variavel chama numero com o valor 15 associado > tipo inteiro (ou int, intergee)

let preço = 9.99 /*variavel do tipo double (decimal) 
chamada preço com o valor 9.99

let nome = "JavaScript" /*variavel do tipo String (texto)
chamado nome com o valor "JavaScript"*/

/* Escrevendo textos no console

console.log("Hello big word! :D")
console.log("how are you mother?? :D")

/*Escreva no console, seu nome, idade e locçização utilizando variaveis.


let myNameIs = "Isaque"
let myAgeIs = 16
let localizacao = "Sbc"

console.log("Meu nome e " + myNameIs + "e a minha idade e" +
    myAgeIs + " e eu moro em" + localizacao + ".") 






/*If-else
    -> Estutura condicional: tomada de decições

let idade = 20

if (idade >= 18) {
    console.log(" e maior de idade.")
} else {
     console.log(" e menor de idade") 
}
/*

/*Exercicio: deselvolva oum codigo que compare uma nota armazenada
na variavel chamada "nota", se for maior ou igual a 5, o aluno
esta aprovado, se for menor que 5, esta reprovado*/


/*MODO PERFUMARIA ATIVADO
Vamos permitir que a entrada do usuario seja capturada*/

/*importando um modulo que permite ler a entrada do usuario*/

const readline = require("readline")

/*configurar para ler os dados do teclado*/

const rl =readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

/*perguntar a nota */

rl.question("digite a nota do aluno: ", function(nota){ 
if ( nota >= 5) {
    console.log("APROVADO!")
  } else {
      console.log("REPROVADO!")
    }

    rl.close();

    /*convertendo entrada para numero*/

    nota =  Number(nota)
} )