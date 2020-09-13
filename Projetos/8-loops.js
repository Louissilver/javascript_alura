console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino encontrado!");
        destinoExiste = true;
        break;
    }
    contador++;
}
if (destinoExiste == false){
    console.log("Destino não existe!");
}

if (destinoExiste && podeComprar) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}