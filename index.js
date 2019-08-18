document.addEventListener('DOMContentLoaded',function()
{
    let finalHTML = renderMovies(movieData)
    
    function renderMovies(movieArray)
    {
        // console.log(movieArray.Year)
        let movieHTML = movieArray.map(currentMovie);
        
        return movieHTML
    }
    
    function currentMovie(movieInfo)
    {
        // console.log(movieInfo.Title)
        return `
        <div class="movie card" style="">
        <img class="card-img-top movie_poster" src="${movieInfo.Poster}" alt="${movieInfo.Title}">
        <div class="card-body">
        <div class="movie_text">
        <div class="card-text movie_title">${movieInfo.Title}</div>
        <div class="card-text release_date">${movieInfo.Year}</div>
        </div>
        <a href="#" id='add_button' class="btn btn-primary">Add</a>
        </div>
        </div>
        `
    }
    // let moviesContainer = document.getElementById('movies_container');
    // moviesContainer.innerHTML = finalHTML.join('')    

    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        let moviesContainer = document.getElementById('movies_container');
        moviesContainer.innerHTML = finalHTML.join('')   
    });
});
