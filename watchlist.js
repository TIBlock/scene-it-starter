document.addEventListener('DOMContentLoaded',function()
{
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    console.dir(watchlist)

    let finalHTML = renderMovies(watchlist);
    function renderMovies(movieArray)
    {
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
                    <button data-movieid="${currentMovie.imdbID}" id="add_button" class="btn btn-primary">Add</b>
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



