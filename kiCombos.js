// Combo System in Killer Instinct
// BASIC: 2 hits
// TRIPLE: 3
// QUAD: 4
// SOLID: 5
// HYPER: 6
// BRUTAL: 7
// MASTER: 8
// BLASTER: 9
// EXTREME: 10-11
// AWESOME: 12-13
// MONSTER: 14-15
// INSANE: 16-17
// BEASTLY: 18-20
// KING: 21-23
// CRAZY: 24-26
// KILLER: 27-29
// GODLIKE: 30+

let hits = 29;

if (hits < 2){
    console.log("Not a combo.");
}
if (hits === 2){
    console.log("Basic combo!")
}
else if(hits === 3){
    console.log("Triple Combo!");
}
else if(hits === 4){
    console.log("Quad Combo!");
}
else if(hits === 5){
    console.log("Solid Combo!");
}
else if(hits === 6){
    console.log("Hyper Combo!");
}
else if(hits === 7){
    console.log("Brutal Combo!");
}
else if(hits === 8){
    console.log("Master Combo!");
}
else if(hits === 9){
    console.log("Blaster Combo!");
}
else if(hits === 10 || hits === 11){
    console.log("Extreme Combo!");
}
else if(hits === 12 || hits === 13){
    console.log("Awesome Combo!");
}
else if(hits === 14 || hits === 15){
    console.log("MONSTER Combo!");
}
else if(hits === 16 || hits === 17){
    console.log("INSANE Combo!");
}
else if(hits === 18 || hits === 19 || hits === 20){
    console.log("BEASTLY Combo!");
}
else if(hits === 21 || hits === 22 || hits === 23){
    console.log("KIIING Combo!");
}
else if(hits === 24 || hits === 25 || hits === 26){
    console.log("CRAZY Combo!");
}
else if(hits === 27 || hits === 28 || hits === 29){
    console.log("KILLER Combo!");
}
else if(hits >= 30){
    console.log("KIIING Combo!");
}