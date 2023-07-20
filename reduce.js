   //REDUCE RETORNA O ACUMULO DE TODA A ARRAY REDUZINDO-A A UM ELEMENTO, SEJA SOMANDO OU SUBTRAINDO, ETC

const nums = [3,5,7,9,11]


//a = accumulator / b = currentValue
reducedNums = nums.reduce((a, b) =>{ 
    return a + b;
});

//REDUCE NÃO PRECISA SEMPRE SOMAR OU SUBTRAIR. ELE PODE APENAS ATUALIZAR O VALOR

const notas = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const notaMax = notas.reduce((max, valorAtual) => {
//   if (valorAtual > max) return valorAtual;
//   return max;
// })

const notaMax = notas.reduce((max, valorAtual) => {
  return Math.max(max, valorAtual);
});
const notaMin = notas.reduce((min, valorAtual) => (
  Math.min(min, valorAtual)
));

//TAMBÉM É POSSÍVEL INICIAR A FUNÇÃO A PARTIR DE UM CERTO PONTO

const soma = [10, 20, 30, 40, 50].reduce((soma, valorAtual) => {
  return soma + valorAtual;
}, 1000)
