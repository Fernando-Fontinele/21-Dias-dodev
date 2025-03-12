let usuario = prompt("O senhor está com fome? (sim/não)");
let dinheiro = prompt("O senhor tem dinheiro? (sim/não)");
let restaurante = prompt("O restaurante está aberto? (sim/não)");

if (usuario === "não" || dinheiro === "não") {
    console.log("Hoje a janta será em casa");
} 
else if (usuario === "sim" && dinheiro === "sim" && restaurante === "não") {
    console.log("Peça um delivery!");
} 
else if (usuario === "sim" && dinheiro === "sim" && restaurante === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
}