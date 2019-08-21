document.addEventListener('DOMContentLoaded',function()
{
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
    
    //function used to get values from the search bar. 
    document.getElementById('search-form').addEventListener('submit', function(e)
    {
        e.preventDefault();
        var searchString = document.getElementById('search-bar').value; //added ID so we could just search for .value
        var urlEncodedSearchString = encodeURIComponent(searchString)
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response)
        {
            let movieHTML = renderMovies(response.data.Search);
            moviesContainer.innerHTML = movieHTML;

            console.log(response.data);
        });
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
    var movie = movieData.find(function(currentMovie)
    {
        return currentMovie.imdbID === imdbID;
    });
    
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    
    if (watchlist === null)
    {
        watchlist = [];    
    }
    
    watchlist.push(movie)

    console.log(watchlist);
    
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    
};