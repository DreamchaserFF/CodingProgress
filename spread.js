// function giveMeFour(a,b,c,d) {
//     console.log("a", a)
//     console.log("b", b)
//     console.log("c", c)
//     console.log("d", d)
// }

// const colors = ["red", "orange", "yello", "green"]
// console.log(giveMeFour(...colors));

// const str = "BOSS"
// console.log(giveMeFour(...str));

const insetos = ["formiga", "besouro", "libelula"];

const aracnideos = ["aranha", "escorpiao", "carrapato"];

const cefalopodes = ["polvo", "lula", "nautilus"];

const mamiferos = ["gorila", "gato", "humano"];

const aves = ["ganço", "papagaio", "calopsita"];


const invertebrados = [...insetos, ...aracnideos, ...cefalopodes];
const vertebrados = [...mamiferos, ...aves];


const feline = {
    legs: 4,
    family: "Felinae",
    terrestrian: true,
    carnivore: true
};

const canine = {
    legs: 4,
    furry: true    
};

const dog = {
    ...canine,
    isPet: true
};

const tiger = {
    ...feline,
    dangerous: "VERY"
};

const wolf = {
    ...canine,
    isPet: false,
    nocturnal: true,
    packHunter: true,
    weapons: ["fangs", "claws"]
};

const human = {
    inteligent: true,
    bestTrait: "Adaptable",
    legs: 2
};

const werewolf = {
    ...wolf,
    ...human
}
