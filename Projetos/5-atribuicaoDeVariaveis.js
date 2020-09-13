console.log("Atribuição de Variáveis");

const idade = 21; // const não muda, é imutável
let primeiroNome = "Luís"; // let permite mudar o valor da variável
let sobrenome = "Silveira";

console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);

const nomeCompleto = primeiroNome + sobrenome;
console.log(`Meu nome é ${nomeCompleto}`);

primeiroNome += sobrenome;
console.log(`Meu nome é ${primeiroNome}`);