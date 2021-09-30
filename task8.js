const movies = require('./moviedata.json')

/* EX 1
1. Year = 1962 - 1972
2. imdbRating max and imdbVotes max
3. console.log "Best rated movie is Title, directed by Director and was released on Released."
4. console.log "Most rated movie is Title, directed by Director and was released on Released."
*/
function noYear(Year) {
    return movies.includes((Years) => {
        return Years.Year === Year
     })
}
const YearNO = noYear().Number
console.log(YearNO)

/* EX 2
1. Genre = Drama
const genreMovies = movies.filter((movieGenre) => {
    if (movieGenre.Genre.includes('Drama')) {
        return movieGenre
    }
})
console.log('Drama', genreMovies)


2. imdbRating max and imdbVotes max
3. console.log "Best rated drama is Title, directed by Director and was released on Released."
4. console.log "Most rated drama is Title, directed by Director and was released on Released."
*/

/* EX 3
1. Rated = R
f
2. console.log "Movies that are rated R are: Title separated by comma."
3. Array of all actors that have made an R rated movie. Do not repeat one actor multiple times!
4. console.log "Actors that played in those movies: Actors separated by comma"
*/

function getMoviesR(Rated) {
    return movies.filter((Rate) => {
        return Rate.Rated === Rated
    })
}
const rMovies = getMoviesR('R')

const rTitles = []
function getMoviesRTitle(field) {
    for (let i = 0; i < field.lenght; i++) {
        rTitles.push(field[i].Title)
    }
    return rTitles.join(', ')   
}
console.log('Movies that are rated R are: ' + getMoviesRTitle(rMovies))
//console.log('rMovies', rMovies)

/*console.log('Movies that are rated R are: ' + Title + '.' separated by comma)
/*console.log('Actors that played in those movies: ' + Actors + '.' separated by comma" */