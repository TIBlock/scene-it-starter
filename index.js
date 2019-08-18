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



    // console.log(finalHTML)
    let moviesContainer = document.getElementById('movies_container');
    console.log(moviesContainer)
    moviesContainer.innerHTML = finalHTML.join('')    
});


// div class="movie card">
//     <img class="card-img-top movie_poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg alt="This is a picture of the release poster for the movie.">
//     <div class="card-body">
//         <div class="card-text movie_title">The Dark Knight</div>
//         <div class="card-text release_date">2008</div>
//     </div>
//     <a href="#" class="btn btn-primary">Add</a>
// </div>