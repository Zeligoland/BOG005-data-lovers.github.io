// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
// Aquí van todos los elementos del DOM
function traerDatos(){
    fetch('./data/ghibli/ghibli.json')
    .then (respuesta => respuesta.json() ) // formato en el que se desea obtener la información
    .then (respuesta => console.log(respuesta));
    // .then (films => films.forEach(element => {
        
    };

   // .then (datos => {
    //    datos.forEach(dato => {
     //   console.log(dato);
  //  });

//    })
     // consolear información en formato
  
  
  traerDatos();

