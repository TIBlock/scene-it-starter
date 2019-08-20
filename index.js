document.addEventListener('DOMContentLoaded',function()
{
    let finalHTML = renderMovies(movieData);
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
    
    document.getElementById('search-form').addEventListener('submit', function(e)
    {
        e.preventDefault();
        moviesContainer.innerHTML = finalHTML;
    });
});
    
function movieClickEvent(event)
{
    let targetEl = event.target;
    let movieID = event.target.getAttribute("data-movieid");
    if(targetEl.id === "add_button")
    saveToWatchlist(movieID);
}

function saveToWatchlist(imdbID)
{
    // imdbID.preventDefault();
    var movie = movieData.find(function(currentMovie)
    {
        return currentMovie.imdbID === imdbID;
    });
    
    var watchListJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchListJSON)

    if (watchlist === null)
    {
        watchlist = [];    
    }

    watchlist.push(movie)
    
    watchListJSON = JSON.stringify(watchlist);
    
    localStorage.setItem('watchlist', watchListJSON);
    
    // console.log('watchlist null');
    // console.dir(watchlist);
};