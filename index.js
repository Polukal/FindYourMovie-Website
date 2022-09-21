// https://www.omdbapi.com/?t=Star+Wars&apikey=335df740
const movieList = document.querySelector(".movies")


async function main() {
    const movie = await fetch("https://www.omdbapi.com/?t=Star+Wars&apikey=335df740");
    const movieData = await movie.json();



    movieList.innerHTML = movieData.map((user) => ` 
    <div class="movie">
    <figure class="book__img--wrapper">
        <img class="movie__img"
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
            alt="">
    </figure>
    <div class="movie__title">Fast And The Furious</div>
    <div class="movie__ratings">IMDB Rating: </div>
</div>
`)
        .join("");


}

main();