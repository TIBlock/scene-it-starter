document.addEventListener('DOMContentLoaded',function()
{
    
    let finalHTML = renderMovies(movieData)
    
    function renderMovies(movieArray)
    {
        let movieHTML = movieArray.map(function(currentMovie){
            
            return `
            <div class="movie card" style="">
            <img class="card-img-top movie_poster" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
            <div class="card-body">
            <div class="movie_text">
            <div class="card-text movie_title">${currentMovie.Title}</div>
            <div class="card-text release_date">${currentMovie.Year}</div>
            </div>
            <a onclick="saveToWatchlist(${currentMovie.imdbID})" id="add_button" class="btn btn-primary">Add</a>
            </div>
            </div>
            `
        });
        
        return movieHTML.join("")
    }
   
    let moviesContainer = document.getElementById('movies_container');
    
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        moviesContainer.innerHTML = finalHTML
    });
    
    
    function saveToWatchlist(imdbID){
        // imdbID.preventDefault();
        console.log("You saved a movie! ID" + imdbID)
    
    };


    // document.getElementById('add_button').addEventListener('click',saveToWatchlist(`${movieData.imdbID}`));

    // function saveToWatchlist(imdbID){
    // console.log(imdbID.imdbID)    
    // }

});



