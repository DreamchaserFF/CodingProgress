//REST TEM A MESMA SINTAXE DE SPREAD "..." MAS FAZ O OPOSTO, EM VEZ DE ESPALHAR UM ARRAY, REST ACEITA
//INFINITOS ARGUMENTOS

//ARGUMENTS OBJECT: FAZ O MESMO QUE REST DE UMA MANEIRA NAO OTIMIZADA. NÃO USE ISSO.

// function sum() {
//     const argsArr = [...arguments]
//     return argsArr.reduce((total, currVal) => {
//         return total + currVal
//     })
// }

// function fullName(first, last,) {
//     console.log(arguments);
//     console.log(first)
// }

// const multiply = () => {
//     console.log(arguments);
// }


function soma(...nums) {
    return nums.reduce((total, valAtual) => {
        return total + valAtual
    })
}
 
function fullName(first, last, ...titles) {
    console.log("first", first)
    console.log("last", last)
    console.log("titles", titles)
}

const multiply = (...nums) => (
    nums.reduce((total, valAtual) => total * valAtual)
)