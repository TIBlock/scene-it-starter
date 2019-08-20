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
                    <button data-movieid="${currentMovie.imdbID}" id="add_button" class="btn btn-primary">Add</b>
                </div>
            </div>
            `
        });
        
        return movieHTML.join("")
    }

    let moviesContainer = getById('movies_container');
    // let movieSearchID = getById.('add_button');
   
    function getById(id){
        return document.getElementById(id)
    }

    
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        moviesContainer.innerHTML = finalHTML
    });
    
    
});
    
    // document.getElementById('add_button').addEventListener('click',saveToWatchlist(`${movieData.imdbID}`));
    
    // function saveToWatchlist(imdbID){
        // console.log(imdbID.imdbID)    
        // }
        
    
    function saveToWatchlist(imdbID){
        // imdbID.preventDefault();
        console.log("You saved a movie! ID" + imdbID)


    };

    function movieClickEvent(event){
        let targetEl = event.target
        let movieID = event.target.getAttribute("data-movieid")
        if(targetEl.id === "add_button")
        saveToWatchlist(movieID)
    }

