console.log("Atribuição de Variáveis");

const idade = 21; // const não muda, é imutável
let nome = "Luís"; // let permite mudar o valor da variável
let sobrenome = "Silveira";

console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);

const nomeCompleto = nome + sobrenome;
console.log(`Meu nome é ${nomeCompleto}`);

nome += sobrenome;
console.log(`Meu nome é ${nome}`);