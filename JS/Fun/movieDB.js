var movies = [
    {
        title: "Magic Mike",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Land Before Time",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Kill Bill",
        rating: 4,
        hasWatched: true
    },
    {
        hasWatched: false,
        title: "Pineapple Express",
        rating: 3.1
    }
]

displayMovie(movies);

function displayMovie (movies) {
    movies.forEach(function(x, i){
        if(movies[i].hasWatched === true) {
            console.log(" You have seen " + movies[i].title + " - " + movies[i].rating + " stars");
        } else {
            console.log(" You have NOT seen " + movies[i].title + " - " + movies[i].rating + " stars");
        }

    })

}