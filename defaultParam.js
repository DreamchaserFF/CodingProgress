//MANEIRAS ANTIGAS DE SE USAR PARAMETRO PADRÃO

// function multiply (x, y) {
//     return x * y;
// }

// function multiply (x, y) {
//     if (typeof y === "undefined") {
//         y = 1;
//     }
//     return x * y;
// }

// function multiply (x, y) {
//     y = typeof y === "undefined" ? 1 : y
//     return x * y;
// }


function multiply (x, y = 1) {
     return x * y;
 }