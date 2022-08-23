// AQUI DEBE IR TODA LA LOGICA//

import ghibli from "./data/ghibli/ghibli.js";

const moviesData = ghibli.films;

export const orderedByTitle = moviesData.sort((a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
});

console.log(orderedByTitle);

/* let titleOrdered;

function sortMovies (moviesData, btnAToZ) {
    moviesData.sort(function (a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()
  ) return -1;
  if(a.title.toLowerCase() > b.title.toLowerCase()
  ) return 1;
  return 0;
});}

titleOrdered = sortMovies;
console.log(titleOrdered);
sortMovies();*/

/* function setOrderedData() {
  for (let j = 0; j < orderedByTitle.length; j++) {
    moviesHtml.push(`
        <div class="card">
          <img
            src="${orderedByTitle[j].poster}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${orderedByTitle[j].title}</h2>
            <p class="directorAndProducer">Director: ${orderedByTitle[j].director} | Producer: ${orderedByTitle[j].director}</p>
            <h5 class="releaseDate">${orderedByTitle[j].release_date}</h5>
            <p class="filmDescription">${orderedByTitle[j].description}
            </p>
          </div>
        </div>
        
    `);}
     }

     function showOrderedMovies() { 
      container.innerHTML = moviesHtml.join("");}

// Trying 2 show it

  setOrderedData();
  showOrderedMovies();*/

//export {orderedByTitle};
