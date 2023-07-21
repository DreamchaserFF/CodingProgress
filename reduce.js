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


const votes = ["y","y","n","y","n","y","n","n","y"];

// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val] ++
//   } else {
//     tally[val] = 1
//   }
//   return tally;
// }, {})

const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {})

const enemies = [
  {
      fullName    : "Astra Ashwood",
      ocupation   : "Bounty Hunter",
      alias       : "The Chimera",
      birthplace  : "Ashwood Forest",
      legacy      : "Shadows in the Night",
      legacyType  : "Combat",
      personality : "Cheerful, hopeful, kind, irreverent",
      dangerRating: 500
  },
  
  {
      fullName    : "Tristan Blake",
      ocupation   : "Wanted Fugitive",
      alias       : "The Exiled",
      birthplace  : "Atrozzia",
      legacy      : "Redemption",
      legacyType  : "Combat",
      personality : "Quiet, gloomy, humble, tries to appear happy at all times",
      dangerRating: 700
  },
  
  {
      fullName    : "Aria Garland I",
      ocupation   : "Queen of Thargein",
      alias       : "The Silver Light of Thargein",
      birthplace  : "Thargein",
      legacy      : "None",
      legacyType  : "None",
      personality : "Serious, stern, kind-hearted, respectiful, proud",
      dangerRating: 200
  },
  {
      fullName    : "Lumine Bellund",
      ocupation   : "Nun of the Solar Order",
      alias       : "The Bright Child",
      birthplace  : "Thargein",
      legacy      : "Seed of Life",
      legacyType  : "Healing",
      personality : "Cheerful, hopeful, kind, religious",
      dangerRating: 100.50
  },
  
  {
      fullName    : "Ciel Dominique",
      ocupation   : "Higher Vampire",
      alias       : "The Fallen One",
      birthplace  : "Solastra",
      legacy      : "Moonlit Performance",
      legacyType  : "Control",
      personality : "Sad, reserved, introverted",
      dangerRating: 600
  }
  ];

  const enemyByDanger = enemies.reduce((groupByDanger, enemy) => {
    const key = Math.floor(enemy.dangerRating);
    if (!groupByDanger[key]) groupByDanger[key] = [];
    groupByDanger[key].push(enemy)
    return groupByDanger;
  }, {})
