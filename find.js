// let movies = [
//     "The fantastic Mr. Fox",
//     "Mr. and Mrs. Smith",
//     "Mrs. Doubtfire",
//     "Mr. Deeds"
// ]

// const movie = movies.find(movie => {
//     return movie.includes("Mrs");
// })

// const movie2 = movies.find(m =>{
//     m.indexOf("Mrs") === 0;
// })

const books = [{
    title:  "Paradise Lost",
    author: "John Milton",
    rating: 4.5
},
{
    title:  "Excalibur",
    author: "Bernard Cornwell",
    rating: 4.8
},
{ 
    title:  "Harry Potter",
    author: "J.K. Rowling",
    rating: 2.1
}
];

const trash = books.find (b => b.rating <= 2.5);
const miltonBook = books.find (b => b.author.includes("John Milton"));