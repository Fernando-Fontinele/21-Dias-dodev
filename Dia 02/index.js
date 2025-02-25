let usuarioNome = "";
let usuarioIdade = 0;
let usuarioAltura = 0;
let usuarioPeso = 0;

usuarioNome = prompt("Informe seu nome");
console.log(usuarioNome);

usuarioIdade = prompt("Informe sua idade");
console.log(usuarioIdade);
let usuarioIdadeemInt = Number(usuarioIdade);

usuarioAltura = prompt("Informe sua altura");
console.log(usuarioAltura);
let usuarioAlturaemInt = Number(usuarioAltura);

usuarioPeso = prompt("Informe seu peso");
console.log(usuarioPeso);
let usuarioPesoemInt = Number(usuarioPeso);

let anoDeNascimento = 0
anoDeNascimento = 2025 - usuarioIdade

let IMC = usuarioPeso
IMC = usuarioPeso /(usuarioAltura * usuarioAltura);

console.log("Olá " + usuarioNome + ", você tem " + usuarioIdade + " anos, nasceu em "+ anoDeNascimento +
     ", tem " + usuarioAltura + " de altura, pesa " + usuarioPeso + " kg seu IMC é " + IMC + " kg/m²");



