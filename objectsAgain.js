const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        // max:max,
        // min:min,
        // sum:sum,
        // avg:avg
//ERA FEITO ASSIM ANTES
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

const stats = getStats(reviews);


function sacar(arr) {
    //RETORNAR ELEMENTO ALEATÓRIO DA ARRAY
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function sacarCarta() {
    const valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    const naipes = ["paus", "espadas", "copas", "ouros"];

const valor = sacar(valores);
const naipe = sacar(naipes);

    return {
        valor:valor,
        naipe:naipe
    };
}