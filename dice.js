//console.log(Math.floor(Math.random() * 6) + 1);

//function rollDie(sides)
//{
//    return console.log(Math.floor(Math.random() * sides) + 1);
//}
//return rollDie(20);

// 2.0

function dado(lados){
    let valor = Math.floor(Math.random() * lados) + 1;
    let mensagem = console.log(valor);
        alert("Você tirou: " + valor);
};
