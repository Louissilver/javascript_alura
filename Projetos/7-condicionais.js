console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.")
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado.")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("O comprador não é maior de idade e não posso vender!");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Passagem comprada!")
    listaDeDestinos.splice(1, 1);
} else {
    console.log("O comprador não é maior de idade e não posso vender!");
}
console.log(listaDeDestinos);
console.log("\n\nEmbarque: ");
if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar.");
}


// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador != 18);