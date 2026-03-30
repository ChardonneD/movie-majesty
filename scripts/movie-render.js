export const renderMoviesToDOM = (movieHTML) => {
   const movieList = document.getElementById('movie-list');

   if (movieList) {
       movieList.innerHTML = movieHTML;
   } else {
       console.error('Could not find element with id "movie-list"');
   }
};

//In this chapter, we created a JavaScript module that renders the movie cards HTML to the DOM. 
//The renderMoviesToDOM function takes the generated HTML markup as a parameter and inserts it into the specified DOM element.
//We use document.getElementById('movie-list') to select the DOM element with the ID "movie-list". 
//This assumes that there is an element in the HTML file with the corresponding ID where we want to display the movie cards.
//By setting the innerHTML property of the movieList element to the movieHTML, we effectively insert the movie cards HTML into the webpage. 
// This allows the movie cards to be visible and rendered in the browser.
//We include error handling using an if statement to check if the movieList element exists. 
// If it doesn't exist, we log an error message to the console to help with debugging.
//Exporting the renderMoviesToDOM function allows us to use it in other modules, such as the main module where we will orchestrate the movie card generation and rendering process.
//In the next chapter, we will bring everything together in the main module, where we will import the necessary modules, generate the movie cards HTML, and render them to the DOM.
//