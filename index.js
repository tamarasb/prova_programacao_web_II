import funcoes from "./cesar.js"

var mensagem = "texto";
var chave = 2;
console.log("Mensagem: " + mensagem);
var mensagem_cifrada = funcoes.criptografia(mensagem,chave,funcoes.cifraLetra);
console.log("Mensagem criptografada: " + mensagem_cifrada);
var mensagem_decifrada = funcoes.criptografia(mensagem_cifrada,chave,funcoes.decifraLetra);
console.log("Mensagem descriptografada: " + mensagem_decifrada);