//  const nums = [34,2,46,85,23,65,745,354,23];

//  const impar = nums.filter(n => n % 2 === 1);
//  const par = nums.filter(n => n % 2 === 0);

//  const bigNums = nums.filter(n => n % 2 === 0)

// Character data: .alias, .birthplace, .legacy: legacyName, legacyEffect, .objective, personality


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
    dangerRating: 600
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
    dangerRating: 100
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

const threats = enemies.filter(e => e.dangerRating > 400);

const thargenians = enemies.filter(t => t.birthplace.includes("Thargein"));
const enemyNation = enemies.filter(enemy => enemy.birthplace.includes("Solastra") ||
enemy.birthplace.includes("Thargein"));

const query = "Tristan";
const results = enemies.filter(results =>{
    const name = results.fullName.toLowerCase();
    return name.includes(query.toLowerCase())
})
