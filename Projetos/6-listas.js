console.log(`Trabalhando com listas`);

// const saoPaulo = "São Paulo";
// const salvador = "Salvador";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);