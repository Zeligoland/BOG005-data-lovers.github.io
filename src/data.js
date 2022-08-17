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

// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// Aquí va la lógica de ordenar la información