  //REDUCE RETORNA O ACUMULO DE TODA A ARRAY REDUZINDO-A A UM ELEMENTO, SEJA SOMANDO OU SUBTRAINDO, ETC

const nums = [3,5,7,9,11]


//a = accumulator / b = currentValue
reducedNums = nums.reduce((a, b) =>{ 
    return a + b;
});s