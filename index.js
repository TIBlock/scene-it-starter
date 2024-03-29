let saveMovies = null;

document.addEventListener('DOMContentLoaded',function()
{
    function renderMovies(movieArray)
    {
        let movieHTML = movieArray.map(function(currentMovie)
        { 
            return `
            <div hidden data-movieid="${currentMovie.imdbID}class="imdbIframe">
			<iframe src="https://www.imdb.com/title/" + ${currentMovie.imdbID}></iframe>
			</div>
            <div class="glow">
            <div class="movie card" style="">
                <img class="card-img-top movie-poster" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
                <div class="card-body">
                    <div class="movie_text">
                        <div class="card-text movie_title">${currentMovie.Title}</div>
                        <div class="card-text release_date">${currentMovie.Year}</div>
                    </div>
                    <button data-movieid="${currentMovie.imdbID}" id="add_button" class="btn btn-primary">Add</b>
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
    
    //function used to get values from the search bar. 
    document.getElementById('search-form').addEventListener('submit', function(e)
    {
        e.preventDefault();
        var searchString = document.getElementById('search-bar').value; //added ID so we could just search for .value
        var urlEncodedSearchString = encodeURIComponent(searchString)
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response)
        {
            saveMovies = response.data.Search;
            let movieHTML = renderMovies(saveMovies);
            moviesContainer.innerHTML = movieHTML;

        });
    });
});

// function movieIframe(imdbID){
//     console.log(imdbID);
//     let iframe = event.target.getAttribute("data-movieid");
//     if(targetEl.id === "movie-poster")
//     document.
//     // window.open("https://www.imdb.com/title/" + imdbID, "_blank");

// }

function movieClickEvent(event)
{
    event.stopPropagation();
    let targetEl = event.target;
    console.dir(targetEl)
    let movieID = event.target.getAttribute("data-movieid");
    if(targetEl.id === "add_button")
    saveToWatchlist(movieID);
}

function movieIframe(imdbID){
    console.log(imdbID);
    document.getElementById()
    // window.open("https://www.imdb.com/title/" + imdbID, "_blank");

}

function saveToWatchlist(imdbID)
{
    console.log(imdbID)
    console.log(saveMovies)
    

    // axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response)
    // {
    //     console.dir(response)
    //     });
    var movie = saveMovies.find(function(currentMovie) //need to change where it is pulling the imdbID so it can save movies to the watch list.
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