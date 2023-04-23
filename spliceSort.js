let animals = ["shark", "octopus", "stingray", "sea snail"];

animals.splice(1, 0, "turtle"); //splice é usado para remover e inserir items numa array.

animals.splice(3, 1, "sea urchin"); //primeiro, onde começar, segundo quantos objetos depois disso deletar, terceiro, qual item adcionar.

animals.splice(2, 0, "eel"); //o primeiro argumento é colocado ANTES do index indicado.
console.log(animals);

let gods = ["Zeus", "Nyx", "Anubis", "Artemis", "Orochi"];

console.log(gods.sort());