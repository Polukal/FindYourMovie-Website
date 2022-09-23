// Titles: https://www.omdbapi.com/?t=thor&page=1&apikey=335df740
// Details: http://www.omdbapi.com/?apikey=[yourkey]&

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('movies');

function submitButtonClick(event) {
    event.preventDefault();
}
movieSearchBox.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
    loadMovies(value)
    
})


//load movies from API
async function loadMovies(searchItem){
    const URL = `https://www.omdbapi.com/?t=${searchItem}&page=1&apikey=335df740`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if(data.Response == "True") displayMovieDetails(data);

}


function displayMovieDetails(movieData){ 
    searchList.innerHTML = `<div class="movie">
    <figure class="book__img--wrapper">
        <img class="movie__img"
            src="${movieData.Poster}"
            alt="">
    </figure>
    <div class="movie__title">${movieData.Title}</div>
    <div class="movie__ratings">IMDB Rating: ${movieData.imdbRating} </div>
    
</div>
<div class="more__info"> Director: ${movieData.Director}<br> <br> Cast: ${movieData.Actors}<br> <br> Year: ${movieData.Year} <br> <br> Genre: ${movieData.Genre} <br>  <br>Runtime: ${movieData.Runtime} <br> <br>
${movieData.Plot}
</div>`
}




