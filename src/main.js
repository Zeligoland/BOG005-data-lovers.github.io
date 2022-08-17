// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// Aquí van todos los elementos del DOM

async function getMovies(){
   const response = await fetch('./data/ghibli/ghibli.json')
   .then((response) => response.json())
   .then((data) => {
      let movies = data.films;
      movies.forEach((Element) => {
         console.log(Element);
      });
   });
   return response;
}

getMovies();

