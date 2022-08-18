import { response } from "./data.js";

/* const films_container = document.getElementById("films_container");
const films_number = 20;

const fetchMovies = async () => {
  for (let i = 1; i <= films_number; i++) {
    await getFilm(i);
  }
};

const getFilm = async (id) => {
  const location = `./data/ghibli/ghibli.json`;
  const response = await fetch(location);
  const data = await response.json();
  const studio = data.studio
  const films = data.films
  const titles = films.title
  console.log(titles);

    //.then((response) => response.json())
    //.then((data) => {
     // data.forEach((data) => {
      //  let peliculas = data.films;
       // const film = peliculas;
      //});
    //});
 
  createFilmCard(film);
};

getFilm(1);

fetchMovies();

function createFilmCard(film) {
  const filmEl = document.createElement("div");
  filmEl.classList.add("film");

  const filmInnerHTML = `
    ${film.title}

    `;

  filmEl.innerHTML = filmInnerHTML;

  films_container.appendChild(filmEl);*/