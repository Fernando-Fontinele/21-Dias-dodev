let nome;
let idade;
let temCarta;
let temCarro;

// Obtendo os valores do usuário
nome = prompt("Informe seu nome:");
console.log(nome);

idade = Number(prompt("Informe sua idade:"));
console.log(idade);

temCarta = prompt("Você tem carteira de habilitação? (sim/nao)").toLowerCase();
console.log(temCarta);

temCarro = prompt("Você tem carro? (sim/nao)").toLowerCase();
console.log(temCarro);

// Verificando as condições corretamente
if (idade < 18 || temCarta === "nao") {
    console.log(nome + ", você não pode dirigir!");
} else if (idade >= 18 && temCarta === "sim" && temCarro === "nao") {
    console.log(nome + ", você pode dirigir, mas não tem um carro!");
} else if (idade >= 18 && temCarta === "sim" && temCarro === "sim") {
    console.log(nome + ", você será o motorista!");
}
