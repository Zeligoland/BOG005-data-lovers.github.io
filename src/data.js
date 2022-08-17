async function getMovies() {
  const response = await fetch("./data/ghibli/ghibli.json")
    .then((response) => response.json())
    .then((data) => showData(data.films))
    .catch((error) => console.log(error));

  return response;
}

getMovies();

const showData = (data) => {
  console.log(data);
  let body = "";
  for (let i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].poster}</td><td>${data[i].title}</td>
    <td>${data[i].description}</td><td>${data[i].director}</td><td>${data[i].producer}</td>
    </tr>`;
  }
  document.getElementById("data").innerHTML = body;
};

export const response = () => {
  return "response";
};

// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

// Aquí va la lógica de ordenar la información
