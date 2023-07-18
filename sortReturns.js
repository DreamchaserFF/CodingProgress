const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a, b) => a - b); //CRESCENTE
const descSort = prices.slice().sort((a, b) => b - a); //DECRESCENTE

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
        dangerRating: 700
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

const dangerScale = enemies.sort((a, b) => b.dangerRating - a.dangerRating);