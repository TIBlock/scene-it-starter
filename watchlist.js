document.addEventListener('DOMContentLoaded',function()
{
    var watchlistJSON = localStorage.getItem('watchlist');

    var watchlist = JSON.parse(watchlistJSON);

    let finalHTML = renderMovies(watchlist);

    function renderMovies(movieArray)
    {
        if (movieArray === null){
            return `
            <div class="col-12 text-center emptyList"><st>Your List is Empty!</strong></div>
            `
        }
        let movieHTML = movieArray.map(function(currentMovie)
        { 
            return `
            <div class="movie card" style="">
                <img class="card-img-top movie_poster" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
                <div class="card-body">
                    <div class="movie_text">
                        <div class="card-text movie_title">${currentMovie.Title}</div>
                        <div class="card-text release_date">${currentMovie.Year}</div>
                    </div>
                        
                </div>
            </div>
            `;
        });        
        return movieHTML.join("");
    }
    
    function getById(id)
    {
        return document.getElementById(id);
    }
    
    let moviesContainer = getById('movies_container');

    moviesContainer.innerHTML = finalHTML;
    
});



