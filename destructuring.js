const raceResults = [
    "Eliud Kipchoge",
    "Feyisa Lelisa",
    "Galen Rupp",
    "Ghirmay Ghebreslassie",
    "Alphonce Simbu",
    "Jared Ward"
 ];

//  const gold = raceResults[0];
//  const silver = raceResults[1];
//  const bronze = raceResults[2];

 const [gold, silver, bronze] = raceResults;
 const [first, , ,fourth] = raceResults;
 const [winner, ...others] = raceResults;

//OBJECT DESTRUCTURING

//  const runner = {
//    first: "Eliud",
//    last: "Kipchoge",
//    country: "Kenya",
//    title: "Elder of the Order of the Golden Heart of Kenya"
//  };

// const {first, last, time} = runner;

// const {
//    country: nation,
//    title: honorific
// } = runner

// const {
//    first,
//    last,
//    ...other
// } = runner;


//NESTED DESTRUCTURING

// const goddesses = [{
//    name: "Astra",
//    domain: "Goddess of Fire",
//    alias: "The Witch Queen"
// },
// {
//    name: "Shion",
//    domain: "Goddess of Time",
//    alias: "The Keeper of Fate"
// },
// {
//    name: "Orochi",
//    domain: "Goddess of Culture and Pleasures",
//    alias: "The Demon Empress"
// }]

// const [{alias: deity}, ,{name: trueName}] = goddesses;

// const [,whiteLady] = goddesses;
// const {info} = whiteLady;


const deity = {
   name: "Astra",
   domain: "Goddess of Fire",
   alias: "The Witch Queen"
}

// function print(goddess) {
//    const{
//       name,
//       domain,
//       alias
//    } = goddess;
//    console.log(`${name}, the ${domain}, also known as ${alias}.`)
// };


// function print({
//       name,
//       domain,
//       alias
//    }) {
//    console.log(`${name}, the ${domain}, also known as ${alias}.`)
// };


const demon = [
   "Orochi",
   "Goddess of Culture and Pleasures",
   "The Demon Empress",
]

function info([name, domain, title]) {
   console.log(`Identity: ${name}, the ${domain}.`);
}
