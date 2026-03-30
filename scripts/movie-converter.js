//imports the movies array from the movies-data.js file, making it available for use in the movie-converter.js module.

import { movies } from './movies-data.js';

export const generateMoviesHTML = () => {
   let movieHTML = '';

   for (const movie of movies) {
       movieHTML += `
           <article class="movie">
               <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
               <div class="movie__details">
                   <h2 class="movie__title">${movie.title}</h2>
                   <p class="movie__description">${movie.description}</p>
               </div>
           </article>
       `;
   }

   return movieHTML
};

//In this chapter, we created a JavaScript module that converts the movie data into HTML markup. 
// By importing the movie data from the movies-data.js file, we can access the movies array and iterate over each movie object.
//Inside the generateMoviesHTML function, we use a for...of loop to go through each movie object and generate the corresponding HTML structure using template literals. 
// We dynamically insert the movie poster, title, and description into the appropriate elements.
//The generated HTML markup for each movie is concatenated into the movieHTML string, which is then returned by the function. 
// This allows us to obtain the complete HTML markup for all the movies.
//By exporting the generateMoviesHTML function, we make it available for use in other modules, such as the main module where we will render the movie cards to the DOM.*/