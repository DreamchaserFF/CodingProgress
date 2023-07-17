//  const nums = [34,2,46,85,23,65,745,354,23];

//  const impar = nums.filter(n => n % 2 === 1);
//  const par = nums.filter(n => n % 2 === 0);

//  const bigNums = nums.filter(n => n % 2 === 0)

// Character data: .alias, .birthplace, .legacy: legacyName, legacyEffect, .objective, personality


const enemies = [
    {
    fullName    : "Astra Ashwood",
    ocupation   : "Guardian and protector of a community of ostracized mystics and their families.",
    alias       : "The Chimera",
    birthplace  : "Ashwood Forest",
    legacy      : "Shadows in the Night",

    personality : "Cheerful, hopeful, kind, irreverent.",
    dangerRating: 500
},

{
    fullName    : "Tristan Blake",
    ocupation   : "Betrayer.",
    alias       : "The Exiled",
    birthplace  : "Atrozzia",
    legacy      : "Redemption",
    personality : "Quiet, gloomy, humble, tries to appear happy at all times.",
    dangerRating: 600
},

{
    fullName    : "Aria Garland I",
    ocupation   : "Queen of Thargein.",
    alias       : "The Silver Light of Thargein",
    birthplace  : "Thargein",
    legacy      : "None.",
    personality : "Serious, stern, kind-hearted, respectiful, proud.",
    dangerRating: 100
}
];

const threats = enemies.filter(e => e.dangerRating > 400);

